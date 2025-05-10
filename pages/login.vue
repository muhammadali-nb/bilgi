<script lang="ts" setup>
import DigitalSignature from '@components/auth/digital-signature.vue';

import FormField from '@components/shared/form-field.vue';
import VIcon from '@components/shared/v-icon.vue';
import { useUserAuth } from '@composables/auth';
import { useEcpKey } from '@composables/ecp-key';
import { parseCertificateInfo } from '@composables/ecp-key/model';
import { lockIcon, userIcon } from '../assets/icons';

const { login, loginForm } = useUserAuth();
const { connect, getKeys, keyList, isConnected } = useEcpKey();
const visible = ref(false);

onBeforeMount(() => {
  connect();
});

const handleOpenDialog = () => {
  getKeys();
  visible.value = true;
};

definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <div class="register">
    <form class="register__form" @submit.prevent>
      <h4 class="register__title font-32-b">
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
          <InputText v-model="loginForm.email" placeholder="Введите логин" />
        </InputGroup>
      </FormField>

      <FormField label="Пароль">
        <InputGroup>
          <InputGroupAddon>
            <VIcon :icon="lockIcon" no-fill />
          </InputGroupAddon>
          <Password v-model="loginForm.password" placeholder="Введите пароль" toggle-mask :feedback="false" />
        </InputGroup>
      </FormField>

      <FormField label="ЭЦП ключ" class="register__form__digital-signature">
        <Button severity="secondary" label="Выбрать ключ" :disabled="!isConnected" @click="handleOpenDialog" />
      </FormField>

      <Button
        label="Войти"
        severity="primary"
        type="submit"
        fluid
        class="register__form-submit"
        @click="login"
      />
      <p class="font-14-n register__form-text">
        Уже есть аккаунт? <span class="font-14-b">Войти</span>
      </p>
    </form>
    <Dialog v-model:visible="visible" header="Выберите ключ" :draggable="false" modal :close-on-mask="false" style="width: 45rem;" class="digital-signature__dialog">
      <div class="digital-signature__dialog-content">
        <template v-if="keyList.length">
          <DigitalSignature
            v-for="item in keyList"
            :key="item.name"
            :item="parseCertificateInfo(item.alias)"
          />
        </template>

        <p v-else class="digital-signature__dialog__empty font-16-n">
          Ключи не найдены
        </p>
      </div>

      <template #footer>
        <Button label="Аторизоваться" fluid :disabled="!keyList.length" />
      </template>
    </Dialog>
  </div>
</template>

<style lang="scss" scoped>
.register {
    &__title {
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

    &__empty {
      text-align: center;
      color: var(--site-secondary-text);
      padding: 2rem 0;
    }
  }
</style>
