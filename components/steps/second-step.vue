<script lang="ts" setup>
import type { StepEmits } from '@composables/ui/steps/types';
import { prevIcon } from '@assets/icons';
import FileUploader from '@components/shared/file-uploader.vue';
import VIcon from '@components/shared/VIcon.vue';

const emits = defineEmits<StepEmits>();
</script>

<template>
  <form class="step-form">
    <div class="step-form__documents">
      <FileUploader label="Свидетельство о государственной регистрации" />
      <FileUploader label="Устав организации" />
      <FileUploader label="Учредительный договор" />
      <FileUploader label="Решения учредителей на открытие организации" />
      <FileUploader label="Решение учредителей на выделение целевого займа (сумма займа, цель, срок, процентная ставка, обеспечение);" />
      <FileUploader label="Приказ на выделение целевого займа (сумма займа, цель, срок, процентная ставка, обеспечение)" />
      <FileUploader label="Документы, подтверждающие полномочия руководителя" />
      <FileUploader label="Документы, подтверждающие полномочия главного бухгалтера" />
      <FileUploader label="Паспорт руководителя организации;" />
      <FileUploader label="Паспорт главного бухгалтера организации;" />
      <FileUploader label="Сертификат резидентства ООО 'дирекция технологического парка программных продуктов и информационных технологий' (IT Park);" />
      <FileUploader label="Паспорт руководителя организации;" />
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
