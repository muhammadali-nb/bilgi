import { useAuthService } from '@composables/auth/sevice';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref();
  const { removeClientId, removeToken, removeRoles, getClientId } = useAuthService();

  const setUser = (login: string, branchId: number) => {
    // const roles = getRoles();
    user.value = {
      login: `${login}`,
      // roles,
      branchId,
    };
  };

  const initUser = () => {
    const login = getClientId() ?? '';

    user.value = {
      login,
    };
  };

  const logout = () => {
    removeToken();
    removeClientId();
    removeRoles();
  };

  onMounted(() => {
    initUser();
  });

  return {
    logout,
    initUser,
    setUser,
  };
});
