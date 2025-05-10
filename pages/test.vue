<script lang="ts" setup>
import DigitalSignature from '@components/auth/digital-signature.vue';
import LangSwitcher from '@components/shared/lang-switcher.vue';
import VIcon from '@components/shared/v-icon.vue';
import { bilgiLogo, userIcon } from '../assets/icons';

const visible = ref(false);
</script>

<template>
  <div class="login">
    <div class="login__container">
      <div class="login__left">
        <form class="login__form" @submit.prevent>
          <h4 class="login__title">
            Вход
          </h4>
          <p class="login__description font-16-r">
            Для входа в кабинет введите ваш логин и авторизуйтесь с помощью ЭЦП ключа.
          </p>

          <div class="form__field">
            <label for="username">Логин</label>
            <InputGroup>
              <InputGroupAddon>
                <VIcon :icon="userIcon" no-fill />
              </InputGroupAddon>
              <InputText placeholder="Введите логин" />
            </InputGroup>
          </div>
          <div class="form__field">
            <label for="username">ЭЦП ключ</label>
            <Button severity="secondary" label="Выбрать ключ" @click="visible = true" />
          </div>

          <Button
            label="Войти"
            severity="primary"
            type="submit"
            fluid
            class="login__form-submit"
          />
          <p class="font-14-n login__form-text">
            Уже есть аккаунт? <span class="font-14-b">Войти</span>
          </p>
        </form>
      </div>
      <div class="login__right">
        <LangSwitcher class="login__lang-switcher" />
        <VIcon
          :icon="bilgiLogo"
          class="login__logo"
          no-fill
        />
        <p class="login__info font-20-n">
          Авторизуйтесь, чтобы подать заявку на рассрочку. Это займет всего пару секунд!
        </p>
      </div>
    </div>

    <Dialog v-model:visible="visible" header="Выберите ключ" :modal="true" :close-on-mask="false" style="width: 45rem;" class="digital-signature__dialog">
      <div class="digital-signature__dialog-content">
        <DigitalSignature />
        <DigitalSignature />
      </div>

      <template #footer>
        <Button label="Аторизоваться" fluid />
      </template>
    </Dialog>
  </div>
</template>

<style lang="scss" scoped>
.login {
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

  .digital-signature__dialog {
    &-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
</style>
