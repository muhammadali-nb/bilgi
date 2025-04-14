<script lang="ts" setup>
import type { StepEmits } from '@composables/ui/steps/types';
import { prevIcon } from '@assets/icons';
import FileUploader from '@components/shared/file-uploader.vue';
import VIcon from '@components/shared/VIcon.vue';

const emits = defineEmits<StepEmits>();
</script>

<template>
  <form class="step-form">
    <h4 class="step-form__title font-24-sb">
      Недвижимое имущество
    </h4>

    <div class="step-form__documents">
      <FileUploader label="Кадастровый паспорт на земельный участок (здания и сооружения), предоставляемый в залог" />
      <FileUploader label="Документы, подтверждающие право собственности" />
      <FileUploader label="Отчет независимой оценочной организации" />
      <h5 class="font-20-sb">
        Автотранспорт
      </h5>

      <FileUploader label="Свидетельство о регистрации автомототранспортного средства" />
      <FileUploader label="Отчет независимой оценочной организации" />
      <h5 class="font-20-sb">
        Автотранспорт
      </h5>

      <FileUploader label="Решение общего собрания участников/акционеров" />
      <FileUploader label="Финансовая отчетность и учредительные документы" />
      <FileUploader label="Аудиторское заключение" />
      <FileUploader label="Гарантийное письмо поручителя" />

      <h5 class="font-20-sb">
        Страховой полис
      </h5>
      <FileUploader label="Письмо Страховой компании о получение обязательства перед займом." />
    </div>
    <!-- Вынести в переиспользуемый компонент -->
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
  border: 1px solid #DCE1E7;
  border-radius: 1rem;
  padding: 4rem;

  &__title {
    margin: 0 0 3.2rem 0;
  }

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
