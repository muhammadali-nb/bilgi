<script lang="ts" setup>
import DigitalSignature from '@components/auth/digital-signature.vue';

import FormField from '@components/shared/FormField.vue';
import VIcon from '@components/shared/VIcon.vue';
import { userIcon } from '../assets/icons';

const visible = ref(false);
const form = reactive({
  login: '',
});

definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <div class="register">
    <form class="register__form" @submit.prevent>
      <h4 class="register__title">
        Вход
      </h4>
      <p class="register__description font-16-r">
        Для входа в кабинет введите ваш логин и авторизуйтесь с помощью ЭЦП ключа.
      </p>

      <FormField label="Логин" class="form__field">
        <InputGroup>
          <InputGroupAddon>
            <VIcon :icon="userIcon" no-fill />
          </InputGroupAddon>
          <InputText v-model="form.login" placeholder="Введите логин" />
        </InputGroup>
      </FormField>

      <FormField label="ЭЦП ключ" class="register__form__digital-signature">
        <Button severity="secondary" label="Выбрать ключ" @click="visible = true" />
      </FormField>

      <Button
        label="Войти"
        severity="primary"
        type="submit"
        fluid
        class="register__form-submit"
      />
      <p class="font-14-n register__form-text">
        Уже есть аккаунт? <span class="font-14-b">Войти</span>
      </p>
    </form>
    <Dialog v-model:visible="visible" header="Выберите ключ" :draggable="false" modal :close-on-mask="false" style="width: 45rem;" class="digital-signature__dialog">
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
.register {
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

      &__digital-signature {
        margin-top: 2.2rem;
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
      gap: 1.6rem;
    }
  }
</style>
