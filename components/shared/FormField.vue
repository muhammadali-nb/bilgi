<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core';

defineProps<{
  label: string
  errors?: ErrorObject[]
}>();
</script>

<template>
  <div class="input-container">
    <label class="input__label font-16-r">{{ label }}</label>
    <slot />
    <div class="error-container">
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

  .input__label {
    padding-bottom: 8px;
    margin-bottom: auto;
  }

  .error-container {
    min-height: 1.65rem;
  }
}
</style>
