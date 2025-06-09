import type { AuthResponse } from '@composables/auth/types';
import { useValidationRules } from '@composables/ui/validation-rules';
import { useToastStore } from '@store/toast';
import useVuelidate from '@vuelidate/core';
import { useLocalePath } from '../../.nuxt/imports';

export const useUserAuth = () => {
  const accessToken = useCookie<string>('accessToken', { default: () => '', sameSite: 'lax' });
  const refreshToken = useCookie<string>('refreshToken', { default: () => '', sameSite: 'lax' });
  const type = ref<'login' | 'registration'>();
  const { requiredField, requiredIf, passwordRules } = useValidationRules();
  const bearerToken = computed(() => `Bearer ${accessToken.value}`);
  const $toast = useToastStore();

  const $router = useRouter();
  const localePath = useLocalePath();

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

  // const rules = {
  //   login: { ...requiredField() },
  //   phone: { ...requiredIf(() => type.value === 'registration') },
  //   password: { ...(type.value === 'login' ? { ...requiredField() } : { ...passwordRules() }) },
  // };

  const rules = computed(() => ({
    login: { ...requiredField() },
    phone: { ...requiredIf(() => type.value === 'registration') },
    password: { ...(type.value === 'login' ? { ...requiredField() } : { ...passwordRules() }) },
  }));

  const $v = useVuelidate(rules, form);

  const {
    data: loginData,
    status: loginStatus,
    refresh: loginFn,
    error: loginError,
  } = useFetch<AuthResponse>('/api/users/login', {
    method: 'POST',
    body: form,
    watch: false,
    immediate: false,
    retry: false,
  });

  const login = async () => {
    type.value = 'login';
    const validation = await $v.value.$validate();
    if (!validation) return;
    await loginFn();
    if (loginStatus.value === 'success' && loginData.value?.accessToken) {
      setAccessToken(loginData.value.accessToken);
      setRefreshToken(loginData.value.refreshToken);
      $router.push(localePath('/'));
    }
    else if (loginError.value) {
      $toast.error(loginError.value.message ?? 'Ошибка входа. Пожалуйста, проверьте данные.');
    }
  };

  const { status: registerStatus, refresh: registerFn } = useFetch('/api/Users/register', {
    method: 'POST',
    body: form,
    watch: false,
    immediate: false,
    retry: false,
  });

  const register = async () => {
    type.value = 'registration';
    const validation = await $v.value.$validate();
    if (!validation) return;
    await registerFn();

    if (registerStatus.value === 'success') {
      $router.push(localePath('/login'));
    }
  };

  const logout = async () => {
    clearTokens();
    // $router.push(localePath('/login'));
  };

  const refresh = async () => {
    try {
      const result = await $fetch<AuthResponse>('/api/Users/refresh', {
        method: 'post',
        body: { refreshToken: refreshToken.value },
      });
      setAccessToken(result.accessToken);
      setRefreshToken(result.refreshToken);
    }
    catch (error) {
      clearTokens();
      $toast.error('Ошибка авторизации. Пожалуйста, попробуйте снова.');
    }
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
