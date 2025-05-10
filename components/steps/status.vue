<script lang="ts" setup>
import { successIcon } from '@assets/icons';
import VIcon from '@components/shared/VIcon.vue';
</script>

<template>
  <div class="step-status">
    <h4 class="step-status__title font-24-sb">
      Заявка №21355
    </h4>
    <Message>
      <template #icon>
        <VIcon :icon="successIcon" class="p-message-icon" />
      </template>
      Ваша заявка № 21355 успешно прошла все этапы проверки и готова к выдаче. Пожалуйста, ознакомьтесь с договором перед получением.
    </Message>
    <p class="font-16-r">
      Ваша заявка была отклонена в связи с наличием задолженностей. Для дальнейшего рассмотрения вам необходимо погасить все задолженности и предоставить подтверждающие документы.
    </p>
    <div>
      <Button label="Скачать договор" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.step-status {
  background-color: var(--card-bg-05);
  border: 1px solid var(--border-color-secondary);
  border-radius: 1rem;
  padding: 4rem 4rem 7.2rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}
</style>
