<script setup lang="ts">
import type { BidTabData } from '@composables/bid/types';
import FileReader from '@components/shared/file-reader.vue';
import FieldStatus from '../field-status.vue';

defineProps<{
  fields: BidTabData['financial']
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
        field-id="financialStatements"
        :status="fields.financialStatements.status"
        label="Финансовая отчетность"
        :is-selected="selectedFields.includes('financialStatements')"
        @update:selected="handleFieldSelect('financialStatements')"
      >
        <FileReader :url="fields.financialStatements.value" />
      </FieldStatus>
      <FieldStatus
        field-id="taxDebtAbsenceCertificate"
        :status="fields.taxDebtAbsenceCertificate.status"
        label="Справка об отсутствии задолженности по налогам"
        :is-selected="selectedFields.includes('taxDebtAbsenceCertificate')"
        @update:selected="handleFieldSelect('taxDebtAbsenceCertificate')"
      >
        <FileReader :url="fields.taxDebtAbsenceCertificate.value" />
      </FieldStatus>
      <FieldStatus
        field-id="bankAccountCertificate"
        :status="fields.bankAccountCertificate.status"
        label="Справка об открытии банковского счета"
        :is-selected="selectedFields.includes('bankAccountCertificate')"
        @update:selected="handleFieldSelect('bankAccountCertificate')"
      >
        <FileReader :url="fields.bankAccountCertificate.value" />
      </FieldStatus>
    </div>
    <div class="bid-detail__content-column">
      <FieldStatus
        field-id="projectBusinessPlan"
        :status="fields.projectBusinessPlan.status"
        label="Бизнес-план проекта"
        :is-selected="selectedFields.includes('projectBusinessPlan')"
        @update:selected="handleFieldSelect('projectBusinessPlan')"
      >
        <FileReader :url="fields.projectBusinessPlan.value" />
      </FieldStatus>
      <FieldStatus
        field-id="targetFundSpendingEstimate"
        :status="fields.targetFundSpendingEstimate.status"
        label="Смета расходов целевых средств"
        :is-selected="selectedFields.includes('targetFundSpendingEstimate')"
        @update:selected="handleFieldSelect('targetFundSpendingEstimate')"
      >
        <FileReader :url="fields.targetFundSpendingEstimate.value" />
      </FieldStatus>
      <FieldStatus
        field-id="leaseAgreement"
        :status="fields.leaseAgreement.status"
        label="Договор аренды"
        :is-selected="selectedFields.includes('leaseAgreement')"
        @update:selected="handleFieldSelect('leaseAgreement')"
      >
        <FileReader :url="fields.leaseAgreement.value" />
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
