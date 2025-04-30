<script setup lang="ts">

</script>

<template>
  <div class="site-wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <client-only>
      <Toast />
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
.site-wrapper {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
