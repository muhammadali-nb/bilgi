<script setup lang="ts">
import type { BidTabData } from '@composables/bid/types';
import FileReader from '@components/shared/file-reader.vue';
import FieldStatus from '../field-status.vue';

defineProps<{
  fields: BidTabData['security']
}>();
</script>

<template>
  <div class="bid-detail__content">
    <!-- Недвижимое имущество -->
    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Недвижимое имущество
      </h3>
      <FieldStatus status="success" label="Кадастровый паспорт земельного участка">
        <FileReader :url="fields.landCadastrePassport" />
      </FieldStatus>
      <FieldStatus status="success" label="Правоустанавливающие документы на недвижимость">
        <FileReader :url="fields.ownershipDocuments" />
      </FieldStatus>
      <FieldStatus status="success" label="Отчет об оценке недвижимости">
        <FileReader :url="fields.realEstateValuationReport" />
      </FieldStatus>
      <h3 class="font-20-sb">
        Автотранспорт
      </h3>
      <FieldStatus status="success" label="Свидетельство о регистрации автотранспорта">
        <FileReader :url="fields.vehicleRegistrationCertificate" />
      </FieldStatus>
      <FieldStatus status="success" label="Отчет об оценке автотранспорта">
        <FileReader name="vehicleValuationReport" :url="fields.vehicleValuationReport" />
      </FieldStatus>
    </div>

    <!-- Поручительство -->
    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Поручительство
      </h3>
      <FieldStatus status="success" label="Протокол общего собрания акционеров / учредителей">
        <FileReader :url="fields.shareholderResolution" />
      </FieldStatus>
      <FieldStatus status="success" label="Финансовые и учредительные документы поручителя">
        <FileReader :url="fields.guarantorFinancialAndFoundingDocs" />
      </FieldStatus>
      <FieldStatus status="success" label="Аудиторское заключение">
        <FileReader :url="fields.auditorOpinion" />
      </FieldStatus>
      <FieldStatus status="success" label="Гарантийное письмо поручителя">
        <FileReader :url="fields.guarantorLetter" />
      </FieldStatus>
    </div>

    <!-- Страховой полис -->
    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Страховой полис
      </h3>
      <FieldStatus status="success" label="Письмо от страховой компании">
        <FileReader :url="fields.insuranceCompanyLetter" />
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
