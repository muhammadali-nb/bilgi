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
    homePhone: value?.homePhone ?? '',
    email: value?.email ?? '',
    directorFullName: value?.directorFullName ?? '',
    applicantQuestionnaireDocumentUrl: value?.applicantQuestionnaireDocumentUrl ?? '',

    certificateOfStateRegistration: value?.certificateOfStateRegistration ?? '',
    organizationCharter: value?.organizationCharter ?? '',
    foundingAgreement: value?.foundingAgreement ?? '',
    foundersDecisionToOpenOrganization: value?.foundersDecisionToOpenOrganization ?? '',
    foundersDecisionOnTargetLoan: value?.foundersDecisionOnTargetLoan ?? '',
    orderOnTargetLoan: value?.orderOnTargetLoan ?? '',
    ceoAuthorityConfirmation: value?.ceoAuthorityConfirmation ?? '',
    chiefAccountantAuthorityConfirmation: value?.chiefAccountantAuthorityConfirmation ?? '',
    ceoPassport: value?.ceoPassport ?? '',
    chiefAccountantPassport: value?.chiefAccountantPassport ?? '',
    itParkResidencyCertificate: value?.itParkResidencyCertificate ?? '',
    educationActivityPermission: value?.educationActivityPermission ?? '',

    financialStatements: value?.financialStatements ?? '',
    taxDebtAbsenceCertificate: value?.taxDebtAbsenceCertificate ?? '',
    bankAccountCertificate: value?.bankAccountCertificate ?? '',
    projectBusinessPlan: value?.projectBusinessPlan ?? '',
    targetFundSpendingEstimate: value?.targetFundSpendingEstimate ?? '',
    leaseAgreement: value?.leaseAgreement ?? '',

    landCadastrePassport: value?.landCadastrePassport ?? '',
    ownershipDocuments: value?.ownershipDocuments ?? '',
    realEstateValuationReport: value?.realEstateValuationReport ?? '',
    vehicleRegistrationCertificate: value?.vehicleRegistrationCertificate ?? '',
    vehicleValuationReport: value?.vehicleValuationReport ?? '',
    shareholderResolution: value?.shareholderResolution ?? '',
    guarantorFinancialAndFoundingDocs: value?.guarantorFinancialAndFoundingDocs ?? '',
    auditorOpinion: value?.auditorOpinion ?? '',
    guarantorLetter: value?.guarantorLetter ?? '',
    insuranceCompanyLetter: value?.insuranceCompanyLetter ?? '',
  };
};
