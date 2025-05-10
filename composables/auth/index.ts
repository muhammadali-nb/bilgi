import type { AuthResponse } from '@composables/auth/types';
import { useApi } from '@composables/use-api';
import { useToastStore } from '@store/toast';

export const useUserAuth = () => {
  const accessToken = useCookie<string>('accessToken', { default: () => '', sameSite: 'lax' });
  const refreshToken = useCookie<string>('refreshToken', { default: () => '', sameSite: 'lax' });

  const bearerToken = computed(() => `Bearer ${accessToken.value}`);
  const $toast = useToastStore();

  const setAccessToken = (value: string) => {
    accessToken.value = value;
  };
  const setRefreshToken = (value: string) => {
    refreshToken.value = value;
  };

  const clearTokens = () => {
    accessToken.value = '';
    refreshToken.value = '';
  };

  const loginForm = reactive({
    email: '',
    password: '',
  });

  const {
    data: loginData,
    status: loginStatus,
    refresh: loginFn,
    error: loginError,
  } = useApi<AuthResponse>('/api/Users/login', {
    method: 'POST',
    body: loginForm,
  });

  const login = async () => {
    await loginFn();

    if (loginStatus.value === 'success' && loginData.value?.accessToken) {
      setAccessToken(loginData.value.accessToken);
      setRefreshToken(loginData.value.refreshToken);
      navigateTo('/');
    }
    else if (loginError.value) {
      $toast.error(loginError.value.message ?? 'Ошибка входа. Пожалуйста, проверьте данные.');
    }
  };

  const {
    data: refreshData,
    status: refreshStatus,
    refresh: refreshFn,
  } = useApi<AuthResponse>('/api/Users/refresh', {
    method: 'POST',
    body: {
      refreshToken: refreshToken.value,
    },
  });

  const refresh = async (): Promise<AuthResponse | null> => {
    await refreshFn();

    if (refreshStatus.value === 'success' && refreshData.value?.accessToken) {
      setAccessToken(refreshData.value.accessToken);
      setRefreshToken(refreshData.value.refreshToken);
      return refreshData.value;
    }

    return null;
  };

  const logout = () => {
    clearTokens();
    navigateTo('/login');
  };

  return {
    loginForm,
    login,
    refresh,
    logout,
    bearerToken,
    setAccessToken,
    setRefreshToken,
    accessToken,
    refreshToken,
  };
};
