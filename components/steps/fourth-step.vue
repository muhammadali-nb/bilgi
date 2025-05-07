<script lang="ts" setup>
import type { StepEmits } from '@composables/ui/steps/types';
import { prevIcon } from '@assets/icons';
import FileUploader from '@components/shared/file-uploader.vue';
import VIcon from '@components/shared/VIcon.vue';
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
      <FileUploader

        label="Кадастровый паспорт на земельный участок (здания и сооружения), предоставляемый в залог"
        :invalid="appMainForm.$v?.landCadastrePassport?.$error"
        :url="appMainForm.formObj.landCadastrePassport"
        @update="(file) => appMainForm.saveFile('landCadastrePassport', file)"
      />

      <FileUploader
        label="Документы, подтверждающие право собственности"
        :invalid="appMainForm.$v?.ownershipDocuments?.$error"
        :url="appMainForm.formObj.ownershipDocuments"
        @update="(file) => appMainForm.saveFile('ownershipDocuments', file)"
      />

      <FileUploader
        label="Отчет независимой оценочной организации"
        :invalid="appMainForm.$v?.realEstateValuationReport?.$error"
        :url="appMainForm.formObj.realEstateValuationReport"
        @update="(file) => appMainForm.saveFile('realEstateValuationReport', file)"
      />

      <h5 class="font-20-sb">
        Автотранспорт
      </h5>

      <FileUploader
        label="Свидетельство о регистрации автомототранспортного средства"
        :invalid="appMainForm.$v?.vehicleRegistrationCertificate?.$error"
        :url="appMainForm.formObj.vehicleRegistrationCertificate"
        @update="(file) => appMainForm.saveFile('vehicleRegistrationCertificate', file)"
      />

      <FileUploader
        label="Отчет независимой оценочной организации"
        :invalid="appMainForm.$v?.vehicleValuationReport?.$error"
        :url="appMainForm.formObj.vehicleValuationReport"
        @update="(file) => appMainForm.saveFile('vehicleValuationReport', file)"
      />

      <h5 class="font-20-sb">
        Решения и гарантии
      </h5>

      <FileUploader
        label="Решение общего собрания участников/акционеров"
        :invalid="appMainForm.$v?.shareholderResolution?.$error"
        :url="appMainForm.formObj.shareholderResolution"
        @update="(file) => appMainForm.saveFile('shareholderResolution', file)"
      />

      <FileUploader
        label="Финансовая отчетность и учредительные документы"
        :invalid="appMainForm.$v?.guarantorFinancialAndFoundingDocs?.$error"
        :url="appMainForm.formObj.guarantorFinancialAndFoundingDocs"
        @update="(file) => appMainForm.saveFile('guarantorFinancialAndFoundingDocs', file)"
      />

      <FileUploader
        label="Аудиторское заключение"
        :invalid="appMainForm.$v?.auditorOpinion?.$error"
        :url="appMainForm.formObj.auditorOpinion"
        @update="(file) => appMainForm.saveFile('auditorOpinion', file)"
      />

      <FileUploader
        label="Гарантийное письмо поручителя"
        :invalid="appMainForm.$v?.guarantorLetter?.$error"
        :url="appMainForm.formObj.guarantorLetter"
        @update="(file) => appMainForm.saveFile('guarantorLetter', file)"
      />

      <h5 class="font-20-sb">
        Страховой полис
      </h5>

      <FileUploader
        label="Письмо Страховой компании о получении обязательства перед займом."
        :invalid="appMainForm.$v?.insuranceCompanyLetter?.$error"
        :url="appMainForm.formObj.insuranceCompanyLetter"
        @update="(file) => appMainForm.saveFile('insuranceCompanyLetter', file)"
      />
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
