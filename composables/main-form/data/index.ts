import { MainFormCreditType } from '@composables/main-form/types';

export const monthsForm = [12, 36, 60];

export const creditSecurityTypeOptionsData = [
  {
    name: 'pledge',
    value: MainFormCreditType.Pledge,
  },
  {
    name: 'guarantee',
    value: MainFormCreditType.Guarantee,
  },
  {
    name: 'insurance',
    value: MainFormCreditType.Insurance,
  },
];

export const repaymentScheduleTypeOptions = [
  {
    name: 'Ежемесячный',
    value: 1,
  },
  {
    name: 'Квартальный',
    value: 2,
  },
  {
    name: 'Раз в полгода',
    value: 3,
  },
  {
    name: 'Годовой',
    value: 4,
  },
  {
    name: 'Другое',
    value: 5,
  },
];

export const paymentComponentOptions = [
  {
    name: 'Сумма долга + проценты',
    value: 1,
  },
  {
    name: 'Только проценты',
    value: 2,
  },
  {
    name: 'Только сумма долга',
    value: 3,
  },
  {
    name: 'Другое',
    value: 4,
  },
];
