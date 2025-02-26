<script setup lang="ts">
import LangSwitcher from '@components/LangSwitcher.vue';
</script>

<template>
  <header>
    Header
    <LangSwitcher />
    <nav>
      <ul>
        <li>
          Page 1
        </li>
        <li>
          Page 2
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  border: 1px solid var(--black);
  color: var(--black);
}
</style>
