import type { BidTabData, IBid } from '../types';

const BID_FIELDS_CONFIG = {
  main: {
    groups: {
      contact: {
        title: 'Контактная информация',
        fields: [
          'contactPersonFullName',
          'directorFullName',
          'homePhone',
          'mobilePhone',
          'workPhone',
          'applicantQuestionnaireDocumentUrl'
        ]
      },
      basic: {
        title: 'Основные сведения',
        fields: [
          'targetCreditAmount',
          'youngSpecialistsCount',
          'creditReturnPeriodYears',
          'creditSecurityType'
        ]
      },
      economic: {
        title: 'Экономическое обоснование целевого кредита',
        fields: [
          'ownFundsAmount',
          'projectDescription',
          'organizationSocialIndicators'
        ]
      }
    }
  },
  financial: {
    groups: {
      documents: {
        title: 'Финансовые документы',
        fields: [
          'financialStatements',
          'taxDebtAbsenceCertificate',
          'bankAccountCertificate',
          'projectBusinessPlan',
          'targetFundSpendingEstimate',
          'leaseAgreement'
        ]
      }
    }
  },
  security: {
    groups: {
      realEstate: {
        title: 'Недвижимое имущество',
        fields: [
          'landCadastrePassport',
          'ownershipDocuments',
          'realEstateValuationReport'
        ]
      },
      vehicle: {
        title: 'Автотранспорт',
        fields: [
          'vehicleRegistrationCertificate',
          'vehicleValuationReport'
        ]
      },
      guaranty: {
        title: 'Поручительство',
        fields: [
          'shareholderResolution',
          'guarantorFinancialAndFoundingDocs',
          'auditorOpinion',
          'guarantorLetter'
        ]
      },
      insurance: {
        title: 'Страховой полис',
        fields: [
          'insuranceCompanyLetter'
        ]
      }
    }
  },
  collateralDocuments: {
    groups: {
      registration: {
        title: 'Регистрационные документы',
        fields: [
          'certificateOfStateRegistration',
          'organizationCharter',
          'foundingAgreement',
          'foundersDecisionToOpenOrganization',
          'foundersDecisionOnTargetLoan',
          'orderOnTargetLoan'
        ]
      },
      authority: {
        title: 'Документы о полномочиях',
        fields: [
          'ceoAuthorityConfirmation',
          'chiefAccountantAuthorityConfirmation',
          'ceoPassport',
          'chiefAccountantPassport',
          'itParkResidencyCertificate',
          'educationActivityPermission'
        ]
      }
    }
  }
} as const;

export const useBidFields = (bid: IBid['properties']): BidTabData => {
  const result = {
    main: {},
    financial: {},
    security: {},
    collateralDocuments: {}
  } as BidTabData;

  Object.entries(BID_FIELDS_CONFIG).forEach(([tabKey, tabConfig]) => {
    Object.values(tabConfig.groups).forEach(group => {
      group.fields.forEach((field: string) => {
        (result[tabKey as keyof BidTabData] as any)[field] = bid[field as keyof typeof bid];
      });
    });
  });

  return result;
};

export const getBidGroups = (tabKey: keyof typeof BID_FIELDS_CONFIG) => {
  return BID_FIELDS_CONFIG[tabKey].groups;
};
