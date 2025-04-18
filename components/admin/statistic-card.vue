<script lang="ts" setup>
defineProps<{
  title: string
  value: string
  severity: 'default' | 'success' | 'error'
}>();
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
}
</style>
