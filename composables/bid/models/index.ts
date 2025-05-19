import type { BidTabData, IBid } from '../types';
import { PropertyStatus } from '@composables/main-form/types';

export const useBidFields = (bid: IBid): BidTabData => {
  const { properties, propertyStatuses } = bid;

  const statusMap = propertyStatuses.reduce<Record<string, PropertyStatus>>((map, item) => {
    map[item.name] = item.status;
    return map;
  }, {});

  const wrap = <T extends keyof typeof properties>(key: T) => ({
    value: properties[key],
    status: (statusMap[key as string] ?? PropertyStatus.Pending) as PropertyStatus,
  });

  return {
    main: {
      targetCreditAmount: wrap('targetCreditAmount'),
      youngSpecialistsCount: wrap('youngSpecialistsCount'),
      gracePeriod: wrap('gracePeriod'),
      creditReturnPeriodYears: wrap('creditReturnPeriodYears'),
      creditSecurityType: wrap('creditSecurityType'),
      plannedCreditReturnSchedule: wrap('plannedCreditReturnSchedule'),
      creditReturnFrequency: wrap('creditReturnFrequency'),
      projectDescription: wrap('projectDescription'),
      ownFundsAmount: wrap('ownFundsAmount'),
      organizationSocialIndicators: wrap('organizationSocialIndicators'),
      contactPersonFullName: wrap('contactPersonFullName'),
      mobilePhone: wrap('mobilePhone'),
      workPhone: wrap('workPhone'),
      homePhone: wrap('homePhone'),
      email: wrap('email'),
      directorFullName: wrap('directorFullName'),
      applicantQuestionnaireDocumentUrl: wrap('applicantQuestionnaireDocumentUrl'),
    },
    financial: {
      financialStatements: wrap('financialStatements'),
      taxDebtAbsenceCertificate: wrap('taxDebtAbsenceCertificate'),
      bankAccountCertificate: wrap('bankAccountCertificate'),
      projectBusinessPlan: wrap('projectBusinessPlan'),
      targetFundSpendingEstimate: wrap('targetFundSpendingEstimate'),
      leaseAgreement: wrap('leaseAgreement'),
    },
    security: {
      landCadastrePassport: wrap('landCadastrePassport'),
      ownershipDocuments: wrap('ownershipDocuments'),
      realEstateValuationReport: wrap('realEstateValuationReport'),
      vehicleRegistrationCertificate: wrap('vehicleRegistrationCertificate'),
      vehicleValuationReport: wrap('vehicleValuationReport'),
      shareholderResolution: wrap('shareholderResolution'),
      guarantorFinancialAndFoundingDocs: wrap('guarantorFinancialAndFoundingDocs'),
      auditorOpinion: wrap('auditorOpinion'),
      guarantorLetter: wrap('guarantorLetter'),
      insuranceCompanyLetter: wrap('insuranceCompanyLetter'),
    },
    collateralDocuments: {
      certificateOfStateRegistration: wrap('certificateOfStateRegistration'),
      organizationCharter: wrap('organizationCharter'),
      foundingAgreement: wrap('foundingAgreement'),
      foundersDecisionToOpenOrganization: wrap('foundersDecisionToOpenOrganization'),
      foundersDecisionOnTargetLoan: wrap('foundersDecisionOnTargetLoan'),
      orderOnTargetLoan: wrap('orderOnTargetLoan'),
      ceoAuthorityConfirmation: wrap('ceoAuthorityConfirmation'),
      chiefAccountantAuthorityConfirmation: wrap('chiefAccountantAuthorityConfirmation'),
      ceoPassport: wrap('ceoPassport'),
      chiefAccountantPassport: wrap('chiefAccountantPassport'),
      itParkResidencyCertificate: wrap('itParkResidencyCertificate'),
      educationActivityPermission: wrap('educationActivityPermission'),
    },
  };
};
