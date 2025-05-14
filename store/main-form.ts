import type {
  ApplicationStatus,
  IMainForm,
  IMainFormRequestBody,
  IMainFormResponse,
} from '@composables/main-form/types';
import { useMainForm } from '@composables/main-form';
import { setFormModel } from '@composables/main-form/model';
import { PropertyStatus } from '@composables/main-form/types';
import { useApi } from '@composables/use-api';
import { useToastStore } from '@store/toast';

export const useAppMainForm = defineStore('main-form', () => {
  const stepBody = ref<IMainFormRequestBody>();
  const applicationStatus = ref<ApplicationStatus>();
  const {
    $v, formObj,
    gracePeriodOptions, creditSecurityTypeOptions,
    saveField,
    saveFile, rules,
    applicationId,
    generateFieldToStepMap,
    fieldToStepMap, formStatuses,
    getRejectedFields,
    getFirstInvalidStep,
    getStepByRejectedField,
  } = useMainForm();
  const $toast = useToastStore();
  const {
    data, error,
    status, refresh: getApplicationFn,
  } = useApi<IMainFormResponse>('/api/applications/');

  const isRejected = (field: string): boolean => {
    const item = formStatuses.value.find(s => s.name.toLowerCase() === field.toLowerCase()); // Приводим к нижнему регистру Otabek fix it
    return item?.status === PropertyStatus.Rejected;
  };

  const {
    refresh: submitStep,
    error: submitError,
    data: submitData,
    status: submitStatus,
  } = useApi<IMainFormResponse>('/api/applications/', {
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
    if (submitStatus.value === 'success' && submitData.value) {
      applicationStatus.value = submitData.value.status;
    }
    if (submitError.value) {
      $toast.error('Ошибка!', 'Файл некорректная форма попробуйте еще раз');
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
      formStatuses.value = data.value.propertyStatuses;
      applicationStatus.value = data.value.status;
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
    $v, formObj, submitApplication, getApplication, rules, applicationStatus,
    isRejected, creditSecurityTypeOptions, gracePeriodOptions, saveField, saveFile,
    handleBlurSave, formStatuses, applicationId, getFirstInvalidStep, getRejectedFields,
    generateFieldToStepMap, fieldToStepMap, getStepByRejectedField,
  };
});
