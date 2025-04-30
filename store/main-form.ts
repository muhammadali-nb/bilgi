import type { IMainFormResponse } from '@composables/main-form/types';
import { useMainForm } from '@composables/main-form';
import { setFormModel } from '@composables/main-form/model';
import { useApi } from '@composables/useApi';

export const useAppMainForm = defineStore('main-form', () => {
  const { $v, formObj, gracePeriodOptions, creditSecurityTypeOptions } = useMainForm();

  const { data, error, status, refresh: getApplication } = useApi<IMainFormResponse>('/api/Applications/');

  const handleSubmit = async () => {
    const isFormCorrect = await $v.value.$validate();
    if (!isFormCorrect) {
      console.log('Форма не корректная!');
    };
  };

  onBeforeMount(async () => {
    await getApplication();

    if (data.value?.properties) {
      Object.assign(formObj, setFormModel(data.value?.properties));
    }
  });

  return { $v, formObj, handleSubmit, creditSecurityTypeOptions, gracePeriodOptions };
});
