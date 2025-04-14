<script lang="ts" setup>
import type { StepEmits } from '@composables/ui/steps/types';
import FileUploader from '@components/shared/file-uploader.vue';
import FormField from '@components/shared/FormField.vue';
import PhoneInput from '@components/shared/phone-Input.vue';
import Textarea from 'primevue/textarea';

const emits = defineEmits<StepEmits>();

const selectedCity = ref('NY');
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]);
</script>

<template>
  <form class="step-form">
    <h4 class="step-form__title font-24-sb">
      ЗАЯВЛЕНИЕ
    </h4>

    <div class="step-form__grid">
      <FormField label="Необходимая сумма целевого кредита (сум):" class="colspan-2">
        <InputNumber placeholder="Введите сумму" name="price" />
      </FormField>

      <FormField label="Количество молодых специалистов, которых обучат и трудоустроят:">
        <InputNumber placeholder="Введите сумму" name="specialists" />
      </FormField>

      <FormField label="Льготный период:">
        <Select v-model="selectedCity" :options="cities" option-label="name" option-value="code" placeholder="Select a City" />
      </FormField>

      <FormField label="Срок возврата целевого кредита (лет): ">
        <Select v-model="selectedCity" :options="cities" option-label="name" option-value="code" placeholder="Select a City" />
      </FormField>

      <FormField label="Обеспечение кредита">
        <Select v-model="selectedCity" :options="cities" option-label="name" option-value="code" placeholder="Select a City" />
      </FormField>

      <div class="colspan-2">
        <p class="font-16-r">
          Предполагаемый график возврата целевого кредита
        </p>
        <div class="step-form__grid">
          <FormField label="(сумма долга, проценты)">
            <Select v-model="selectedCity" :options="cities" option-label="name" option-value="code" placeholder="Select a City" />
          </FormField>

          <FormField label="(ежемесячный, квартальный, другой)">
            <Select v-model="selectedCity" :options="cities" option-label="name" option-value="code" placeholder="Select a City" />
          </FormField>
        </div>
      </div>
    </div>

    <h3 class="font-20-sb step-form__subtitle">
      Экономическое обоснование целевого кредита
    </h3>
    <div class="step-form__target">
      <FormField label="Содержание проекта:">
        <Textarea style="resize: false;" rows="7" />
      </FormField>

      <FormField label="Собственные средства, привлеченные для реализации проекта (сум):">
        <InputNumber placeholder="Введите сумму" name="price" />
      </FormField>

      <FormField label="Информация о социальных показателях деятельности организации:">
        <Textarea style="resize: false;" rows="7" />
      </FormField>
    </div>
    <h3 class="font-20-sb step-form__subtitle">
      Контактная информация
    </h3>
    <div class="step-form__grid">
      <FormField label="Контактное лицо" class="colspan-2">
        <InputText placeholder="Ф.И.О" name="price" />
      </FormField>

      <FormField label="Мобильный">
        <PhoneInput model-value="" placeholder="Введите сумму" name="price" />
      </FormField>

      <FormField label="Рабочий ">
        <PhoneInput model-value="" placeholder="Введите сумму" name="price" />
      </FormField>

      <FormField label="Домашний">
        <PhoneInput model-value="" placeholder="Введите сумму" name="price" />
      </FormField>

      <FormField label="E-mail">
        <InputText model-value="" placeholder="ali@wuwu" name="price" />
      </FormField>

      <FormField label="Руководитель (Ф.И.О.)" class="colspan-2">
        <InputText model-value="" placeholder="Ф.И.О" name="price" />
      </FormField>
      <FileUploader label="Документ, подтверждающий право на осуществление деятельности образования (лицензия/подтверждение/разрешение);" class="colspan-2" />
    </div>
    <Button class="step-form__submit" label="Далее" fluid @click="emits('submit')" />
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
    gap: 2rem 4.4rem;
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
