import { useToggle } from '@composables/ui/toggle';
import { defineStore } from 'pinia';

export const useAdminHeader = defineStore('admin-header', () => {
  const { isActive: isBackButtonEnabled, active: activeBackButton, inactive: inactiveBackButton } = useToggle();
  const name = ref('');
  const bidNumber = ref('');

  const setBidNumber = (value: string = '') => {
    bidNumber.value = value;
  };

  return {
    name, bidNumber, setBidNumber,
    isBackButtonEnabled, activeBackButton, inactiveBackButton,
  };
});
