import { helpers, maxValue, minValue, required, requiredIf as vRequiredIf } from '@vuelidate/validators';

export const useValidationRules = () => {
  const { $i18n } = useNuxtApp();

  const requiredField = () => {
    return { required: helpers.withMessage(() => $i18n.t('validation.required'), required) };
  };

  const min = (min: number) => {
    return { minValue: helpers.withMessage(() => $i18n.t('validation.min-length', { n: min }), minValue(min)) };
  };

  const max = (max: number) => {
    return { minValue: helpers.withMessage(() => $i18n.t('validation.max-length', { n: max }), maxValue(max)) };
  };

  const requiredIf = (condition: () => boolean) => {
    return {
      required: helpers.withMessage(() => $i18n.t('validation.required'), vRequiredIf(condition)),
    };
  };

  const passwordRules = () => ({
    complex: helpers.withMessage(
      () => $i18n.t('validation.password_complexity'),
      (value: string) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
        return value.length > 0 && !!value.match(regex);
      },
    ),
  });

  return { requiredField, min, max, requiredIf, passwordRules };
};
