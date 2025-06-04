import type { ApplicationStatusMeta } from '@composables/main-form/types';
import { guardIcon } from '@assets/icons';
import { ApplicationStatus } from '@composables/main-form/types'; // или аналог для вашей среды


export const getApplicationStatusMeta = (status: ApplicationStatus): ApplicationStatusMeta => {
  const { $i18n } = useNuxtApp();

  switch (status) {
    case ApplicationStatus.Consideration:
      return {
        message: $i18n.t('application-status.consideration.message'),
        icon: guardIcon,
        severity: 'info',
      };

    case ApplicationStatus.Rejected:
      return {
        message: $i18n.t('application-status.rejected.message'),
        description: $i18n.t('application-status.rejected.description'),
        icon: guardIcon,
        severity: 'error',
        action: {
          label: $i18n.t('application-status.rejected.action'),
          type: 'resend',
        }
      };

    case ApplicationStatus.Correction:
      return {
        message: $i18n.t('application-status.correction.message'),
        description: $i18n.t('application-status.correction.description'),
        icon: guardIcon,
        severity: 'warn',
        action: {
          label: $i18n.t('application-status.correction.action'),
          type: 'edit',
        }
      };

    case ApplicationStatus.Approved:
      return {
        message: $i18n.t('application-status.approved.message'),
        description: $i18n.t('application-status.approved.description'),
        icon: guardIcon,
        severity: 'success',
      };

    default:
      return {
        message: $i18n.t('application-status.unknown.message'),
        icon: guardIcon,
        severity: 'info',
      };
  }
};
