import type { IMainForm } from '../types';
import { MainFormCreditType, MainFormPeriod } from '../types';

export const setFormModel = (value?: Partial<IMainForm>): Required<IMainForm> => {
  return {
    targetCreditAmount: value?.targetCreditAmount ?? 0,
    youngSpecialistsCount: value?.youngSpecialistsCount ?? 0,
    gracePeriod: value?.gracePeriod ?? MainFormPeriod.OneYear,
    creditReturnPeriodYears: value?.creditReturnPeriodYears ?? MainFormPeriod.OneYear,
    creditSecurityType: value?.creditSecurityType ?? MainFormCreditType.Pledge,
    plannedCreditReturnSchedule: value?.plannedCreditReturnSchedule ?? '',
    creditReturnFrequency: value?.creditReturnFrequency ?? '',
    projectDescription: value?.projectDescription ?? '',
    ownFundsAmount: value?.ownFundsAmount ?? 0,
    organizationSocialIndicators: value?.organizationSocialIndicators ?? '',
    contactPersonFullName: value?.contactPersonFullName ?? '',
    mobilePhone: value?.mobilePhone ?? '',
    workPhone: value?.workPhone ?? '',
    homePhone: value?.homePhone ?? '',
    email: value?.email ?? '',
    directorFullName: value?.directorFullName ?? '',
    applicantQuestionnaireDocumentUrl: value?.applicantQuestionnaireDocumentUrl ?? '',
  };
};
