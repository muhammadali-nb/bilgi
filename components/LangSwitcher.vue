<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();
</script>

<template>
  <div class="switcher">
    <button
      v-for="lang in locales"
      :key="lang.code"
      :class="[lang.code === locale && 'active']"
      @click="setLocale(lang.code)"
    >
      {{ lang.name }}
    </button>
    <hr>
    {{ locale }}
  </div>
</template>

<style scoped lang="scss">
.active {
  background: var(--black);
  color: #fff;
}
</style>
