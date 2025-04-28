export interface StepEmits {
  (e: 'submit'): void
  (e: 'prev'): void
}

export type IFirstStepFields = {
  [key in FIELDS]: any
};

export enum FIELDS {
  TargetCreditAmount = 0,
  YoungSpecialistsCount,
  GracePeriod,
  CreditReturnPeriodYears,
  CreditSecurityType,
  PlannedCreditReturnSchedule,
  CreditReturnFrequency,
  ProjectDescription,
  OwnFundsAmount,
  OrganizationSocialIndicators,
  ContactPersonFullName,
  MobilePhone,
  WorkPhone,
  HomePhone,
  Email,
  DirectorFullName,
}
