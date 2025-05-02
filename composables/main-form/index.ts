import type { IFocusedField, ISelectedFile } from '@composables/auth/types';
import type { IMainForm } from '@composables/main-form/types';
import { creditSecurityTypeOptionsData, monthsForm } from '@composables/main-form/data';
import { setFormModel } from '@composables/main-form/model';
import { useValidationRules } from '@composables/ui/validation-rules';
import { useApi } from '@composables/useApi';
import { getYearFromMonthLength } from '@utils/years-counter';
import useVuelidate from '@vuelidate/core';

export const useMainForm = () => {
  const { t } = useI18n();
  // const { $i18n } = useNuxtApp();
  const { requiredField } = useValidationRules();
  const formObj = ref<IMainForm>(setFormModel());
  const focusedField = ref<IFocusedField>();
  const selectedFile = ref<ISelectedFile>();
  const formDataRef = ref<FormData | null>(null);

  const creditSecurityTypeOptions = computed(() =>
    creditSecurityTypeOptionsData.map(type => ({
      name: `${t(type.name)}`,
      value: type.value,
    })),
  );

  // Опции для поля "Период льгот"
  const gracePeriodOptions = computed(() =>
    monthsForm.map((month) => {
      const monthValue = getYearFromMonthLength(month);
      return {
        name: `${t(monthValue.type, monthValue.value)}`,
        value: month,
      };
    }),
  );

  const rules = {
    targetCreditAmount: { ...requiredField() },
    youngSpecialistsCount: { ...requiredField() },
    gracePeriod: { ...requiredField() },
    creditReturnPeriodYears: { ...requiredField() },
    creditSecurityType: { ...requiredField() },
    plannedCreditReturnSchedule: { ...requiredField() },
    creditReturnFrequency: { ...requiredField() },
    projectDescription: { ...requiredField() },
    ownFundsAmount: { ...requiredField() },
    organizationSocialIndicators: { ...requiredField() },
    contactPersonFullName: { ...requiredField() },
    mobilePhone: { ...requiredField() },
    workPhone: { ...requiredField() },
    homePhone: { ...requiredField() },
    email: { ...requiredField() },
    directorFullName: { ...requiredField() },
    applicantQuestionnaireDocumentUrl: { ...requiredField() },
  };

  const $v = useVuelidate(rules, formObj);

  const { refresh: saveFieldFn } = useApi('api/properties', {
    method: 'post',
    body: focusedField,
  });

  const saveField = async (field: keyof IMainForm, value: string | number) => {
    if (!field || !value) return;

    focusedField.value = {
      applicationId: 1,
      type: field,
      value: value.toString(),
    };

    await saveFieldFn();
    focusedField.value = undefined;
  };

  const saveFile = async (field: string, file: File) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('applicationId', '1');
    formData.append('file', file);

    const { data: fileData, status } = await useFetch('/api/files', {
      method: 'POST',
      body: formData,
    });

    if (status.value === 'success' && fileData) {
      focusedField.value = {
        applicationId: 1,
        type: field,
        value: fileData.value,
      };

      await saveFieldFn();
    }
  };
  return {
    $v,
    formObj,
    gracePeriodOptions,
    creditSecurityTypeOptions,
    saveField, saveFile,

  };
};
