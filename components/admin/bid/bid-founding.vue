<script setup lang="ts">
import type { BidTabData } from '@composables/bid/types';
import FileReader from '@components/shared/file-reader.vue';
import FieldStatus from '../field-status.vue';

defineProps<{
  fields: BidTabData['collateralDocuments']

}>();
</script>

<template>
  <div class="bid-detail__content">
    <div class="bid-detail__content-column">
      <FieldStatus status="success" label="Свидетельство о государственной регистрации">
        <FileReader :url="fields.certificateOfStateRegistration" />
      </FieldStatus>
      <FieldStatus status="success" label="Руководитель">
        <FileReader :url="fields.organizationCharter" />
      </FieldStatus>
      <FieldStatus status="success" label="Учредительный договор">
        <FileReader :url="fields.foundingAgreement" />
      </FieldStatus>
      <FieldStatus status="success" label="Решение учредителей на выделение целевого займа">
        <FileReader :url="fields.foundersDecisionToOpenOrganization" />
      </FieldStatus>
      <FieldStatus status="success" label="Приказ на выделение целевого займа ">
        <FileReader :url="fields.foundersDecisionOnTargetLoan" />
      </FieldStatus>
      <FieldStatus status="success" label="Документы, подтверждающие полномочия руководителя;">
        <FileReader :url="fields.orderOnTargetLoan" />
      </FieldStatus>
    </div>
    <div class="bid-detail__content-column">
      <FieldStatus status="success" label="Свидетельство о государственной регистрации">
        <FileReader :url="fields.ceoAuthorityConfirmation" />
      </FieldStatus>
      <FieldStatus status="success" label="Руководитель">
        <FileReader :url="fields.chiefAccountantAuthorityConfirmation" />
      </FieldStatus>
      <FieldStatus status="success" label="Учредительный договор">
        <FileReader :url="fields.ceoPassport" />
      </FieldStatus>
      <FieldStatus status="success" label="Решение учредителей на выделение целевого займа">
        <FileReader :url="fields.itParkResidencyCertificate" />
      </FieldStatus>
      <FieldStatus status="success" label="Приказ на выделение целевого займа ">
        <FileReader :url="fields.educationActivityPermission" />
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
