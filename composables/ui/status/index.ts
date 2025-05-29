import type { ApplicationStatusMeta } from '@composables/main-form/types';
import { guardIcon } from '@assets/icons';
import { ApplicationStatus } from '@composables/main-form/types'; // или аналог для вашей среды
import { useI18n } from 'vue-i18n';

export const getApplicationStatusMeta = (status: ApplicationStatus): ApplicationStatusMeta => {
  const { t } = useI18n();

  switch (status) {
  case ApplicationStatus.Consideration:
    return {
      message: t('application-status.consideration.message'),
      icon: guardIcon,
      severity: 'info',
    };

  case ApplicationStatus.Rejected:
    return {
      message: t('application-status.rejected.message'),
      description: t('application-status.rejected.description'),
      icon: guardIcon,
      severity: 'error',
      action: {
        label: t('application-status.rejected.action'),
        type: 'resend',
      }
    };

  case ApplicationStatus.Correction:
    return {
      message: t('application-status.correction.message'),
      description: t('application-status.correction.description'),
      icon: guardIcon,
      severity: 'warn',
      action: {
        label: t('application-status.correction.action'),
        type: 'edit',
      }
    };

  case ApplicationStatus.Approved:
    return {
      message: t('application-status.approved.message'),
      description: t('application-status.approved.description'),
      icon: guardIcon,
      severity: 'success',
    };

  default:
    return {
      message: t('application-status.unknown.message'),
      icon: guardIcon,
      severity: 'info',
    };
  }
};
