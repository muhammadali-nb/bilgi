<script lang="ts" setup>
import { approveIcon, rejectedIcon } from '@assets/icons';
import VIcon from '@components/shared/v-icon.vue';
import { PropertyStatus } from '@composables/main-form/types';

const props = defineProps<{
  status: PropertyStatus
  label: string
  fieldId: string
  isSelected: boolean
}>();

const emit = defineEmits<{
  (e: 'update:selected', value: boolean): void
}>();

const check = computed({
  get: () => props.isSelected,
  set: value => emit('update:selected', value),
});
</script>

<template>
  <div class="filed-status">
    <div class="filed-status__header">
      <Checkbox v-if="status === PropertyStatus.Pending" v-model="check" binary />
      <VIcon v-else :icon="status === PropertyStatus.Rejected ? rejectedIcon : approveIcon" no-fill class="filed-status__icon" />
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
    margin: 0 0 .7rem;
      label {
        color: var(--site-label-text);
      }
  }

  &__icon {
    flex-shrink: 0;
  }
}
</style>
