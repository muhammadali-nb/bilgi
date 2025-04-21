<script lang="ts" setup>
import { rejectedIcon } from '@assets/icons';
import VIcon from '@components/shared/VIcon.vue';

defineProps<{
  status: 'success' | 'error'
  label: string

}>();
</script>

<template>
  <div class="filed-status">
    <div class="filed-status__header">
      <VIcon :icon="rejectedIcon" no-fill />
      <label class="font-14-r">
        {{ label }}
      </label>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.filed-status {

  &__header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0 0 .7rem ;
      label {
        color: var(--site-label-text);
      }
    }
  }
</style>
