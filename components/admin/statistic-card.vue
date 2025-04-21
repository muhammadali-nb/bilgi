<script lang="ts" setup>
const props = defineProps<{
  title: string
  value: string
  severity: 'default' | 'success' | 'error'
}>();

const cardSeverity = computed(() => props.severity === 'success' ? 'var(--p-green-600)' : props.severity === 'error' ? 'var(--p-red-500)' : '');
</script>

<template>
  <div class="card">
    <p class="font-16-b">
      {{ title }}
    </p>
    <h1 class="font-36-b">
      {{ value }}
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 1rem 1.5rem;
  background-color: var(--card-bg-05);
  width: 100%;
  border-radius: var(--radius-l);
  box-shadow: var(--box-shadow-card);

  h1 {
    color: v-bind(cardSeverity);
  }

}
</style>
