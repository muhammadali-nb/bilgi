<script lang="ts" setup>
import type { StepEmits } from '@composables/ui/steps/types';
import { prevIcon } from '@assets/icons';
import FileUploader from '@components/shared/file-uploader.vue';
import FormField from '@components/shared/form-field.vue';
import VIcon from '@components/shared/v-icon.vue';
import { useAppMainForm } from '@store/main-form';

const emits = defineEmits<StepEmits>();
const appMainForm = useAppMainForm();
</script>

<template>
  <form class="step-form">
    <div class="step-form__documents">
      <FormField
        :label="$t('application-form.third-step.financialStatements')"
        :is-not-confirmed="appMainForm.isRejected('financialStatements')"
      >
        <FileUploader
          :label="$t('application-form.third-step.financialStatements')"
          :invalid="appMainForm.$v?.financialStatements?.$error"
          :url="appMainForm.formObj.financialStatements"
          :warning="appMainForm.isRejected('financialStatements')"
          @update="(file) => appMainForm.saveFile('financialStatements', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.third-step.taxDebtAbsenceCertificate')"
        :is-not-confirmed="appMainForm.isRejected('taxDebtAbsenceCertificate')"
      >
        <FileUploader
          :label="$t('application-form.third-step.taxDebtAbsenceCertificate')"
          :invalid="appMainForm.$v?.taxDebtAbsenceCertificate?.$error"
          :url="appMainForm.formObj.taxDebtAbsenceCertificate"
          :warning="appMainForm.isRejected('taxDebtAbsenceCertificate')"
          @update="(file) => appMainForm.saveFile('taxDebtAbsenceCertificate', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.third-step.bankAccountCertificate')"
        :is-not-confirmed="appMainForm.isRejected('bankAccountCertificate')"
      >
        <FileUploader
          :label="$t('application-form.third-step.bankAccountCertificate')"
          :invalid="appMainForm.$v?.bankAccountCertificate?.$error"
          :url="appMainForm.formObj.bankAccountCertificate"
          :warning="appMainForm.isRejected('bankAccountCertificate')"
          @update="(file) => appMainForm.saveFile('bankAccountCertificate', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.third-step.projectBusinessPlan')"
        :is-not-confirmed="appMainForm.isRejected('projectBusinessPlan')"
      >
        <FileUploader
          :label="$t('application-form.third-step.projectBusinessPlan')"
          :invalid="appMainForm.$v?.projectBusinessPlan?.$error"
          :url="appMainForm.formObj.projectBusinessPlan"
          :warning="appMainForm.isRejected('projectBusinessPlan')"
          @update="(file) => appMainForm.saveFile('projectBusinessPlan', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.third-step.targetFundSpendingEstimate')"
        :is-not-confirmed="appMainForm.isRejected('targetFundSpendingEstimate')"
      >
        <FileUploader
          :label="$t('application-form.third-step.targetFundSpendingEstimate')"
          :invalid="appMainForm.$v?.targetFundSpendingEstimate?.$error"
          :url="appMainForm.formObj.targetFundSpendingEstimate"
          :warning="appMainForm.isRejected('targetFundSpendingEstimate')"
          @update="(file) => appMainForm.saveFile('targetFundSpendingEstimate', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.third-step.leaseAgreement')"
        :is-not-confirmed="appMainForm.isRejected('leaseAgreement')"
      >
        <FileUploader
          :label="$t('application-form.third-step.leaseAgreement')"
          :invalid="appMainForm.$v?.leaseAgreement?.$error"
          :url="appMainForm.formObj.leaseAgreement"
          :warning="appMainForm.isRejected('leaseAgreement')"
          @update="(file) => appMainForm.saveFile('leaseAgreement', file)"
        />
      </FormField>
    </div>

    <div class="step-form__controls   ">
      <Button class="step-form__prev" @click="emits('prev')">
        <VIcon :icon="prevIcon" />
      </Button>
      <Button class="step-form__submit" :label="$t('application-form.buttons.next')" fluid @click="emits('submit')" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.step-form {
  background-color: var(--card-bg-05);
  border: 1px solid var(--border-color-secondary);
  border-radius: 1rem;
  padding: 4rem;

  &__controls {
    display: flex;
    gap: 1rem;
    margin: 2.6rem 0 0 0;
  }

  &__prev {
    --p-button-padding-x: 1rem;
  }

  &__documents {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
