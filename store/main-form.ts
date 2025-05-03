import type { IMainForm, IMainFormRequestBody, IMainFormResponse } from '@composables/main-form/types';
import { useMainForm } from '@composables/main-form';
import { setFormModel } from '@composables/main-form/model';
import { useApi } from '@composables/useApi';

export const useAppMainForm = defineStore('main-form', () => {
  const {
    $v, formObj,
    gracePeriodOptions, creditSecurityTypeOptions,
    saveField,
    saveFile,
    applicationId,
  } = useMainForm();
  const stepBody = ref<IMainFormRequestBody>();
  const {
    data, error,
    status, refresh: getApplicationFn,
  } = useApi<IMainFormResponse>('/api/applications/');

  const { refresh: submitStep } = useApi<IMainFormResponse>('/api/applications/', {
    method: 'post',
    body: stepBody,
  });

  const submitApplication = async () => {
    const isFormCorrect = await $v.value.$validate();
    if (!isFormCorrect && applicationId) return;

    stepBody.value = {
      id: applicationId.value ?? '',
      properties: formObj.value,
    };

    await submitStep();
  };

  const getApplication = async () => {
    if (status.value === 'success') return;
    await getApplicationFn();
    if (!error.value && data.value?.properties) {
      formObj.value = setFormModel(data.value.properties);
      applicationId.value = data.value.id.toString();
    }
  };

  const handleBlurSave = async (fieldName: keyof IMainForm) => {
    await nextTick();
    const value = $v.value[fieldName].$model;
    await saveField(fieldName, value);
  };

  return {
    $v, formObj, submitApplication, getApplication,
    creditSecurityTypeOptions, gracePeriodOptions, saveField, saveFile, handleBlurSave,
  };
});
