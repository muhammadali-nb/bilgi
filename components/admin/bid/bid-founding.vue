<script setup lang="ts">
import type { BidTabData } from '@composables/bid/types';
import FileReader from '@components/shared/file-reader.vue';
import FieldStatus from '../field-status.vue';

defineProps<{
  fields: BidTabData['collateralDocuments']
  selectedFields: string[]
}>();

const emit = defineEmits<{
  (e: 'update:selected', fieldId: string): void
}>();

const handleFieldSelect = (fieldId: string) => {
  emit('update:selected', fieldId);
};
</script>

<template>
  <div class="bid-detail__content">
    <div class="bid-detail__content-column">
      <FieldStatus
        field-id="certificateOfStateRegistration"
        :status="fields.certificateOfStateRegistration.status"
        label="Свидетельство о государственной регистрации"
        :is-selected="selectedFields.includes('certificateOfStateRegistration')"
        @update:selected="handleFieldSelect('certificateOfStateRegistration')"
      >
        <FileReader :url="fields.certificateOfStateRegistration.value" />
      </FieldStatus>
      <FieldStatus
        field-id="organizationCharter"
        :status="fields.organizationCharter.status"
        label="Руководитель"
        :is-selected="selectedFields.includes('organizationCharter')"
        @update:selected="handleFieldSelect('organizationCharter')"
      >
        <FileReader :url="fields.organizationCharter.value" />
      </FieldStatus>
      <FieldStatus
        field-id="foundingAgreement"
        :status="fields.foundingAgreement.status"
        label="Учредительный договор"
        :is-selected="selectedFields.includes('foundingAgreement')"
        @update:selected="handleFieldSelect('foundingAgreement')"
      >
        <FileReader :url="fields.foundingAgreement.value" />
      </FieldStatus>
      <FieldStatus
        field-id="foundersDecisionToOpenOrganization"
        :status="fields.foundersDecisionToOpenOrganization.status"
        label="Решение учредителей на выделение целевого займа"
        :is-selected="selectedFields.includes('foundersDecisionToOpenOrganization')"
        @update:selected="handleFieldSelect('foundersDecisionToOpenOrganization')"
      >
        <FileReader :url="fields.foundersDecisionToOpenOrganization.value" />
      </FieldStatus>
      <FieldStatus
        field-id="foundersDecisionOnTargetLoan"
        :status="fields.foundersDecisionOnTargetLoan.status"
        label="Приказ на выделение целевого займа"
        :is-selected="selectedFields.includes('foundersDecisionOnTargetLoan')"
        @update:selected="handleFieldSelect('foundersDecisionOnTargetLoan')"
      >
        <FileReader :url="fields.foundersDecisionOnTargetLoan.value" />
      </FieldStatus>
      <FieldStatus
        field-id="orderOnTargetLoan"
        :status="fields.orderOnTargetLoan.status"
        label="Документы, подтверждающие полномочия руководителя"
        :is-selected="selectedFields.includes('orderOnTargetLoan')"
        @update:selected="handleFieldSelect('orderOnTargetLoan')"
      >
        <FileReader :url="fields.orderOnTargetLoan.value" />
      </FieldStatus>
    </div>
    <div class="bid-detail__content-column">
      <FieldStatus
        field-id="ceoAuthorityConfirmation"
        :status="fields.ceoAuthorityConfirmation.status"
        label="Документы, подтверждающие полномочия главного бухгалтера"
        :is-selected="selectedFields.includes('ceoAuthorityConfirmation')"
        @update:selected="handleFieldSelect('ceoAuthorityConfirmation')"
      >
        <FileReader :url="fields.ceoAuthorityConfirmation.value" />
      </FieldStatus>
      <FieldStatus
        field-id="chiefAccountantAuthorityConfirmation"
        :status="fields.chiefAccountantAuthorityConfirmation.status"
        label="Паспорт руководителя организации;"
        :is-selected="selectedFields.includes('chiefAccountantAuthorityConfirmation')"
        @update:selected="handleFieldSelect('chiefAccountantAuthorityConfirmation')"
      >
        <FileReader :url="fields.chiefAccountantAuthorityConfirmation.value" />
      </FieldStatus>
      <FieldStatus
        field-id="ceoPassport"
        :status="fields.ceoPassport.status"
        label="Паспорт главного бухгалтера организации;"
        :is-selected="selectedFields.includes('ceoPassport')"
        @update:selected="handleFieldSelect('ceoPassport')"
      >
        <FileReader :url="fields.ceoPassport.value" />
      </FieldStatus>
      <FieldStatus
        field-id="itParkResidencyCertificate"
        :status="fields.itParkResidencyCertificate.status"
        label="Сертификат резидентства ООО 'дирекция технологического парка программных продуктов и информационных технологий' (IT Park);"
        :is-selected="selectedFields.includes('itParkResidencyCertificate')"
        @update:selected="handleFieldSelect('itParkResidencyCertificate')"
      >
        <FileReader :url="fields.itParkResidencyCertificate.value" />
      </FieldStatus>
      <FieldStatus
        field-id="educationActivityPermission"
        :status="fields.educationActivityPermission.status"
        label="Приказ на выделение целевого займа"
        :is-selected="selectedFields.includes('educationActivityPermission')"
        @update:selected="handleFieldSelect('educationActivityPermission')"
      >
        <FileReader :url="fields.educationActivityPermission.value" />
      </FieldStatus>
      <FieldStatus
        field-id="chiefAccountantPassport"
        :status="fields.chiefAccountantPassport.status"
        label="Паспорт главного бухгалтера организации;"
        :is-selected="selectedFields.includes('chiefAccountantPassport')"
        @update:selected="handleFieldSelect('chiefAccountantPassport')"
      >
        <FileReader :url="fields.chiefAccountantPassport.value" />
      </FieldStatus>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bid-detail__content {
    margin-top: 2.8rem;
    box-shadow: var(--box-shadow-card);
    padding: 1.4rem 2rem 2.8rem 2rem;
    border-radius: var(--radius-l);

    display: grid;
    grid-template-columns: 1fr 1fr 50%;
    gap: 8rem;

    &-column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
}
</style>
