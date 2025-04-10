<script lang="ts" setup>
const selectedCity = ref();
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

    <div class="form__field step-form__input">
      <label for="price">Необходимая сумма целевого кредита (сум):</label>
      <InputNumber placeholder="Введите сумму" name="price" />
    </div>

    <div class="step-form__grid">
      <div class="form__field step-form__input field-align">
        <label for="specialists">Количество молодых специалистов, которых обучат и трудоустроят:</label>
        <InputNumber placeholder="Введите сумму" name="specialists" />
      </div>
      <div class="form__field step-form__input field-align">
        <label for="grace">Льготный период:</label>
        <Select v-model="selectedCity" :options="cities" option-label="name" placeholder="Select a City" />
      </div>
      <div class="form__field step-form__input field-align">
        <label for="grace">Срок возврата целевого кредита (лет):</label>
        <Select v-model="selectedCity" :options="cities" option-label="name" placeholder="Select a City" />
      </div>
      <div class="form__field step-form__input field-align">
        <label for="grace">Обеспечение кредита</label>
        <Select v-model="selectedCity" :options="cities" option-label="name" placeholder="Select a City" />
      </div>
    </div>
    <div>
      <p class="font-16-r">
        Предполагаемый график возврата целевого кредита
      </p>
      <div class="step-form__grid">
        <div class="form__field step-form__input field-align">
          <label for="grace">(сумма долга, проценты)</label>
          <Select v-model="selectedCity" :options="cities" option-label="name" placeholder="Select a City" />
        </div>
        <div class="form__field step-form__input field-align">
          <label for="grace">(ежемесячный, квартальный, другой)</label>
          <Select v-model="selectedCity" :options="cities" option-label="name" placeholder="Select a City" />
        </div>
      </div>
    </div>
    <h2 class="font-20-sb step-form__subtitle">
      Экономическое обоснование целевого кредита
    </h2>
    <div class="form__field step-form__input field-align">
      <label for="grace">Содержание проекта:</label>
      <TextArea style="resize: none;" name="grace" rows="5" cols="30" />
    </div>
    <div class="form__field step-form__input">
      <label for="price">Собственные средства, привлеченные для реализации проекта (сум):</label>
      <InputNumber placeholder="Введите сумму" name="price" />
    </div>
    <div class="form__field step-form__input field-align">
      <label for="grace">Информация о социальных показателях деятельности организации:</label>
      <TextArea style="resize: none;" name="grace" rows="5" cols="30" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.step-form {
  border: 1px solid #DCE1E7;
  border-radius: 1rem;
  padding: 4rem;

  &__title {
    margin: 0 0 3.2rem 0;
  }

  &__input {
    margin-bottom: 2rem;
    justify-content: flex-end;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4.4rem;
  }

  &__subtitle {
    margin: 3.2rem 0;
  }
}
</style>
