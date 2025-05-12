import type {
  ApplicationStatus,
  IMainForm,
  IMainFormRequestBody,
  IMainFormResponse,
  StatusField,
} from '@composables/main-form/types';
import { useMainForm } from '@composables/main-form';
import { setFormModel } from '@composables/main-form/model';
import { PropertyStatus } from '@composables/main-form/types';
import { useApi } from '@composables/use-api';
import { useToastStore } from '@store/toast';
import useVuelidate from '@vuelidate/core';

export const useAppMainForm = defineStore('main-form', () => {
  const stepBody = ref<IMainFormRequestBody>();
  const applicationStatus = ref<ApplicationStatus>();
  const {
    $v, formObj,
    gracePeriodOptions, creditSecurityTypeOptions,
    saveField,
    saveFile, rules,
    applicationId,
  } = useMainForm();
  const formStatuses = ref<StatusField[]>([]);
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
    }
  };

  const handleBlurSave = async (fieldName: keyof IMainForm) => {
    await nextTick();
    const model = $v.value?.[fieldName]?.$model;

    if (model !== undefined) {
      await saveField(fieldName, model);
    }
  };

  const getFirstInvalidStep = async () => {
    let firstInvalidStep: number | null = null;

    for (let i = 0; i < rules.length; i++) {
      const validation = useVuelidate(rules[i], formObj.value);
      await validation.value.$validate();

      if (validation.value.$error) {
        firstInvalidStep = i + 1;
        break;
      }
    }

    return firstInvalidStep;
  };

  // Получаем шаг с отклонённым полем
  const getStepByRejectedField = (): number | null => {
    if (!formStatuses.value.length) return null;

    const rejectedField = formStatuses.value.find(
      s => s.status === PropertyStatus.Rejected,
    );

    if (!rejectedField) return null;

    const fieldName = rejectedField.name;

    // Ищем шаг, в котором находится это поле
    for (let i = 0; i < rules.length; i++) {
      const stepFields = Object.keys(rules[i]);
      if (stepFields.includes(fieldName)) {
        return i + 1; // Индексация с 1
      }
    }

    return null;
  };

  return {
    $v, formObj, submitApplication, getApplication, rules, applicationStatus, isRejected,
    creditSecurityTypeOptions, gracePeriodOptions, saveField, saveFile, handleBlurSave,
    formStatuses, getStepByRejectedField, applicationId, getFirstInvalidStep,
  };
});
