<script setup lang="ts">
import type { BidTabData } from '@composables/bid/types';
import FileReader from '@components/shared/file-reader.vue';
import FieldStatus from '../field-status.vue';

defineProps<{
  fields: BidTabData['main']
}>();
</script>

<template>
  <div class="bid-detail__content">
    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Контактная информация
      </h3>
      <FieldStatus status="success" label="Контактное лицо">
        <p class="font-14-b">
          {{ fields?.contactPersonFullName }}
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Руководитель">
        <p class="font-14-b">
          {{ fields?.directorFullName }}
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Домашний">
        <p class="font-14-b">
          {{ fields?.homePhone }}
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Мобильный телефон">
        <p class="font-14-b">
          {{ fields?.mobilePhone }}
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Рабочий">
        <p class="font-14-b">
          {{ fields?.workPhone }}
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Анкета Заявителя">
        <FileReader :url="fields.applicantQuestionnaireDocumentUrl" />
      </FieldStatus>
    </div>
    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Основные сведения
      </h3>
      <FieldStatus status="success" label="Необходимая сумма целевого кредита (сум): ">
        <p class="font-14-b">
          {{ fields?.targetCreditAmount }}
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Количество молодых специалистов, которые будут обучены и трудоустроены:">
        <p class="font-14-b">
          {{ fields?.youngSpecialistsCount }}
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Срок возврата целевого кредита (лет):">
        <p class="font-14-b">
          {{ fields?.creditReturnPeriodYears }}
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Обеспечение кредита">
        <p class="font-14-b">
          {{ fields?.creditSecurityType }}
        </p>
      </FieldStatus>
      <!-- <FieldStatus status="success" label="Срок возврата целевого кредита (лет):">
        <p class="font-14-b">
          {{ fields?.creditReturnPeriodYears }}
        </p>
      </FieldStatus> -->
    </div>
    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Экономическое обоснование целевого кредита
      </h3>
      <FieldStatus status="success" label="Собственные средства, привлеченные для реализации проекта (сум):">
        <p class="font-14-r">
          <span class="font-14-b">{{ fields.ownFundsAmount }}</span> сум
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Содержание проекта:">
        <p class="font-14-r">
          {{ fields.projectDescription }}
        </p>
      </FieldStatus>
      <FieldStatus status="success" label="Информация о социальных показателях деятельности организации:">
        <p class="font-14-r">
          {{ fields.organizationSocialIndicators }}
        </p>
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
