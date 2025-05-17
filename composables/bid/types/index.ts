import type { IFirstStep, IFourthStep, IMainForm, ISecondStep, IThirdStep, PropertyStatus } from '@composables/main-form/types';

export type BidStatus = 'pending' | 'approved' | 'rejected' | 'in_review';

export interface IBid {
  id: number
  status: BidStatus
  number: number
  properties: IMainForm
  propertyStatuses: IBidPropertyStatus[]
}

export interface IBidPropertyStatus {
  name: keyof IMainForm
  status: PropertyStatus
}

export type IBidResponse = IBid[];

export interface BidTabData {
  main: IFirstStep
  financial: IThirdStep
  security: IFourthStep
  collateralDocuments: ISecondStep
}
