<script setup lang="ts">
import type { BidTabData } from '@composables/bid/types';
import FileReader from '@components/shared/file-reader.vue';
import FieldStatus from '../field-status.vue';

defineProps<{
  fields: BidTabData['security']
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
    <!-- Недвижимое имущество -->
    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Недвижимое имущество
      </h3>
      <FieldStatus
        field-id="landCadastrePassport"
        :status="fields.landCadastrePassport.status"
        label="Кадастровый паспорт земельного участка"
        :is-selected="selectedFields.includes('landCadastrePassport')"
        @update:selected="handleFieldSelect('landCadastrePassport')"
      >
        <FileReader :url="fields.landCadastrePassport.value" />
      </FieldStatus>
      <FieldStatus
        field-id="ownershipDocuments"
        :status="fields.ownershipDocuments.status"
        label="Правоустанавливающие документы на недвижимость"
        :is-selected="selectedFields.includes('ownershipDocuments')"
        @update:selected="handleFieldSelect('ownershipDocuments')"
      >
        <FileReader :url="fields.ownershipDocuments.value" />
      </FieldStatus>
      <FieldStatus
        field-id="realEstateValuationReport"
        :status="fields.realEstateValuationReport.status"
        label="Отчет об оценке недвижимости"
        :is-selected="selectedFields.includes('realEstateValuationReport')"
        @update:selected="handleFieldSelect('realEstateValuationReport')"
      >
        <FileReader :url="fields.realEstateValuationReport.value" />
      </FieldStatus>

      <h3 class="font-20-sb">
        Автотранспорт
      </h3>
      <FieldStatus
        field-id="vehicleRegistrationCertificate"
        :status="fields.vehicleRegistrationCertificate.status"
        label="Свидетельство о регистрации автотранспорта"
        :is-selected="selectedFields.includes('vehicleRegistrationCertificate')"
        @update:selected="handleFieldSelect('vehicleRegistrationCertificate')"
      >
        <FileReader :url="fields.vehicleRegistrationCertificate.value" />
      </FieldStatus>
      <FieldStatus
        field-id="vehicleValuationReport"
        :status="fields.vehicleValuationReport.status"
        label="Отчет об оценке автотранспорта"
        :is-selected="selectedFields.includes('vehicleValuationReport')"
        @update:selected="handleFieldSelect('vehicleValuationReport')"
      >
        <FileReader :url="fields.vehicleValuationReport.value" />
      </FieldStatus>
    </div>

    <!-- Поручительство -->
    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Поручительство
      </h3>
      <FieldStatus
        field-id="shareholderResolution"
        :status="fields.shareholderResolution.status"
        label="Протокол общего собрания акционеров / учредителей"
        :is-selected="selectedFields.includes('shareholderResolution')"
        @update:selected="handleFieldSelect('shareholderResolution')"
      >
        <FileReader :url="fields.shareholderResolution.value" />
      </FieldStatus>
      <FieldStatus
        field-id="guarantorFinancialAndFoundingDocs"
        :status="fields.guarantorFinancialAndFoundingDocs.status"
        label="Финансовые и учредительные документы поручителя"
        :is-selected="selectedFields.includes('guarantorFinancialAndFoundingDocs')"
        @update:selected="handleFieldSelect('guarantorFinancialAndFoundingDocs')"
      >
        <FileReader :url="fields.guarantorFinancialAndFoundingDocs.value" />
      </FieldStatus>
      <FieldStatus
        field-id="auditorOpinion"
        :status="fields.auditorOpinion.status"
        label="Аудиторское заключение"
        :is-selected="selectedFields.includes('auditorOpinion')"
        @update:selected="handleFieldSelect('auditorOpinion')"
      >
        <FileReader :url="fields.auditorOpinion.value" />
      </FieldStatus>
      <FieldStatus
        field-id="guarantorLetter"
        :status="fields.guarantorLetter.status"
        label="Гарантийное письмо поручителя"
        :is-selected="selectedFields.includes('guarantorLetter')"
        @update:selected="handleFieldSelect('guarantorLetter')"
      >
        <FileReader :url="fields.guarantorLetter.value" />
      </FieldStatus>
    </div>

    <!-- Страховой полис -->
    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Страховой полис
      </h3>
      <FieldStatus
        field-id="insuranceCompanyLetter"
        :status="fields.insuranceCompanyLetter.status"
        label="Письмо от страховой компании"
        :is-selected="selectedFields.includes('insuranceCompanyLetter')"
        @update:selected="handleFieldSelect('insuranceCompanyLetter')"
      >
        <FileReader :url="fields.insuranceCompanyLetter.value" />
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
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem;

  &-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
