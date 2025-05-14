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
        label="Свидетельство о государственной регистрации"
        :is-not-confirmed="appMainForm.isRejected('certificateOfStateRegistration')"
      >
        <FileUploader
          label="Свидетельство о государственной регистрации"
          :invalid="appMainForm.$v?.certificateOfStateRegistration?.$error"
          :url="appMainForm.formObj.certificateOfStateRegistration"
          :warning="appMainForm.isRejected('certificateOfStateRegistration')"
          @update="(file) => appMainForm.saveFile('certificateOfStateRegistration', file)"
        />
      </FormField>

      <FormField
        label="Устав организации"
        :is-not-confirmed="appMainForm.isRejected('organizationCharter')"
      >
        <FileUploader
          label="Устав организации"
          :invalid="appMainForm.$v?.organizationCharter?.$error"
          :url="appMainForm.formObj.organizationCharter"
          :warning="appMainForm.isRejected('organizationCharter')"
          @update="(file) => appMainForm.saveFile('organizationCharter', file)"
        />
      </FormField>

      <FormField
        label="Учредительный договор"
        :is-not-confirmed="appMainForm.isRejected('foundingAgreement')"
      >
        <FileUploader
          label="Учредительный договор"
          :invalid="appMainForm.$v?.foundingAgreement?.$error"
          :url="appMainForm.formObj.foundingAgreement"
          :warning="appMainForm.isRejected('foundingAgreement')"
          @update="(file) => appMainForm.saveFile('foundingAgreement', file)"
        />
      </FormField>

      <FormField
        label="Решения учредителей на открытие организации"
        :is-not-confirmed="appMainForm.isRejected('foundersDecisionToOpenOrganization')"
      >
        <FileUploader
          label="Решения учредителей на открытие организации"
          :invalid="appMainForm.$v?.foundersDecisionToOpenOrganization?.$error"
          :url="appMainForm.formObj.foundersDecisionToOpenOrganization"
          :warning="appMainForm.isRejected('foundersDecisionToOpenOrganization')"
          @update="(file) => appMainForm.saveFile('foundersDecisionToOpenOrganization', file)"
        />
      </FormField>

      <FormField
        label="Решение учредителей на выделение целевого займа (сумма займа, цель, срок, процентная ставка, обеспечение);"
        :is-not-confirmed="appMainForm.isRejected('foundersDecisionOnTargetLoan')"
      >
        <FileUploader
          label="Решение учредителей на выделение целевого займа (сумма займа, цель, срок, процентная ставка, обеспечение);"
          :invalid="appMainForm.$v?.foundersDecisionOnTargetLoan?.$error"
          :url="appMainForm.formObj.foundersDecisionOnTargetLoan"
          :warning="appMainForm.isRejected('foundersDecisionOnTargetLoan')"
          @update="(file) => appMainForm.saveFile('foundersDecisionOnTargetLoan', file)"
        />
      </FormField>

      <FormField
        label="Приказ на выделение целевого займа (сумма займа, цель, срок, процентная ставка, обеспечение)"
        :is-not-confirmed="appMainForm.isRejected('orderOnTargetLoan')"
      >
        <FileUploader
          label="Приказ на выделение целевого займа (сумма займа, цель, срок, процентная ставка, обеспечение)"
          :invalid="appMainForm.$v?.orderOnTargetLoan?.$error"
          :url="appMainForm.formObj.orderOnTargetLoan"
          :warning="appMainForm.isRejected('orderOnTargetLoan')"
          @update="(file) => appMainForm.saveFile('orderOnTargetLoan', file)"
        />
      </FormField>

      <FormField
        label="Документы, подтверждающие полномочия руководителя"
        :is-not-confirmed="appMainForm.isRejected('ceoAuthorityConfirmation')"
      >
        <FileUploader
          label="Документы, подтверждающие полномочия руководителя"
          :invalid="appMainForm.$v?.ceoAuthorityConfirmation?.$error"
          :url="appMainForm.formObj.ceoAuthorityConfirmation"
          :warning="appMainForm.isRejected('ceoAuthorityConfirmation')"
          @update="(file) => appMainForm.saveFile('ceoAuthorityConfirmation', file)"
        />
      </FormField>

      <FormField
        label="Документы, подтверждающие полномочия главного бухгалтера"
        :is-not-confirmed="appMainForm.isRejected('chiefAccountantAuthorityConfirmation')"
      >
        <FileUploader
          label="Документы, подтверждающие полномочия главного бухгалтера"
          :invalid="appMainForm.$v?.chiefAccountantAuthorityConfirmation?.$error"
          :url="appMainForm.formObj.chiefAccountantAuthorityConfirmation"
          :warning="appMainForm.isRejected('chiefAccountantAuthorityConfirmation')"
          @update="(file) => appMainForm.saveFile('chiefAccountantAuthorityConfirmation', file)"
        />
      </FormField>

      <FormField
        label="Паспорт руководителя организации;"
        :is-not-confirmed="appMainForm.isRejected('ceoPassport')"
      >
        <FileUploader
          label="Паспорт руководителя организации;"
          :invalid="appMainForm.$v?.ceoPassport?.$error"
          :url="appMainForm.formObj.ceoPassport"
          :warning="appMainForm.isRejected('ceoPassport')"
          @update="(file) => appMainForm.saveFile('ceoPassport', file)"
        />
      </FormField>

      <FormField
        label="Паспорт главного бухгалтера организации;"
        :is-not-confirmed="appMainForm.isRejected('chiefAccountantPassport')"
      >
        <FileUploader
          label="Паспорт главного бухгалтера организации;"
          :invalid="appMainForm.$v?.chiefAccountantPassport?.$error"
          :url="appMainForm.formObj.chiefAccountantPassport"
          :warning="appMainForm.isRejected('chiefAccountantPassport')"
          @update="(file) => appMainForm.saveFile('chiefAccountantPassport', file)"
        />
      </FormField>

      <FormField
        label="Сертификат резидентства ООО 'дирекция технологического парка программных продуктов и информационных технологий' (IT Park);"
        :is-not-confirmed="appMainForm.isRejected('itParkResidencyCertificate')"
      >
        <FileUploader
          label="Сертификат резидентства ООО 'дирекция технологического парка программных продуктов и информационных технологий' (IT Park);"
          :invalid="appMainForm.$v?.itParkResidencyCertificate?.$error"
          :url="appMainForm.formObj.itParkResidencyCertificate"
          :warning="appMainForm.isRejected('itParkResidencyCertificate')"
          @update="(file) => appMainForm.saveFile('itParkResidencyCertificate', file)"
        />
      </FormField>

      <FormField
        label="Документ, подтверждающий право на осуществление деятельности образования (лицензия/подтверждение/разрешение);"
        :is-not-confirmed="appMainForm.isRejected('educationActivityPermission')"
      >
        <FileUploader
          label="Документ, подтверждающий право на осуществление деятельности образования (лицензия/подтверждение/разрешение);"
          :invalid="appMainForm.$v?.educationActivityPermission?.$error"
          :url="appMainForm.formObj.educationActivityPermission"
          :warning="appMainForm.isRejected('educationActivityPermission')"
          @update="(file) => appMainForm.saveFile('educationActivityPermission', file)"
        />
      </FormField>
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
