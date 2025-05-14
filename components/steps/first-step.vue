<script lang="ts" setup>
import type { StepEmits } from '@composables/ui/steps/types';

import FileUploader from '@components/shared/file-uploader.vue';
import FormField from '@components/shared/form-field.vue';
import PhoneInput from '@components/shared/phone-Input.vue';
import { paymentComponentOptions, repaymentScheduleTypeOptions } from '@composables/main-form/data';
import { useAppMainForm } from '@store/main-form';

const emits = defineEmits<StepEmits>();
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
        :errors="appMainForm.$v?.targetCreditAmount?.$errors"
        :is-not-confirmed="appMainForm.isRejected('targetCreditAmount')"
      >
        <InputNumber
          v-model="appMainForm.formObj.targetCreditAmount"
          :invalid="appMainForm.$v?.targetCreditAmount?.$error"
          placeholder="Введите сумму"
          :class="{ warning: appMainForm.isRejected('targetCreditAmount') }"
          name="targetCreditAmount"
          @blur="appMainForm.handleBlurSave('targetCreditAmount')"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v?.youngSpecialistsCount?.$errors"
        label="Кол-во молодых специалистов, которых обучат и трудоустроят:"
        :is-not-confirmed="appMainForm.isRejected('youngSpecialistsCount')"
      >
        <InputNumber
          v-model="appMainForm.formObj.youngSpecialistsCount"
          :invalid="appMainForm.$v?.youngSpecialistsCount?.$error"
          placeholder="Введите количество"
          :class="{ warning: appMainForm.isRejected('youngSpecialistsCount') }"
          name="youngSpecialistsCount"
          @blur="appMainForm.handleBlurSave('youngSpecialistsCount')"
        />
      </FormField>

      <FormField
        label="Льготный период:"
        :errors="appMainForm.$v?.gracePeriod?.$errors"
        :is-not-confirmed="appMainForm.isRejected('gracePeriod')"
      >
        <Select
          v-model="appMainForm.formObj.gracePeriod"
          :invalid="appMainForm.$v?.gracePeriod?.$error"
          :options="appMainForm.gracePeriodOptions"
          placeholder="Выберите период"
          option-label="name"
          option-value="value"
          @change="appMainForm.saveField('gracePeriod', appMainForm.formObj.gracePeriod)"
        />
      </FormField>

      <FormField
        label="Срок возврата целевого кредита (лет):"
        :errors="appMainForm.$v?.creditReturnPeriodYears?.$errors"
        :is-not-confirmed="appMainForm.isRejected('creditReturnPeriodYears')"
      >
        <Select
          v-model="appMainForm.formObj.creditReturnPeriodYears"
          :invalid="appMainForm.$v?.creditReturnPeriodYears?.$error"
          :options="appMainForm.gracePeriodOptions"
          placeholder="Выберите срок"
          option-label="name"
          option-value="value"
          :class="{ warning: appMainForm.isRejected('creditReturnPeriodYears') }"
          @change="appMainForm.saveField('creditReturnPeriodYears', appMainForm.formObj.creditReturnPeriodYears)"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v?.creditSecurityType?.$errors"
        label="Обеспечение кредита"
        :is-not-confirmed="appMainForm.isRejected('creditSecurityType')"
      >
        <Select
          v-model="appMainForm.formObj.creditSecurityType"
          :invalid="appMainForm.$v?.creditSecurityType?.$error"
          :options="appMainForm.creditSecurityTypeOptions"
          option-label="name"
          option-value="value"
          placeholder="Выберите"
          :class="{ warning: appMainForm.isRejected('creditSecurityTypeOptions') }"
          @change="appMainForm.saveField('creditSecurityType', appMainForm.formObj.creditSecurityType)"
        />
      </FormField>

      <div class="colspan-2">
        <p class="font-16-r">
          Предполагаемый график возврата целевого кредита
        </p>
        <div class="step-form__grid">
          <FormField
            :errors="appMainForm.$v?.plannedCreditReturnSchedule?.$errors"
            label="(сумма долга, проценты)"
            :is-not-confirmed="appMainForm.isRejected('plannedCreditReturnSchedule')"
          >
            <Select
              v-model="appMainForm.formObj.plannedCreditReturnSchedule"
              :invalid="appMainForm.$v?.plannedCreditReturnSchedule?.$error"
              :options="repaymentScheduleTypeOptions"
              option-label="name"
              option-value="value"
              placeholder="Выберите"
              :class="{ warning: appMainForm.isRejected('plannedCreditReturnSchedule') }"
              @change="appMainForm.saveField('plannedCreditReturnSchedule', appMainForm.formObj.plannedCreditReturnSchedule)"
            />
          </FormField>

          <FormField
            :errors="appMainForm.$v?.creditReturnFrequency?.$errors"
            label="(ежемесячный, квартальный, другой)"
            :is-not-confirmed="appMainForm.isRejected('creditReturnFrequency')"
          >
            <Select
              v-model="appMainForm.formObj.creditReturnFrequency"
              :invalid="appMainForm.$v?.creditReturnFrequency?.$error"
              :options="paymentComponentOptions"
              option-label="name"
              option-value="value"
              placeholder="Выберите"
              :class="{ warning: appMainForm.isRejected('creditReturnFrequency') }"
              @change="appMainForm.saveField('creditReturnFrequency', appMainForm.formObj.creditReturnFrequency)"
            />
          </FormField>
        </div>
      </div>
    </div>

    <h3 class="font-20-sb step-form__subtitle">
      Экономическое обоснование целевого кредита
    </h3>
    <div class="step-form__target">
      <FormField
        :errors="appMainForm.$v?.projectDescription?.$errors"
        label="Содержание проекта:"
        :is-not-confirmed="appMainForm.isRejected('projectDescription')"
      >
        <Textarea
          v-model="appMainForm.formObj.projectDescription"
          style="resize: none;"
          rows="7"
          :class="{ warning: appMainForm.isRejected('projectDescription') }"
          :invalid="appMainForm.$v?.projectDescription?.$error"
          @blur="appMainForm.handleBlurSave('projectDescription')"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v?.ownFundsAmount?.$errors"
        label="Собственные средства, привлеченные для реализации проекта (сум):"
        :is-not-confirmed="appMainForm.isRejected('ownFundsAmount')"
      >
        <InputNumber
          v-model="appMainForm.formObj.ownFundsAmount"
          :invalid="appMainForm.$v?.ownFundsAmount?.$error"
          placeholder="Введите сумму"
          :class="{ warning: appMainForm.isRejected('ownFundsAmount') }"
          name="ownFundsAmount"
          @blur="appMainForm.handleBlurSave('ownFundsAmount')"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v?.organizationSocialIndicators?.$errors"
        label="Информация о социальных показателях деятельности организации:"
        :is-not-confirmed="appMainForm.isRejected('organizationSocialIndicators')"
      >
        <Textarea
          v-model="appMainForm.formObj.organizationSocialIndicators"
          style="resize: none;"
          rows="7"
          :class="{ warning: appMainForm.isRejected('organizationSocialIndicators') }"
          :invalid="appMainForm.$v?.organizationSocialIndicators?.$error"
          @blur="appMainForm.handleBlurSave('organizationSocialIndicators')"
        />
      </FormField>
    </div>

    <h3 class="font-20-sb step-form__subtitle">
      Контактная информация
    </h3>

    <div class="step-form__grid">
      <FormField
        :errors="appMainForm.$v?.contactPersonFullName?.$errors"
        label="Контактное лицо"
        class="colspan-2"
        :is-not-confirmed="appMainForm.isRejected('contactPersonFullName')"
      >
        <InputText
          v-model="appMainForm.formObj.contactPersonFullName"
          :invalid="appMainForm.$v?.contactPersonFullName?.$error"
          placeholder="Ф.И.О"
          :class="{ warning: appMainForm.isRejected('contactPersonFullName') }"
          name="contactPersonFullName"
          @blur="appMainForm.handleBlurSave('contactPersonFullName')"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v?.mobilePhone?.$errors"
        label="Мобильный"
        :is-not-confirmed="appMainForm.isRejected('mobilePhone')"
      >
        <PhoneInput
          v-model="appMainForm.formObj.mobilePhone"
          :invalid="appMainForm.$v?.mobilePhone?.$error"
          name="mobilePhone"
          :class="{ warning: appMainForm.isRejected('mobilePhone') }"
          @complete="appMainForm.handleBlurSave('mobilePhone')"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v?.workPhone?.$errors"
        label="Рабочий"
        :is-not-confirmed="appMainForm.isRejected('workPhone')"
      >
        <PhoneInput
          v-model="appMainForm.formObj.workPhone"
          :invalid="appMainForm.$v?.workPhone?.$error"
          name="workPhone"
          :class="{ warning: appMainForm.isRejected('workPhone') }"
          @complete="appMainForm.saveField('workPhone', appMainForm.formObj.workPhone)"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v?.homePhone?.$errors"
        label="Домашний"
        :is-not-confirmed="appMainForm.isRejected('homePhone')"
      >
        <PhoneInput
          v-model="appMainForm.formObj.homePhone"
          :invalid="appMainForm.$v?.homePhone?.$error"
          :class="{ warning: appMainForm.isRejected('homePhone') }"
          name="homePhone"
          @complete="appMainForm.saveField('homePhone', appMainForm.formObj.homePhone)"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v?.email?.$errors"
        label="E-mail"
        :is-not-confirmed="appMainForm.isRejected('email')"
      >
        <InputText
          v-model="appMainForm.formObj.email"
          :invalid="appMainForm.$v?.email?.$error"
          placeholder="ali@wuwu"
          :class="{ warning: appMainForm.isRejected('email') }"
          name="email"
          @blur="appMainForm.handleBlurSave('email')"
        />
      </FormField>

      <FormField
        :errors="appMainForm.$v?.directorFullName?.$errors"
        label="Руководитель (Ф.И.О.)"
        class="colspan-2"
        :is-not-confirmed="appMainForm.isRejected('directorFullName')"
      >
        <InputText
          v-model="appMainForm.formObj.directorFullName"
          :invalid="appMainForm.$v?.directorFullName?.$error"
          placeholder="Ф.И.О"
          name="directorFullName"
          :class="{ warning: appMainForm.isRejected('directorFullName') }"
          @blur="appMainForm.handleBlurSave('directorFullName')"
        />
      </FormField>

      <FormField
        label="Анкета Заявителя"
        class="colspan-2"
        :is-not-confirmed="appMainForm.isRejected('applicantQuestionnaireDocumentUrl')"
      >
        <FileUploader
          label="Документ, подтверждающий право на осуществление деятельности образования (лицензия/подтверждение/разрешение);"
          :invalid="appMainForm.$v?.applicantQuestionnaireDocumentUrl?.$error"
          :url="appMainForm.formObj.applicantQuestionnaireDocumentUrl"
          :warning="appMainForm.isRejected('applicantQuestionnaireDocumentUrl')"
          @update="(file) => appMainForm.saveFile('applicantQuestionnaireDocumentUrl', file)"
        />
      </FormField>
    </div>

    <Button
      class="step-form__submit"
      label="Далее"
      fluid
      @click="emits('submit')"
    />
  </form>
</template>

<style lang="scss" scoped>
.step-form {
  background-color: var(--card-bg-05);
  border: 1px solid var(--border-color-secondary);
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

  &__target {
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
