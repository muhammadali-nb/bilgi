export interface IMainForm {
  targetCreditAmount: number
  youngSpecialistsCount: number
  gracePeriod: MainFormPeriod
  creditReturnPeriodYears: MainFormPeriod // уточнить
  creditSecurityType: MainFormCreditType
  plannedCreditReturnSchedule: number
  creditReturnFrequency: number
  projectDescription: string
  ownFundsAmount: number
  organizationSocialIndicators: string
  contactPersonFullName: string
  mobilePhone: string
  workPhone: string
  homePhone: string
  email: string
  directorFullName: string
  applicantQuestionnaireDocumentUrl: string

  certificateOfStateRegistration: string
  organizationCharter: string
  foundingAgreement: string
  foundersDecisionToOpenOrganization: string
  foundersDecisionOnTargetLoan: string
  orderOnTargetLoan: string
  ceoAuthorityConfirmation: string
  chiefAccountantAuthorityConfirmation: string
  ceoPassport: string
  chiefAccountantPassport: string
  itParkResidencyCertificate: string
  educationActivityPermission: string

  financialStatements: string
  taxDebtAbsenceCertificate: string
  bankAccountCertificate: string
  projectBusinessPlan: string
  targetFundSpendingEstimate: string
  leaseAgreement: string
}

export interface IMainFormRequestBody {
  id?: string
  properties: IMainForm
}

export enum MainFormPeriod {
  OneYear = 12,
  ThreeYears = 36,
  FiveYears = 60,
}

export enum MainFormCreditType {
  Pledge = 1, // Залог
  Guarantee = 2, // Поручительство
  Insurance = 3, // Страховая
}

export interface IMainFormResponse {
  id: number
  status: number
  number: number
  properties: IMainForm
}
