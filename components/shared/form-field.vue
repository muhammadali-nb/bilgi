<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core';
import { warningIcon } from '@assets/icons';
import VIcon from '@components/shared/v-icon.vue';

const props = defineProps<{
  label: string
  errors?: ErrorObject[]
  isNotConfirmed?: boolean
}>();

const warning = computed(() => props.isNotConfirmed ? 'var(--secondary-600)' : '');
</script>

<template>
  <div class="input-container">
    <div class="input__label">
      <VIcon v-if="isNotConfirmed" :icon="warningIcon" class="icon" />
      <label class="font-16-r">{{ label }}</label>
    </div>
    <slot />
    <div v-if="errors?.length" class="error-container">
      <Message v-for="(error, idx) in errors" :key="idx" severity="error" variant="simple">
        {{ error.$message }}
      </Message>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  //&:has(input[type="checkbox"]) {
  //  flex-direction: row-reverse;
  //  justify-content: flex-end;
  //}
  .input__label {
    padding-bottom: 8px;
    margin-bottom: auto;
    color: v-bind(warning);

    display: flex;
    align-items: center;
    gap: 0.4rem;

    .icon {
      flex-shrink: 0;
    }
  }

  .error-container {
    min-height: 1.65rem;
  }
}
</style>
