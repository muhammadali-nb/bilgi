<script lang="ts" setup>
import { bilgiLogo, guardIcon, lockIcon, userIcon } from '@assets/icons';
import FormField from '@components/shared/FormField.vue';
import VIcon from '@components/shared/VIcon.vue';

definePageMeta({
  layout: 'empty',
});
</script>

<template>
  <div class="admin-auth">
    <div class="admin-auth__content">
      <div class="admin-auth__container">
        <div class="admin-auth__left">
          <VIcon
            :icon="bilgiLogo"
            class="admin-auth__logo"
            no-fill
          />
        </div>
        <div class="admin-auth__right">
          <form class="admin-auth__form" @submit.prevent>
            <h1 class="admin-auth__title font-32-b">
              Авторизация
            </h1>
            <FormField label="Логин">
              <InputGroup>
                <InputGroupAddon>
                  <VIcon :icon="userIcon" no-fill />
                </InputGroupAddon>
                <InputText placeholder="Введите логин" />
              </InputGroup>
            </FormField>
            <FormField label="Пароль">
              <InputGroup>
                <InputGroupAddon>
                  <VIcon :icon="lockIcon" no-fill />
                </InputGroupAddon>
                <Password placeholder="Введите пароль" toggle-mask :feedback="false" />
              </InputGroup>
            </FormField>
            <div class="admin-auth__form__save">
              <Checkbox />
              <p class="admin-auth__form__save-text">
                <VIcon :icon="guardIcon" no-fill />
                <label class="font-14-n">Запомнить меня</label>
              </p>
            </div>
            <Button
              label="Войти"
              severity="primary"
              type="submit"
              fluid
              class="admin-auth__form__save"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-auth {
  min-height: 100vh;
  background-color: var(--primary-500);
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    padding-bottom: 1.2rem;
    color: var(--primary-500);
  }

  &__logo {
    max-width: 29rem;
    width: 100%;
  }

  &__content {
    max-width: 115.5rem;
    margin: 0 auto;
    width: 100%;
    background-color: var(--card-bg-05);
    overflow: hidden;
    border-radius: var(--radius-l);
    box-shadow: var(--box-shadow);
  }

  &__container {
    width: 100%;
    max-width: 91rem;

    max-height: calc(100dvh - 3.6rem);
    height: 68rem;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-content: center;
  }

  &__left {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  &__right {
    overflow-y: auto;
  }

  &__form {
    max-width: 36rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 0;
    &__save {
      display: flex;
      align-items: center;
      gap: 1.4rem;

      &-text {
        display: flex;
        align-items: center;
        gap: .5rem;
      }
     }
  }
}
</style>
