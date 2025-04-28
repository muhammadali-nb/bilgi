import type { IMainForm } from '@composables/main-form/types';
import { setFormModel } from '@composables/main-form/model';
import { useValidationRules } from '@composables/ui/validation-rules';
import useVuelidate from '@vuelidate/core';

export const useMainForm = () => {
  const { min, max, requiredField } = useValidationRules();

  const formObj = reactive<IMainForm>(setFormModel());

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
    email: { ...requiredField() },
    directorFullName: { ...requiredField() },
    applicantQuestionnaireDocumentUrl: { ...requiredField() },
  };

  const $v = useVuelidate(rules, formObj);

  return { $v, formObj };
};
