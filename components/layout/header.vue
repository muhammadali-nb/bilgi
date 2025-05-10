<script lang="ts" setup>
import LangSwitcher from '@components/shared/lang-switcher.vue';
import VIcon from '@components/shared/v-icon.vue';
import { bilgiLogo } from '../../assets/icons';
</script>

<template>
  <header class="header">
    <div class="header__content container">
      <VIcon :icon="bilgiLogo" no-fill :size="80" />
      <LangSwitcher />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 1.3rem 0 .3rem;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: var(--white);

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
