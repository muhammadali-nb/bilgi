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

    activeStep, next, steps, prev, checkRouteStep,
  } = useMainForm();
  const stepBody = ref<IMainFormRequestBody>();
  const {
    data, error,
    status, refresh: getApplicationFn,
  } = useApi<IMainFormResponse>('/api/applications/');

  const { refresh: submitStep, error: submitError } = useApi<IMainFormResponse>('/api/applications/', {
    method: 'post',
    body: stepBody,
  });

  const submitApplication = async () => {
    const isFormCorrect = await $v.value.$validate();
    if (!isFormCorrect && applicationId) return false;

    stepBody.value = {
      id: applicationId.value ?? '',
      properties: formObj.value,
    };

    await submitStep();
    if (submitError.value) {
      // show error toast
      return false;
    }

    return true;
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
    const model = $v.value?.[fieldName]?.$model;

    if (model !== undefined) {
      await saveField(fieldName, model);
    }
  };

  return {
    $v, formObj, submitApplication, getApplication,
    creditSecurityTypeOptions, gracePeriodOptions, saveField, saveFile, handleBlurSave,
    // stepper
    activeStep, next, steps, prev, checkRouteStep,
  };
});
