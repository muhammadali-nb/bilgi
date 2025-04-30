import type { LoginResponse } from '@composables/auth/types';
import { useApi } from '@composables/useApi';

export const useUserAuth = () => {
  const token = useCookie<string>('accessToken', { default: () => '', sameSite: 'lax' }); // Todo set max age!!!

  const bearerToken = computed<string>(() => `Bearer ${token.value}`);

  const setAccessToken = (value: string) => {
    token.value = value;
  };

  const form = reactive({
    email: '',
    password: '',
  });

  const { data, status, refresh: loginFn } = useApi<LoginResponse>('/api/users/login', {
    method: 'POST',
    body: form,
  });

  const login = async () => {
    await loginFn();

    if (status.value === 'success' && data.value?.accessToken) {
      setAccessToken(data.value.accessToken);
      // setRefreshToken
      navigateTo('/');
    }
  };

  const logout = () => {
    // setAccessToken('');
    // navigateTo('/login');
  };

  return {
    form, login, logout,
    bearerToken, setAccessToken,
  };
};
