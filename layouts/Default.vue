<script setup lang="ts">
import Navbar from '@components/layout/navbar.vue';
</script>

<template>
  <div class="inner">
    <Navbar />
    <div class="inner__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.inner {
  flex-grow: 1;

  &__content{
    background-color: var(--light-secondary-bg);
    min-height: 100vh;
  }
}
</style>
