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

// export interface BidTabData {
//   main: IFirstStep
//   financial: IThirdStep
//   security: WithStatus<IFourthStep>
//   collateralDocuments: WithStatus<ISecondStep>
// }

export type WithStatus<T> = {
  [K in keyof T]: {
    value: T[K]
    status: PropertyStatus
  };
};

export interface BidTabData {
  main: WithStatus<IFirstStep>
  financial: WithStatus<IThirdStep>
  security: WithStatus<IFourthStep>
  collateralDocuments: WithStatus<ISecondStep>
}

export type BidTabDataWithStatus = {
  [K in keyof BidTabData]: WithStatus<BidTabData[K]>;
};
