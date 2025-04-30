<script lang="ts" setup>
import type { StepEmits } from '@composables/ui/steps/types';
import FileUploader from '@components/shared/file-uploader.vue';

import FormField from '@components/shared/FormField.vue';
import PhoneInput from '@components/shared/phone-Input.vue';
import { paymentComponentOptions, repaymentScheduleTypeOptions } from '@composables/main-form/data';
import { useAppMainForm } from '@store/main-form';

const emits = defineEmits<StepEmits>();

const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]);

const appMainForm = useAppMainForm();
</script>

<template>
  <form class="step-form">
    <h4 class="step-form__title font-24-sb">
      ЗАЯВЛЕНИЕ
    </h4>
    <div class="step-form__grid">
      <FormField
        label="Необходимая сумма целевого кредита (сум):"
        class="colspan-2"
        :errors="appMainForm.$v.targetCreditAmount.$errors"
      >
        <InputNumber
          v-model="appMainForm.$v.targetCreditAmount.$model"
          :invalid="appMainForm.$v.targetCreditAmount.$error"
          placeholder="Введите сумму"
          name="targetCreditAmount"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v.youngSpecialistsCount.$errors"
        label="Количество молодых специалистов, которых обучат и трудоустроят:"
      >
        <InputNumber
          v-model="appMainForm.$v.youngSpecialistsCount.$model"
          :invalid="appMainForm.$v.youngSpecialistsCount.$error"
          placeholder="Введите количество"
          name="youngSpecialistsCount"
        />
      </FormField>

      <FormField label="Льготный период:" :errors="appMainForm.$v.gracePeriod.$errors">
        <Select
          v-model="appMainForm.$v.gracePeriod.$model"
          :invalid="appMainForm.$v.gracePeriod.$error"
          :options="appMainForm.gracePeriodOptions"
          placeholder="Выберите период"
          option-label="name"
          option-value="value"
        />
      </FormField>

      <FormField label="Срок возврата целевого кредита (лет):" :errors="appMainForm.$v.creditReturnPeriodYears.$errors">
        <Select
          v-model="appMainForm.$v.creditReturnPeriodYears.$model"
          :invalid="appMainForm.$v.creditReturnPeriodYears.$error"
          :options="appMainForm.gracePeriodOptions"
          placeholder="Выберите срок"
          option-label="name"
          option-value="value"
        />
      </FormField>

      <FormField :errors="appMainForm.$v.creditSecurityType.$errors" label="Обеспечение кредита">
        <Select
          v-model="appMainForm.$v.creditSecurityType.$model"
          :invalid="appMainForm.$v.creditSecurityType.$error"
          :options="appMainForm.creditSecurityTypeOptions"
          option-label="name"
          option-value="value"
          placeholder="Выберите"
        />
      </FormField>

      <div class="colspan-2">
        <p class="font-16-r">
          Предполагаемый график возврата целевого кредита
        </p>
        <div class="step-form__grid">
          <FormField :errors="appMainForm.$v.plannedCreditReturnSchedule.$errors" label="(сумма долга, проценты)">
            <Select
              v-model="appMainForm.$v.plannedCreditReturnSchedule.$model"
              :invalid="appMainForm.$v.plannedCreditReturnSchedule.$error"
              :options="repaymentScheduleTypeOptions"
              option-label="name"
              option-value="value"
              placeholder="Выберите"
            />
          </FormField>

          <FormField :errors="appMainForm.$v.creditReturnFrequency.$errors" label="(ежемесячный, квартальный, другой)">
            <Select
              v-model="appMainForm.$v.creditReturnFrequency.$model"
              :invalid="appMainForm.$v.creditReturnFrequency.$error"
              :options="paymentComponentOptions"
              option-label="name"
              option-value="value"
              placeholder="Выберите"
            />
          </FormField>
        </div>
      </div>
    </div>

    <h3 class="font-20-sb step-form__subtitle">
      Экономическое обоснование целевого кредита
    </h3>

    <div class="step-form__target">
      <FormField :errors="appMainForm.$v.projectDescription.$errors" label="Содержание проекта:">
        <Textarea
          v-model="appMainForm.$v.projectDescription.$model"
          style="resize: none;"
          rows="7"
          :invalid="appMainForm.$v.projectDescription.$error"
        />
      </FormField>

      <FormField :errors="appMainForm.$v.ownFundsAmount.$errors" label="Собственные средства, привлеченные для реализации проекта (сум):">
        <InputNumber
          v-model="appMainForm.$v.ownFundsAmount.$model"
          :invalid="appMainForm.$v.ownFundsAmount.$error"
          placeholder="Введите сумму"
          name="ownFundsAmount"
        />
      </FormField>

      <FormField :errors="appMainForm.$v.organizationSocialIndicators.$errors" label="Информация о социальных показателях деятельности организации:">
        <Textarea
          v-model="appMainForm.$v.organizationSocialIndicators.$model"
          style="resize: none;"
          rows="7"
          :invalid="appMainForm.$v.organizationSocialIndicators.$error"
        />
      </FormField>
    </div>

    <h3 class="font-20-sb step-form__subtitle">
      Контактная информация
    </h3>

    <div class="step-form__grid">
      <FormField :errors="appMainForm.$v.contactPersonFullName.$errors" label="Контактное лицо" class="colspan-2">
        <InputText
          v-model="appMainForm.$v.contactPersonFullName.$model"
          :invalid="appMainForm.$v.contactPersonFullName.$error"
          placeholder="Ф.И.О"
          name="contactPersonFullName"
        />
      </FormField>

      <FormField :errors="appMainForm.$v.mobilePhone.$errors" label="Мобильный">
        <PhoneInput
          v-model="appMainForm.$v.mobilePhone.$model"
          :invalid="appMainForm.$v.mobilePhone.$error"
          placeholder="Введите телефон"
          name="mobilePhone"
        />
      </FormField>

      <FormField :errors="appMainForm.$v.workPhone.$errors" label="Рабочий">
        <PhoneInput
          v-model="appMainForm.$v.workPhone.$model"
          :invalid="appMainForm.$v.workPhone.$error"
          placeholder="Введите телефон"
          name="workPhone"
        />
      </FormField>

      <FormField :errors="appMainForm.$v.homePhone.$errors" label="Домашний">
        <PhoneInput
          v-model="appMainForm.$v.homePhone.$model"
          :invalid="appMainForm.$v.homePhone.$error"
          placeholder="Введите телефон"
          name="homePhone"
        />
      </FormField>

      <FormField :errors="appMainForm.$v.email.$errors" label="E-mail">
        <InputText
          v-model="appMainForm.$v.email.$model"
          :invalid="appMainForm.$v.email.$error"
          placeholder="ali@wuwu"
          name="email"
        />
      </FormField>

      <FormField :errors="appMainForm.$v.directorFullName.$errors" label="Руководитель (Ф.И.О.)" class="colspan-2">
        <InputText
          v-model="appMainForm.$v.directorFullName.$model"
          :invalid="appMainForm.$v.directorFullName.$error"
          placeholder="Ф.И.О"
          name="directorFullName"
        />
      </FormField>

      <FileUploader
        v-model="appMainForm.$v.applicantQuestionnaireDocumentUrl.$model"
        label="Документ, подтверждающий право на осуществление деятельности образования (лицензия/подтверждение/разрешение);"
        class="colspan-2"
      />
    </div>
    <Button
      class="step-form__submit"
      label="Далее"
      fluid
      @click="appMainForm.handleSubmit()"
    />
  </form>
</template>

<style lang="scss" scoped>
.step-form {
  background-color: var(--card-bg-05);
  border: 1px solid #DCE1E7;
  border-radius: 1rem;
  padding: 4rem;

  &__title {
    margin: 0 0 3.2rem 0;
  }

  &__subtitle {
    margin: 3.2rem 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 4.4rem;
  }

  &__target  {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  &__submit {
    margin: 3.2rem 0;
  }

  .colspan-2 {
    grid-column: span 2;
  }

}
</style>
