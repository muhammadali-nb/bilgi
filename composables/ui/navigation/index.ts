import { adminNavigation } from './models';

export const useNavigation = () => {
  const navigationList = computed(() => adminNavigation);

  return {
    navigationList,
  };
};
