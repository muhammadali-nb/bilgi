import type { IMainForm } from '../types';

export const setFormModel = (value?: Partial<IMainForm>): Required<IMainForm> => {
  return {
    targetCreditAmount: value?.targetCreditAmount ?? 0,
    youngSpecialistsCount: value?.youngSpecialistsCount ?? 0,
    gracePeriod: value?.gracePeriod ?? 12,
    creditReturnPeriodYears: value?.creditReturnPeriodYears ?? '1 год',
    creditSecurityType: value?.creditSecurityType ?? 'Залог',
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
