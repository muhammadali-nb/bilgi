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
  1: 'Заполнение заявки',
  2: 'Учредительные документы',
  3: 'Финансовые документы',
  4: 'Документы по обеспечению обязательств по договору',
};

export const getApplicationStatusHeader = (status: ApplicationStatus) => {
  return {
    [ApplicationStatus.New]: 'Новая',
    [ApplicationStatus.Consideration]: 'Готово! Ваша заявка успешно отправлена',
    [ApplicationStatus.Rejected]: 'Ваша заявка отклонена',
    [ApplicationStatus.Correction]: 'Ваша заявка отправлена на доработку',
    [ApplicationStatus.FinalConsideration]: 'Повторное рассмотрение',
    [ApplicationStatus.FinalRejected]: 'Окончательно отклонена',
    [ApplicationStatus.FinalCorrection]: 'Ваша заявка рассмотрена',
    [ApplicationStatus.Approved]: 'Ваша заявка одобрена',
  }[status] ?? 'Неизвестно';
};
