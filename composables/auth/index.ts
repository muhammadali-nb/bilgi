import type { AuthResponse } from '@composables/auth/types';
import { useValidationRules } from '@composables/ui/validation-rules';
import { useApi } from '@composables/use-api';
import { useToastStore } from '@store/toast';
import useVuelidate from '@vuelidate/core';

export const useUserAuth = () => {
  const accessToken = useCookie<string>('accessToken', { default: () => '', sameSite: 'lax' });
  const refreshToken = useCookie<string>('refreshToken', { default: () => '', sameSite: 'lax' });
  const type = ref<'login' | 'registration'>();
  const { requiredField, requiredIf } = useValidationRules();
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

  const form = ref({
    login: '',
    phone: '',
    password: '',
  });

  const rules = {
    login: { ...requiredField() },
    phone: { ...requiredIf(() => type.value === 'registration') },
    password: { ...requiredField() },
  };

  const $v = useVuelidate(rules, form);

  const {
    data: loginData,
    status: loginStatus,
    refresh: loginFn,
    error: loginError,
  } = useApi<AuthResponse>('/api/users/login', {
    method: 'POST',
    body: form,
  });

  const login = async () => {
    type.value = 'login';
    const validation = await $v.value.$validate();
    if (!validation) return;
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

  const { status: registerStatus, refresh: registerFn } = useApi('/api/Users/register', {
    method: 'POST',
    body: form,
  });

  const register = async () => {
    type.value = 'registration';
    const validation = await $v.value.$validate();
    if (!validation) return;
    await registerFn();

    if (registerStatus.value === 'success') {
      navigateTo('/login');
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
    form,
    login,
    refresh,
    logout,
    bearerToken,
    setAccessToken,
    setRefreshToken,
    accessToken,
    refreshToken,
    register,
    $v,
  };
};
