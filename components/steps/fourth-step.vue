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
      Недвижимое имущество
    </h4>

    <div class="step-form__documents">
      <FormField
        label="Кадастровый паспорт на земельный участок (здания и сооружения), предоставляемый в залог"
        :is-not-confirmed="appMainForm.isRejected('landCadastrePassport')"
      >
        <FileUploader
          label="Кадастровый паспорт на земельный участок..."
          :invalid="appMainForm.$v?.landCadastrePassport?.$error"
          :url="appMainForm.formObj.landCadastrePassport"
          :warning="appMainForm.isRejected('landCadastrePassport')"
          @update="(file) => appMainForm.saveFile('landCadastrePassport', file)"
        />
      </FormField>

      <FormField
        label="Документы, подтверждающие право собственности"
        :is-not-confirmed="appMainForm.isRejected('ownershipDocuments')"
      >
        <FileUploader
          label="Документы, подтверждающие право собственности"
          :invalid="appMainForm.$v?.ownershipDocuments?.$error"
          :url="appMainForm.formObj.ownershipDocuments"
          :warning="appMainForm.isRejected('ownershipDocuments')"
          @update="(file) => appMainForm.saveFile('ownershipDocuments', file)"
        />
      </FormField>

      <FormField
        label="Отчет независимой оценочной организации"
        :is-not-confirmed="appMainForm.isRejected('realEstateValuationReport')"
      >
        <FileUploader
          label="Отчет независимой оценочной организации"
          :invalid="appMainForm.$v?.realEstateValuationReport?.$error"
          :url="appMainForm.formObj.realEstateValuationReport"
          :warning="appMainForm.isRejected('realEstateValuationReport')"
          @update="(file) => appMainForm.saveFile('realEstateValuationReport', file)"
        />
      </FormField>

      <h5 class="font-20-sb">
        Автотранспорт
      </h5>

      <FormField
        label="Свидетельство о регистрации автомототранспортного средства"
        :is-not-confirmed="appMainForm.isRejected('vehicleRegistrationCertificate')"
      >
        <FileUploader
          label="Свидетельство о регистрации автомототранспортного средства"
          :invalid="appMainForm.$v?.vehicleRegistrationCertificate?.$error"
          :url="appMainForm.formObj.vehicleRegistrationCertificate"
          :warning="appMainForm.isRejected('vehicleRegistrationCertificate')"
          @update="(file) => appMainForm.saveFile('vehicleRegistrationCertificate', file)"
        />
      </FormField>

      <FormField
        label="Отчет независимой оценочной организации"
        :is-not-confirmed="appMainForm.isRejected('vehicleValuationReport')"
      >
        <FileUploader
          label="Отчет независимой оценочной организации"
          :invalid="appMainForm.$v?.vehicleValuationReport?.$error"
          :url="appMainForm.formObj.vehicleValuationReport"
          :warning="appMainForm.isRejected('vehicleValuationReport')"
          @update="(file) => appMainForm.saveFile('vehicleValuationReport', file)"
        />
      </FormField>

      <h5 class="font-20-sb">
        Решения и гарантии
      </h5>

      <FormField
        label="Решение общего собрания участников/акционеров"
        :is-not-confirmed="appMainForm.isRejected('shareholderResolution')"
      >
        <FileUploader
          label="Решение общего собрания участников/акционеров"
          :invalid="appMainForm.$v?.shareholderResolution?.$error"
          :url="appMainForm.formObj.shareholderResolution"
          :warning="appMainForm.isRejected('shareholderResolution')"
          @update="(file) => appMainForm.saveFile('shareholderResolution', file)"
        />
      </FormField>

      <FormField
        label="Финансовая отчетность и учредительные документы"
        :is-not-confirmed="appMainForm.isRejected('guarantorFinancialAndFoundingDocs')"
      >
        <FileUploader
          label="Финансовая отчетность и учредительные документы"
          :invalid="appMainForm.$v?.guarantorFinancialAndFoundingDocs?.$error"
          :url="appMainForm.formObj.guarantorFinancialAndFoundingDocs"
          :warning="appMainForm.isRejected('guarantorFinancialAndFoundingDocs')"
          @update="(file) => appMainForm.saveFile('guarantorFinancialAndFoundingDocs', file)"
        />
      </FormField>

      <FormField
        label="Аудиторское заключение"
        :is-not-confirmed="appMainForm.isRejected('auditorOpinion')"
      >
        <FileUploader
          label="Аудиторское заключение"
          :invalid="appMainForm.$v?.auditorOpinion?.$error"
          :url="appMainForm.formObj.auditorOpinion"
          :warning="appMainForm.isRejected('auditorOpinion')"
          @update="(file) => appMainForm.saveFile('auditorOpinion', file)"
        />
      </FormField>

      <FormField
        label="Гарантийное письмо поручителя"
        :is-not-confirmed="appMainForm.isRejected('guarantorLetter')"
      >
        <FileUploader
          label="Гарантийное письмо поручителя"
          :invalid="appMainForm.$v?.guarantorLetter?.$error"
          :url="appMainForm.formObj.guarantorLetter"
          :warning="appMainForm.isRejected('guarantorLetter')"
          @update="(file) => appMainForm.saveFile('guarantorLetter', file)"
        />
      </FormField>

      <h5 class="font-20-sb">
        Страховой полис
      </h5>

      <FormField
        label="Письмо Страховой компании о получении обязательства перед займом."
        :is-not-confirmed="appMainForm.isRejected('insuranceCompanyLetter')"
      >
        <FileUploader
          label="Письмо Страховой компании о получении обязательства перед займом."
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
      <Button class="step-form__submit" label="Сохранить" fluid @click="emits('submit')" />
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
