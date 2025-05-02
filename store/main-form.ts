import type { IMainFormResponse } from '@composables/main-form/types';
import { useMainForm } from '@composables/main-form';
import { setFormModel } from '@composables/main-form/model';
import { useApi } from '@composables/useApi';

export const useAppMainForm = defineStore('main-form', () => {
  const {
    $v, formObj,
    gracePeriodOptions, creditSecurityTypeOptions,
    saveField,
    saveFile,
  } = useMainForm();

  const {
    data, error,
    status, refresh: getApplicationFn,
  } = useApi<IMainFormResponse>('/api/Applications/');

  const handleSubmit = async () => {
    const isFormCorrect = await $v.value.$validate();
    if (!isFormCorrect) {
      console.log('Форма не корректная!');
    };
  };

  const getApplication = async () => {
    if (status.value === 'success') return;
    await getApplicationFn();
    if (!error.value && data.value?.properties) {
      formObj.value = setFormModel(data.value.properties);
      console.log(data.value.properties);
    }
  };

  return {
    $v, formObj, handleSubmit, getApplication,
    creditSecurityTypeOptions, gracePeriodOptions, saveField, saveFile,
  };
});
