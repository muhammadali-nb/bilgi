import type { IFocusedField } from '@composables/auth/types';
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
  const applicationId = useCookie('applicationId');

  const creditSecurityTypeOptions = computed(() =>
    creditSecurityTypeOptionsData.map(type => ({
      name: `${t(type.name)}`,
      value: type.value,
    })),
  );

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
    if (applicationId && (!field || !value)) return;

    focusedField.value = {
      applicationId: applicationId.value ?? 0,
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
        applicationId: applicationId.value ?? 0,
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
    applicationId,
  };
};
