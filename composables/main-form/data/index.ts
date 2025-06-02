import { ApplicationStatus, MainFormCreditType } from '@composables/main-form/types';

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

export const repaymentScheduleTypeOptions = [ // уточнить у Проект менежера
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

export const paymentComponentOptions = [ // уточнить у Проект менежера
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

export const stepTitles: Record<number, string> = {
  1: 'application-form.first-step.header',
  2: 'application-form.second-step.header',
  3: 'application-form.third-step.header',
  4: 'application-form.fourth-step.header',
};

export const getApplicationStatusHeader = (status: ApplicationStatus) => {
  return {
    [ApplicationStatus.New]: 'application-status.new.header',
    [ApplicationStatus.Consideration]: 'application-status.consideration.header',
    [ApplicationStatus.Rejected]: 'application-status.rejected.header',
    [ApplicationStatus.Correction]: 'application-status.correction.header',
    [ApplicationStatus.FinalConsideration]: 'application-status.final-consideration.header',
    [ApplicationStatus.FinalRejected]: 'application-status.final-rejected.header',
    [ApplicationStatus.FinalCorrection]: 'application-status.final-correction.header',
    [ApplicationStatus.Approved]: 'application-status.approved.header',
  }[status] ?? 'application-status.unknown.header';
};
