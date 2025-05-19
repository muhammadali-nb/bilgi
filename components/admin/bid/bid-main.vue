<script setup lang="ts">
import type { BidTabData } from '@composables/bid/types';
import FileReader from '@components/shared/file-reader.vue';
import FieldStatus from '../field-status.vue';

defineProps<{
  fields: BidTabData['main']
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
      <h3 class="font-20-sb">
        Контактная информация
      </h3>

      <FieldStatus
        field-id="contactPersonFullName"
        :status="fields.contactPersonFullName.status"
        label="Контактное лицо"
        :is-selected="selectedFields.includes('contactPersonFullName')"
        @update:selected="handleFieldSelect('contactPersonFullName')"
      >
        <p class="font-14-b">
          {{ fields.contactPersonFullName.value }}
        </p>
      </FieldStatus>

      <!--      <div> -->
      <!--        <FormField label="Контактное лицо"> -->
      <!--          <Checkbox /> -->
      <!--        </FormField> -->
      <!--        <p class="font-14-b"> -->
      <!--          {{ fields.contactPersonFullName.value }} -->
      <!--        </p> -->
      <!--      </div> -->

      <FieldStatus
        field-id="directorFullName"
        :status="fields.directorFullName.status"
        label="Руководитель"
        :is-selected="selectedFields.includes('directorFullName')"
        @update:selected="handleFieldSelect('directorFullName')"
      >
        <p class="font-14-b">
          {{ fields.directorFullName.value }}
        </p>
      </FieldStatus>

      <FieldStatus
        field-id="homePhone"
        :status="fields.homePhone.status"
        label="Домашний"
        :is-selected="selectedFields.includes('homePhone')"
        @update:selected="handleFieldSelect('homePhone')"
      >
        <p class="font-14-b">
          {{ fields.homePhone.value }}
        </p>
      </FieldStatus>

      <FieldStatus
        field-id="mobilePhone"
        :status="fields.mobilePhone.status"
        label="Мобильный телефон"
        :is-selected="selectedFields.includes('mobilePhone')"
        @update:selected="handleFieldSelect('mobilePhone')"
      >
        <p class="font-14-b">
          {{ fields.mobilePhone.value }}
        </p>
      </FieldStatus>

      <FieldStatus
        field-id="workPhone"
        :status="fields.workPhone.status"
        label="Рабочий"
        :is-selected="selectedFields.includes('workPhone')"
        @update:selected="handleFieldSelect('workPhone')"
      >
        <p class="font-14-b">
          {{ fields.workPhone.value }}
        </p>
      </FieldStatus>

      <FieldStatus
        field-id="applicantQuestionnaireDocumentUrl"
        :status="fields.applicantQuestionnaireDocumentUrl.status"
        label="Анкета Заявителя"
        :is-selected="selectedFields.includes('applicantQuestionnaireDocumentUrl')"
        @update:selected="handleFieldSelect('applicantQuestionnaireDocumentUrl')"
      >
        <FileReader :url="fields.applicantQuestionnaireDocumentUrl.value" />
      </FieldStatus>
    </div>

    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Основные сведения
      </h3>

      <FieldStatus
        field-id="targetCreditAmount"
        :status="fields.targetCreditAmount.status"
        label="Необходимая сумма целевого кредита (сум):"
        :is-selected="selectedFields.includes('targetCreditAmount')"
        @update:selected="handleFieldSelect('targetCreditAmount')"
      >
        <p class="font-14-b">
          {{ fields.targetCreditAmount.value }}
        </p>
      </FieldStatus>

      <FieldStatus
        field-id="youngSpecialistsCount"
        :status="fields.youngSpecialistsCount.status"
        label="Количество молодых специалистов, которые будут обучены и трудоустроены:"
        :is-selected="selectedFields.includes('youngSpecialistsCount')"
        @update:selected="handleFieldSelect('youngSpecialistsCount')"
      >
        <p class="font-14-b">
          {{ fields.youngSpecialistsCount.value }}
        </p>
      </FieldStatus>

      <FieldStatus
        field-id="creditReturnPeriodYears"
        :status="fields.creditReturnPeriodYears.status"
        label="Срок возврата целевого кредита (лет):"
        :is-selected="selectedFields.includes('creditReturnPeriodYears')"
        @update:selected="handleFieldSelect('creditReturnPeriodYears')"
      >
        <p class="font-14-b">
          {{ fields.creditReturnPeriodYears.value }}
        </p>
      </FieldStatus>

      <FieldStatus
        field-id="creditSecurityType"
        :status="fields.creditSecurityType.status"
        label="Обеспечение кредита"
        :is-selected="selectedFields.includes('creditSecurityType')"
        @update:selected="handleFieldSelect('creditSecurityType')"
      >
        <p class="font-14-b">
          {{ fields.creditSecurityType.value }}
        </p>
      </FieldStatus>
    </div>

    <div class="bid-detail__content-column">
      <h3 class="font-20-sb">
        Экономическое обоснование целевого кредита
      </h3>

      <FieldStatus
        field-id="ownFundsAmount"
        :status="fields.ownFundsAmount.status"
        label="Собственные средства, привлеченные для реализации проекта (сум):"
        :is-selected="selectedFields.includes('ownFundsAmount')"
        @update:selected="handleFieldSelect('ownFundsAmount')"
      >
        <p class="font-14-r">
          <span class="font-14-b">{{ fields.ownFundsAmount.value }}</span> сум
        </p>
      </FieldStatus>

      <FieldStatus
        field-id="projectDescription"
        :status="fields.projectDescription.status"
        label="Содержание проекта:"
        :is-selected="selectedFields.includes('projectDescription')"
        @update:selected="handleFieldSelect('projectDescription')"
      >
        <p class="font-14-r">
          {{ fields.projectDescription.value }}
        </p>
      </FieldStatus>

      <FieldStatus
        field-id="organizationSocialIndicators"
        :status="fields.organizationSocialIndicators.status"
        label="Информация о социальных показателях деятельности организации:"
        :is-selected="selectedFields.includes('organizationSocialIndicators')"
        @update:selected="handleFieldSelect('organizationSocialIndicators')"
      >
        <p class="font-14-r">
          {{ fields.organizationSocialIndicators.value }}
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
