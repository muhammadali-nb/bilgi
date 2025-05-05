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
        label="Копии финансовой отчетности организации за последний год (за последний год – по кварталам), в объеме, установленном действующим законодательством РУз для квартальных, полугодовых и годовых отчетов, с подтверждением сдачи в налоговый орган; Ф-1, Ф-2, оборот счетов"
        :invalid="appMainForm.$v?.financialStatements?.$error"
        :url="appMainForm.formObj.financialStatements"
        @update="(file) => appMainForm.saveFile('financialStatements', file)"
      />
      <FileUploader
        label="Справка из налогового органа об отсутствии задолженности перед бюджетом;"
        :invalid="appMainForm.$v?.taxDebtAbsenceCertificate?.$error"
        :url="appMainForm.formObj.taxDebtAbsenceCertificate"
        @update="(file) => appMainForm.saveFile('taxDebtAbsenceCertificate', file)"
      />
      <FileUploader
        label="Справка из банков о наличии расчетных счетов, с указанием отсутствия картотеки №2 (оригинал с датой выдачи – не более 30 дней);"
        :invalid="appMainForm.$v?.bankAccountCertificate?.$error"
        :url="appMainForm.formObj.bankAccountCertificate"
        @update="(file) => appMainForm.saveFile('bankAccountCertificate', file)"
      />
      <FileUploader
        label="Бизнес-план проекта"
        :invalid="appMainForm.$v?.projectBusinessPlan?.$error"
        :url="appMainForm.formObj.projectBusinessPlan"
        @update="(file) => appMainForm.saveFile('projectBusinessPlan', file)"
      />
      <FileUploader
        label="Смета целевого расходования денежных средств"
        :invalid="appMainForm.$v?.targetFundSpendingEstimate?.$error"
        :url="appMainForm.formObj.targetFundSpendingEstimate"
        @update="(file) => appMainForm.saveFile('targetFundSpendingEstimate', file)"
      />
      <FileUploader
        label="Договор аренды (если организация арендует помещение);"
        :invalid="appMainForm.$v?.leaseAgreement?.$error"
        :url="appMainForm.formObj.leaseAgreement"
        @update="(file) => appMainForm.saveFile('leaseAgreement', file)"
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
