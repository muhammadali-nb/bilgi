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
    <div class="step-form__documents">
      <FileUploader
        label="Свидетельство о государственной регистрации"
        :invalid="appMainForm.$v?.certificateOfStateRegistration?.$error"
        :url="appMainForm.formObj.certificateOfStateRegistration"
        @update="(file) => appMainForm.saveFile('certificateOfStateRegistration', file)"
      />
      <FileUploader
        label="Устав организации"
        :invalid="appMainForm.$v?.organizationCharter?.$error"
        :url="appMainForm.formObj.organizationCharter"
        @update="(file) => appMainForm.saveFile('organizationCharter', file)"
      />
      <FileUploader
        label="Учредительный договор"
        :invalid="appMainForm.$v?.foundingAgreement?.$error"
        :url="appMainForm.formObj.foundingAgreement"
        @update="(file) => appMainForm.saveFile('foundingAgreement', file)"
      />
      <FileUploader
        label="Решения учредителей на открытие организации"
        :invalid="appMainForm.$v?.foundersDecisionToOpenOrganization?.$error"
        :url="appMainForm.formObj.foundersDecisionToOpenOrganization"
        @update="(file) => appMainForm.saveFile('foundersDecisionToOpenOrganization', file)"
      />
      <FileUploader
        label="Решение учредителей на выделение целевого займа (сумма займа, цель, срок, процентная ставка, обеспечение);"
        :invalid="appMainForm.$v?.foundersDecisionOnTargetLoan?.$error"
        :url="appMainForm.formObj.foundersDecisionOnTargetLoan"
        @update="(file) => appMainForm.saveFile('foundersDecisionOnTargetLoan', file)"
      />
      <FileUploader
        label="Приказ на выделение целевого займа (сумма займа, цель, срок, процентная ставка, обеспечение)"
        :invalid="appMainForm.$v?.orderOnTargetLoan?.$error"
        :url="appMainForm.formObj.orderOnTargetLoan"
        @update="(file) => appMainForm.saveFile('orderOnTargetLoan', file)"
      />
      <FileUploader
        label="Документы, подтверждающие полномочия руководителя"
        :invalid="appMainForm.$v?.ceoAuthorityConfirmation?.$error"
        :url="appMainForm.formObj.ceoAuthorityConfirmation"
        @update="(file) => appMainForm.saveFile('ceoAuthorityConfirmation', file)"
      />
      <FileUploader
        label="Документы, подтверждающие полномочия главного бухгалтера"
        :invalid="appMainForm.$v?.chiefAccountantAuthorityConfirmation?.$error"
        :url="appMainForm.formObj.chiefAccountantAuthorityConfirmation"
        @update="(file) => appMainForm.saveFile('chiefAccountantAuthorityConfirmation', file)"
      />
      <FileUploader
        label="Паспорт руководителя организации;"
        :invalid="appMainForm.$v?.ceoPassport?.$error"
        :url="appMainForm.formObj.ceoPassport"
        @update="(file) => appMainForm.saveFile('ceoPassport', file)"
      />
      <FileUploader
        label="Паспорт главного бухгалтера организации;"
        :invalid="appMainForm.$v?.chiefAccountantPassport?.$error"
        :url="appMainForm.formObj.chiefAccountantPassport"
        @update="(file) => appMainForm.saveFile('chiefAccountantPassport', file)"
      />
      <FileUploader
        label="Сертификат резидентства ООО 'дирекция технологического парка программных продуктов и информационных технологий' (IT Park);"
        :invalid="appMainForm.$v?.itParkResidencyCertificate?.$error"
        :url="appMainForm.formObj.itParkResidencyCertificate"
        @update="(file) => appMainForm.saveFile('itParkResidencyCertificate', file)"
      />
      <FileUploader
        label="Документ, подтверждающий право на осуществление деятельности образования (лицензия/подтверждение/разрешение);"
        :invalid="appMainForm.$v?.educationActivityPermission?.$error"
        :url="appMainForm.formObj.educationActivityPermission"
        @update="(file) => appMainForm.saveFile('educationActivityPermission', file)"
      />
    </div>

    <div class="step-form__controls">
      <Button class="step-form__prev" @click="emits('prev')">
        <VIcon :icon="prevIcon" />
      </Button>
      <Button class="step-form__submit" label="Далее" fluid @click="emits('submit')" />
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
