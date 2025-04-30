import type { IMainForm } from '@composables/main-form/types';
import { creditSecurityTypeOptionsData, monthsForm } from '@composables/main-form/data';
import { setFormModel } from '@composables/main-form/model';
import { useValidationRules } from '@composables/ui/validation-rules';
import { getYearFromMonthLength } from '@utils/years-counter';
import useVuelidate from '@vuelidate/core';
import { useI18n } from 'vue-i18n';

export const useMainForm = () => {
  const { min, max, requiredField } = useValidationRules();

  const { t } = useI18n();
  const formObj = reactive<IMainForm>(setFormModel());

  const creditSecurityTypeOptions = computed(() =>
    creditSecurityTypeOptionsData.map(type => ({
      name: `${t(type.name)}`,
      value: type.value,
    })),
  );

  const gracePeriodOptions = computed(() => {
    return monthsForm.map((month) => {
      const monthValue = getYearFromMonthLength(month);
      return {
        name: `${t(monthValue.type, monthValue.value)}`,
        value: month,
      };
    });
  });

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

  return { $v, formObj, gracePeriodOptions, creditSecurityTypeOptions };
};
