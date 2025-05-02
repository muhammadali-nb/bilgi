import type { IPhoneMaskEmit, IPhoneMaskProps } from './types';
import { CODE, MASK_LENGTH, OnlyNumericRegex } from './utils';

export const usePhoneMask = (props: IPhoneMaskProps, emit: IPhoneMaskEmit) => {
  const FULL_LENGTH = CODE.replace(OnlyNumericRegex, '').length + MASK_LENGTH;

  const phone = ref<string>(props.modelValue || '');
  const phoneNumber = computed(() => CODE + phone.value.replace(OnlyNumericRegex, ''));

  const isPhoneCorrect = computed(() => {
    return phoneNumber.value.replace(OnlyNumericRegex, '').length === FULL_LENGTH;
  });

  const phoneModel = computed<string>({
    get() {
      return phone.value;
    },
    set(value: string) {
      phone.value = value;
      emit('update:modelValue', isPhoneCorrect.value ? phoneNumber.value : '');
    },
  });

  const resetPhone = () => {
    phone.value = '';
    emit('update:modelValue', '');
  };

  const completeHandler = () => {
    setTimeout(() => {
      emit('complete');
    }, 0);
  };

  // onBeforeMount(() => {
  //   if (!props.modelValue) return;
  //   phone.value = props.modelValue.substring(CODE.length);
  // });

  return {
    resetPhone,
    completeHandler,
    isPhoneCorrect,
    phoneModel,
  };
};
