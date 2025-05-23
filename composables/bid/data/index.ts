import { ApplicationStatus } from '@composables/main-form/types';

export const bidOptions = [
  {
    name: 'Заявка',
    id: 1,
  },
  {
    name: 'Учредительные',
    id: 2,
  },
  {
    name: 'Финансовые',
    id: 3,
  },
  {
    name: 'Обеспечение',
    id: 4,
  },
];

export const statusOptions = [
  {
    name: 'На проверке',
    value: ApplicationStatus.Consideration,
  },
  {
    name: 'Отклоненный',
    value: ApplicationStatus.Rejected,
  },
  {
    name: 'На доработке',
    value: ApplicationStatus.Correction,
  },
  {
    name: 'Одобренно',
    value: ApplicationStatus.Correction,
  },
  {
    name: 'Заключения',
    value: ApplicationStatus.FinalConsideration,
  },
];

export const dateOptions = [
  {
    value: true,
    name: 'По возрастанию',
  },
  {
    value: false,
    name: 'По убыванию',
  },
];
