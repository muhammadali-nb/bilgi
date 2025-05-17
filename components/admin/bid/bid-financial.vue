<script setup lang="ts">
import type { BidTabData } from '@composables/bid/types';
import FileReader from '@components/shared/file-reader.vue';
import FieldStatus from '../field-status.vue';

defineProps<{
  fields: BidTabData['financial']
}>();
</script>

<template>
  <div class="bid-detail__content">
    <div class="bid-detail__content-column">
      <FieldStatus status="success" label="Финансовая отчетность">
        <FileReader :url="fields.financialStatements" />
      </FieldStatus>
      <FieldStatus status="success" label="Справка об отсутствии задолженности по налогам">
        <FileReader :url="fields.taxDebtAbsenceCertificate" />
      </FieldStatus>
      <FieldStatus status="success" label="Справка об открытии банковского счета">
        <FileReader :url="fields.bankAccountCertificate" />
      </FieldStatus>
    </div>
    <div class="bid-detail__content-column">
      <FieldStatus status="success" label="Бизнес-план проекта">
        <FileReader :url="fields.projectBusinessPlan" />
      </FieldStatus>
      <FieldStatus status="success" label="Смета расходов целевых средств">
        <FileReader :url="fields.targetFundSpendingEstimate" />
      </FieldStatus>
      <FieldStatus status="success" label="Договор аренды">
        <FileReader :url="fields.leaseAgreement" />
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
