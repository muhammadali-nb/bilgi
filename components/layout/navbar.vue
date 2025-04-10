<script lang="ts" setup>
import LangSwitcher from '@components/shared/LangSwitcher.vue';
import VIcon from '@components/shared/VIcon.vue';
import { bilgiLogo } from '../../assets/icons';
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__content">
        <VIcon :icon="bilgiLogo" no-fill class="navbar__logo" />
        <LangSwitcher class="navbar__lang-switcher" />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 4.2rem 0 2rem 0;
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

    &__logo {
      height: 4rem;
    }

  }
</style>
