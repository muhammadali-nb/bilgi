<script setup lang="ts">
import type { IPhoneMaskEmit, IPhoneMaskProps } from '@composables/ui/phone-mask/types';
import { usePhoneMask } from '@composables/ui/phone-mask';
import { phoneIcon } from '../../assets/icons';
import VIcon from './VIcon.vue';

const props = defineProps<IPhoneMaskProps>();
const emit = defineEmits<IPhoneMaskEmit>();

const { phoneModel } = usePhoneMask(props, emit);
</script>

<template>
  <InputGroup class="phone-input">
    <InputGroupAddon class="phone-input__addon">
      <VIcon v-if="icon" :icon="phoneIcon" no-fill />
      <span class="font-16-n " :class="icon && 'phone-input__code'">+998</span>
    </InputGroupAddon>
    <InputMask v-model="phoneModel" class="phone-input__mask" placeholder="00 000 00 00" mask="99 999 99 99" />
  </InputGroup>
</template>

<style lang="scss" scoped>
.phone-input {
  &__code {
    margin: 0 0 0 1.4rem;
  }

  &__addon {
    padding-right: .5rem;
    display: flex;
    align-items: center;
  }
}
</style>
