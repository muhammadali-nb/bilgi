<script setup lang="ts">
// import type { ErrorObject } from '@vuelidate/core';

defineProps<{
  label: string
  // errors?: ErrorObject[]
}>();
</script>

<template>
  <div class="input-container">
    <label class="input__label font-16-r">{{ label }}</label>
    <slot />
    <!-- <small v-for="(error, idx) in errors" :key="idx" class="error-color">
      {{ error.$message }}
    </small> -->
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  .input__label {
    padding-bottom: 8px;
    margin-bottom: auto;
  }
}
</style>
