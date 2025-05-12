import type { ApplicationStatusMeta } from '@composables/main-form/types';
import { guardIcon } from '@assets/icons';
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

export const getApplicationStatusMeta = (status: ApplicationStatus): ApplicationStatusMeta => {
  switch (status) {
  case ApplicationStatus.Consideration:
      return {
        message: 'Ваша заявка успешно создана и принята в работу. Ожидайте проверки.',
        icon: guardIcon,
        severity: 'info',
    };

    case ApplicationStatus.Rejected:
      return {
        message: 'Вашу заявку была рассмотрена, однако, к сожалению, мы вынуждены ее отклонить.',
        description: 'Ваша заявка была отклонена в связи с наличием задолженностей. Для дальнейшего рассмотрения вам необходимо погасить все задолженности и предоставить подтверждающие документы.',
        icon: guardIcon,
        severity: 'error',
        action: {
          label: 'Создать новую заявку',
          type: 'resend',
        }
      };

    case ApplicationStatus.Correction:
      return {
        message: 'Ваша заявка была рассмотрена, однако требуется внесение изменений. Пожалуйста, уточните следующие данные',
        description: 'В ходе проверки вашей заявки были выявлены несоответствия в предоставленных данных. Для её корректного рассмотрения необходимо заново предоставить копию паспорта руководителя (разворот с фото) и устав организации с актуальными сведениями. ',
        icon: guardIcon,
        severity: 'warn',
        action: {
          label: 'Внести изменения',
          type: 'edit',
        }
      };
    case ApplicationStatus.Approved:
      return {
        message: 'Заявка полностью одобрена и готова к выдаче.',
        description: 'Пожалуйста, ознакомьтесь с договором перед получением.',
        icon: guardIcon,
        severity: 'success',
    };

    default:
      return {
        message: 'Неизвестный статус заявки',
        icon: guardIcon,
        severity: 'info',
    };
  }
};
