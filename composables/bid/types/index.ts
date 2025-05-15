import type { IMainForm } from '@composables/main-form/types';

export interface IBid {
  id: number
  status: number
  number: number
  properties: IMainForm
}

export type IBidResponse = IBid[];
