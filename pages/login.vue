<script lang="ts" setup>
import DigitalSignature from '@components/auth/digital-signature.vue';

import FormField from '@components/shared/form-field.vue';
import VIcon from '@components/shared/v-icon.vue';
import { useUserAuth } from '@composables/auth';
import { useEcpKey } from '@composables/ecp-key';
import { parseCertificateInfo } from '@composables/ecp-key/model';
import { lockIcon, userIcon } from '../assets/icons';

const { login, $v } = useUserAuth();
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
        {{ $t('login.title') }}
      </h4>
      <p class="register__description font-16-r">
        {{ $t('login.description') }}
      </p>

      <FormField :label="$t('login.label.login')">
        <InputGroup>
          <InputGroupAddon>
            <VIcon :icon="userIcon" />
          </InputGroupAddon>
          <InputText
            v-model="$v.login.$model"
            :invalid="$v.login?.$error"
            :placeholder="$t('login.placeholder.login')"
          />
        </InputGroup>
      </FormField>
      <!-- {{ $v.password.$errors }}
      {{ $v.password.$error }} -->
      <FormField :label="$t('login.label.password')">
        <InputGroup>
          <InputGroupAddon>
            <VIcon :icon="lockIcon" />
          </InputGroupAddon>
          <Password
            v-model="$v.password.$model"
            :invalid="$v.password.$error"
            :class="[$v.password.$error && 'p-invalid']"
            :placeholder="$t('login.placeholder.password')"
            toggle-mask
            :feedback="false"
          />
        </InputGroup>
      </FormField>

      <FormField :label="$t('login.label.ecp')" class="register__form__digital-signature">
        <Button
          severity="secondary"
          :label="$t('login.ecp.select-key')"
          :disabled="!isConnected"
          @click="handleOpenDialog"
        />
      </FormField>

      <Button
        :label="$t('login.title')"
        severity="primary"
        type="submit"
        fluid
        class="register__form-submit"
        @click="login"
      />

      <p class="font-14-n register__form-text">
        {{ $t('login.no-account-question') }}
        <Button as-child>
          <RouterLink to="/registration" class="font-14-b register__form-link">
            {{ $t('login.no-account-action') }}
          </RouterLink>
        </Button>
      </p>
    </form>

    <Dialog
      v-model:visible="visible"
      :header="$t('login.ecp.choose-key')"
      :draggable="false"
      modal
      :close-on-mask="false"
      style="width: 45rem;"
      class="digital-signature__dialog"
    >
      <div class="digital-signature__dialog-content">
        <template v-if="keyList.length">
          <DigitalSignature
            v-for="item in keyList"
            :key="item.name"
            :item="parseCertificateInfo(item.alias)"
          />
        </template>

        <p v-else class="digital-signature__dialog__empty font-16-n">
          {{ $t('login.ecp.not-found') }}
        </p>
      </div>

      <template #footer>
        <Button
          :label="$t('login.ecp.authorize')"
          fluid
          :disabled="!keyList.length"
        />
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

      :deep(a) {
        color: var(--site-secondary-text);
      }
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
