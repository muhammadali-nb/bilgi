<script lang="ts" setup>
import FormField from '@components/shared/form-field.vue';
import PhoneInput from '@components/shared/phone-Input.vue';
import VIcon from '@components/shared/v-icon.vue';
import { useUserAuth } from '@composables/auth';
import { lockIcon, userIcon } from '../assets/icons';

const { register, $v } = useUserAuth();

const visible = ref(false);

definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <div class="register">
    <form class="register__form" @submit.prevent>
      <h4 class="register__title font-32-b">
        {{ $t('registration.title') }}
      </h4>
      <p class="register__description font-16-r">
        {{ $t('registration.description') }}
      </p>

      <FormField :label="$t('registration.label.phone')" class="form__field">
        <PhoneInput v-model="$v.phone.$model" :invalid="$v.phone?.$error" :icon="true" />
      </FormField>

      <FormField :label="$t('registration.label.login')">
        <InputGroup>
          <InputGroupAddon>
            <VIcon :icon="userIcon" no-fill />
          </InputGroupAddon>
          <InputText
            v-model="$v.login.$model"
            :invalid="$v.login?.$error"
            :placeholder="$t('registration.placeholder.login')"
          />
        </InputGroup>
      </FormField>
      <!--
      <FormField :label="$t('registration.label.password')">
        <InputGroup>
          <InputGroupAddon>
            <VIcon :icon="lockIcon" no-fill />
          </InputGroupAddon>
          <Password
            v-model="$v.password.$model"
            :invalid="$v.password?.$error"
            :placeholder="$t('registration.placeholder.password')"
            toggle-mask
            :feedback="false"
          />
        </InputGroup>
      </FormField> -->

      <FormField :label="$t('registration.label.password')" :errors="$v.password.$errors">
        <InputGroup>
          <InputGroupAddon>
            <VIcon :icon="lockIcon" />
          </InputGroupAddon>
          <Password
            v-model="$v.password.$model"
            :invalid="$v.password.$error"
            :class="[$v.password.$error && 'p-invalid']"
            :placeholder="$t('registration.placeholder.password')"
            toggle-mask
            :feedback="false"
          />
        </InputGroup>
      </FormField>

      <FormField :label="$t('registration.label.ecp')" class="register__form__digital-signature">
        <Button
          severity="secondary"
          :label="$t('registration.button.select-key')"
          @click="visible = true"
        />
      </FormField>

      <Button
        :label="$t('registration.button.register')"
        severity="primary"
        type="submit"
        fluid
        class="register__form-submit"
        @click="register"
      />

      <p class="font-14-n register__form-text">
        {{ $t('registration.already-have-account.text') }}
        <Button as-child>
          <RouterLink to="/login" class="font-14-b register__form-link">
            {{ $t('registration.already-have-account.action') }}
          </RouterLink>
        </Button>
      </p>
    </form>

    <Dialog
      v-model:visible="visible"
      :header="$t('registration.ecp.choose-key')"
      :draggable="false"
      modal
      :close-on-mask="false"
      style="width: 45rem;"
      class="digital-signature__dialog"
    >
      <!-- <div class="digital-signature__dialog-content">
        <template v-if="keyList.length">
          <DigitalSignature
            v-for="item in keyList"
            :key="item.name"
            :item="parseCertificateInfo(item.alias)"
          />
        </template>

        <p v-else class="digital-signature__dialog__empty font-16-n">
          {{ $t('registration.ecp.not-found') }}
        </p>
      </div>

      <template #footer>
        <Button
          :label="$t('registration.button.authorize')"
          fluid
          :disabled="!keyList.length"
          @click="register"
        />
      </template> -->
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
        margin-top: 3.2rem;
      }

      .form__field:not(:first-child) {
        margin: .3rem 0 0 0;
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
  }
</style>
