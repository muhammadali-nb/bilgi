<script setup lang="ts">
import Footer from '@components/layout/Footer.vue';
import Header from '@components/layout/Header.vue';
</script>

<template>
  <Header />
  <div class="inner">
    <slot />
  </div>
  <Footer />
</template>

<style scoped lang="scss">
.inner {
  flex-grow: 1;
}
</style>
