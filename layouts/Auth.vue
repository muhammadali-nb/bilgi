<script setup lang="ts">
import LangSwitcher from '@components/shared/LangSwitcher.vue';
import VIcon from '@components/shared/VIcon.vue';
import { bilgiLogo } from '../assets/icons';
</script>

<template>
  <div class="auth-layout">
    <div class="auth-layout__container">
      <div class="auth-layout__left">
        <slot />
      </div>
      <div class="auth-layout__right">
        <LangSwitcher class="auth-layout__lang-switcher" />
        <VIcon
          :icon="bilgiLogo"
          class="auth-layout__logo"
          no-fill
        />
        <p class="auth-layout__info font-20-n">
          Авторизуйтесь, чтобы подать заявку на рассрочку. Это займет всего пару секунд!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-layout {
    &__container {
      display: flex;
      height: 100vh;
    }

    &__left,
    &__right {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &__right {
      background-color: var(--site-secondary-bg);
      position: relative;
    }

    &__lang-switcher {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }

    &__logo {
      max-width: 36rem;
      width: 100%;
    }

    &__info {
      margin-top: 16rem;
      color: var(--site-secondary-text);
      max-width: 50rem;
      text-align: center;
    }

    &__title {
      font-size: 3.2rem;
      font-weight: 700;
      margin-bottom: 1.6rem;
    }

    &__description {
      color: var(--site-secondary-text);
      margin: 0 0 7rem 0;
    }

    &__form {
      max-width: 36rem;

      .form__field:not(:first-child) {
        margin: 2rem 0 0 0;
      }

      &-submit {
        margin: 5rem 0 0 0;
      }

      &-text {
        width: 100%;
        color: var(--site-secondary-text);
        text-align: center;
        margin: 4rem 0 0 0;
      }
    }
  }
</style>
