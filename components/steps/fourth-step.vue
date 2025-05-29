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
    <h4 class="step-form__title font-24-sb">
      {{ $t('application-form.fourth-step.title') }}
    </h4>

    <div class="step-form__documents">
      <FormField
        :label="$t('application-form.fourth-step.landCadastrePassport')"
        :is-not-confirmed="appMainForm.isRejected('landCadastrePassport')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.landCadastrePassport')"
          :invalid="appMainForm.$v?.landCadastrePassport?.$error"
          :url="appMainForm.formObj.landCadastrePassport"
          :warning="appMainForm.isRejected('landCadastrePassport')"
          @update="(file) => appMainForm.saveFile('landCadastrePassport', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.fourth-step.ownershipDocuments')"
        :is-not-confirmed="appMainForm.isRejected('ownershipDocuments')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.ownershipDocuments')"
          :invalid="appMainForm.$v?.ownershipDocuments?.$error"
          :url="appMainForm.formObj.ownershipDocuments"
          :warning="appMainForm.isRejected('ownershipDocuments')"
          @update="(file) => appMainForm.saveFile('ownershipDocuments', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.fourth-step.realEstateValuationReport')"
        :is-not-confirmed="appMainForm.isRejected('realEstateValuationReport')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.realEstateValuationReport')"
          :invalid="appMainForm.$v?.realEstateValuationReport?.$error"
          :url="appMainForm.formObj.realEstateValuationReport"
          :warning="appMainForm.isRejected('realEstateValuationReport')"
          @update="(file) => appMainForm.saveFile('realEstateValuationReport', file)"
        />
      </FormField>

      <h5 class="font-20-sb">
        {{ $t('application-form.fourth-step.vehicleSectionTitle') }}
      </h5>

      <FormField
        :label="$t('application-form.fourth-step.vehicleRegistrationCertificate')"
        :is-not-confirmed="appMainForm.isRejected('vehicleRegistrationCertificate')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.vehicleRegistrationCertificate')"
          :invalid="appMainForm.$v?.vehicleRegistrationCertificate?.$error"
          :url="appMainForm.formObj.vehicleRegistrationCertificate"
          :warning="appMainForm.isRejected('vehicleRegistrationCertificate')"
          @update="(file) => appMainForm.saveFile('vehicleRegistrationCertificate', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.fourth-step.vehicleValuationReport')"
        :is-not-confirmed="appMainForm.isRejected('vehicleValuationReport')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.vehicleValuationReport')"
          :invalid="appMainForm.$v?.vehicleValuationReport?.$error"
          :url="appMainForm.formObj.vehicleValuationReport"
          :warning="appMainForm.isRejected('vehicleValuationReport')"
          @update="(file) => appMainForm.saveFile('vehicleValuationReport', file)"
        />
      </FormField>

      <h5 class="font-20-sb">
        {{ $t('application-form.fourth-step.resolutionsSectionTitle') }}
      </h5>

      <FormField
        :label="$t('application-form.fourth-step.shareholderResolution')"
        :is-not-confirmed="appMainForm.isRejected('shareholderResolution')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.shareholderResolution')"
          :invalid="appMainForm.$v?.shareholderResolution?.$error"
          :url="appMainForm.formObj.shareholderResolution"
          :warning="appMainForm.isRejected('shareholderResolution')"
          @update="(file) => appMainForm.saveFile('shareholderResolution', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.fourth-step.guarantorFinancialAndFoundingDocs')"
        :is-not-confirmed="appMainForm.isRejected('guarantorFinancialAndFoundingDocs')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.guarantorFinancialAndFoundingDocs')"
          :invalid="appMainForm.$v?.guarantorFinancialAndFoundingDocs?.$error"
          :url="appMainForm.formObj.guarantorFinancialAndFoundingDocs"
          :warning="appMainForm.isRejected('guarantorFinancialAndFoundingDocs')"
          @update="(file) => appMainForm.saveFile('guarantorFinancialAndFoundingDocs', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.fourth-step.auditorOpinion')"
        :is-not-confirmed="appMainForm.isRejected('auditorOpinion')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.auditorOpinion')"
          :invalid="appMainForm.$v?.auditorOpinion?.$error"
          :url="appMainForm.formObj.auditorOpinion"
          :warning="appMainForm.isRejected('auditorOpinion')"
          @update="(file) => appMainForm.saveFile('auditorOpinion', file)"
        />
      </FormField>

      <FormField
        :label="$t('application-form.fourth-step.guarantorLetter')"
        :is-not-confirmed="appMainForm.isRejected('guarantorLetter')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.guarantorLetter')"
          :invalid="appMainForm.$v?.guarantorLetter?.$error"
          :url="appMainForm.formObj.guarantorLetter"
          :warning="appMainForm.isRejected('guarantorLetter')"
          @update="(file) => appMainForm.saveFile('guarantorLetter', file)"
        />
      </FormField>

      <h5 class="font-20-sb">
        {{ $t('application-form.fourth-step.insuranceSectionTitle') }}
      </h5>

      <FormField
        :label="$t('application-form.fourth-step.insuranceCompanyLetter')"
        :is-not-confirmed="appMainForm.isRejected('insuranceCompanyLetter')"
      >
        <FileUploader
          :label="$t('application-form.fourth-step.insuranceCompanyLetter')"
          :invalid="appMainForm.$v?.insuranceCompanyLetter?.$error"
          :url="appMainForm.formObj.insuranceCompanyLetter"
          :warning="appMainForm.isRejected('insuranceCompanyLetter')"
          @update="(file) => appMainForm.saveFile('insuranceCompanyLetter', file)"
        />
      </FormField>
    </div>

    <div class="step-form__controls">
      <Button class="step-form__prev" @click="emits('prev')">
        <VIcon :icon="prevIcon" />
      </Button>
      <Button class="step-form__submit" :label="$t('application-form.buttons.save')" fluid @click="emits('submit')" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.step-form {
  background-color: var(--card-bg-05);
  border: 1px solid var(--border-color-secondary);
  border-radius: 1rem;
  padding: 4rem;

  &__title {
    margin: 0 0 3.2rem 0;
  }

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
