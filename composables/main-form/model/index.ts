import type { IMainForm } from '../types';
import { CODE } from '@composables/ui/phone-mask/utils';
import { MainFormCreditType, MainFormPeriod } from '../types';

export const setFormModel = (value?: Partial<IMainForm>): Required<IMainForm> => {
  return {
    targetCreditAmount: value?.targetCreditAmount ?? 0,
    youngSpecialistsCount: value?.youngSpecialistsCount ?? 0,
    gracePeriod: value?.gracePeriod ?? 12,
    creditReturnPeriodYears: value?.creditReturnPeriodYears ?? MainFormPeriod.OneYear,
    creditSecurityType: value?.creditSecurityType ?? MainFormCreditType.Pledge,
    plannedCreditReturnSchedule: value?.plannedCreditReturnSchedule ?? 1,
    creditReturnFrequency: value?.creditReturnFrequency ?? 1,
    projectDescription: value?.projectDescription ?? '',
    ownFundsAmount: value?.ownFundsAmount ?? 0,
    organizationSocialIndicators: value?.organizationSocialIndicators ?? '',
    contactPersonFullName: value?.contactPersonFullName ?? '',
    mobilePhone: value?.mobilePhone?.substring(CODE.length) ?? '',
    workPhone: value?.workPhone?.substring(CODE.length) ?? '',
    homePhone: value?.homePhone?.substring(CODE.length) ?? '',
    email: value?.email ?? '',
    directorFullName: value?.directorFullName ?? '',
    applicantQuestionnaireDocumentUrl: value?.applicantQuestionnaireDocumentUrl ?? '',
  };
};
