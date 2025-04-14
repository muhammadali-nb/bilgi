import type { ToastMessageOptions } from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

export const useAppToast = () => {
  const toast = useToast();

  const showErrorToast = (summary: string, detail: string) => {
    const data: ToastMessageOptions = {
      summary,
      detail,
      severity: 'error',
      life: 3000,
    };
    toast.add(data);
  };

  const showSuccessToast = (summary: string, detail: string) => {
    const data: ToastMessageOptions = {
      summary,
      detail,
      severity: 'success',
      life: 3000,
    };
    toast.add(data);
  };

  const showInfoToast = (summary: string, detail: string) => {
    const data: ToastMessageOptions = {
      summary,
      detail,
      severity: 'info',
      life: 3000,
    };
    toast.add(data);
  };

  return {
    showErrorToast,
    showSuccessToast,
    showInfoToast,
  };
};
