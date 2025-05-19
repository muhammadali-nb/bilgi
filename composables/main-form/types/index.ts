export interface IFirstStep {
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
}
export interface ISecondStep {
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
}

export interface IThirdStep {
  financialStatements: string
  taxDebtAbsenceCertificate: string
  bankAccountCertificate: string
  projectBusinessPlan: string
  targetFundSpendingEstimate: string
  leaseAgreement: string
}

export interface IFourthStep {
  landCadastrePassport: string
  ownershipDocuments: string
  realEstateValuationReport: string
  vehicleRegistrationCertificate: string
  vehicleValuationReport: string
  shareholderResolution: string
  guarantorFinancialAndFoundingDocs: string
  auditorOpinion: string
  guarantorLetter: string
  insuranceCompanyLetter: string
}

export interface IMainForm extends IFirstStep, ISecondStep, IThirdStep, IFourthStep { }

export enum PropertyStatus {
  Pending = 0,
  Rejected,
  Approved,
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

export interface StatusField {
  name: string
  status: number
}

export interface IMainFormResponse {
  id: number
  status: number
  number: number
  properties: IMainForm
  propertyStatuses: StatusField[]
}

export enum ApplicationStatus {
  New = 0,
  Consideration,
  Rejected,
  Correction,
  FinalConsideration,
  FinalRejected,
  FinalCorrection,
  Approved,
}

export interface ApplicationStatusMeta {
  message: string
  description?: string
  icon: string
  severity: 'success' | 'info' | 'warn' | 'error'
  action?: {
    label: string
    type: 'edit' | 'resend' | 'none'
  }
}
