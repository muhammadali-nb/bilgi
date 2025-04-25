import { helpers, maxValue, minValue, required } from '@vuelidate/validators';

export const useValidationRules = () => {
  const requiredField = () => {
    return { required: helpers.withMessage('Field is required!', required) };
  };

  const min = (min: number) => {
    return { minValue: helpers.withMessage(`MinValue is ${min}`, minValue(min)) };
  };

  const max = (max: number) => {
    return { minValue: helpers.withMessage(`MaxLength is ${max}`, maxValue(max)) };
  };

  return { requiredField, min, max };
};
