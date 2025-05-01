import type { IFocusedField } from '@composables/auth/types';
import type { IMainForm } from '@composables/main-form/types';
import { creditSecurityTypeOptionsData, monthsForm } from '@composables/main-form/data';
import { setFormModel } from '@composables/main-form/model';
import { useValidationRules } from '@composables/ui/validation-rules';
import { useApi } from '@composables/useApi';
import { getYearFromMonthLength } from '@utils/years-counter';
import useVuelidate from '@vuelidate/core';
import { computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

export const useMainForm = () => {
  const { t } = useI18n();
  const { requiredField } = useValidationRules();
  const formObj = reactive(setFormModel());
  const focusedField = ref<IFocusedField | null>(null);

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
    if (!field || !value) {
      return;
    }

    focusedField.value = {
      applicationId: 1,
      type: field,
      value: value.toString(),
    };
    await saveFieldFn();
    focusedField.value = null;
  };

  return {
    $v,
    formObj,
    gracePeriodOptions,
    creditSecurityTypeOptions,
    saveField,
  };
};
