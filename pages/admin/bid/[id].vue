<script lang="ts" setup>
import BidTab from '@components/admin/bid/bid-tab.vue';
import { useBid } from '@composables/bid';
import { bidOptions } from '@composables/bid/data';

const tab = ref(1);
const { bid, getBid, bidStatus, error } = useBid();

definePageMeta({
  layout: 'admin',
});

getBid();
</script>

<template>
  <div class="bid-detail">
    <div v-if="bidStatus === 'pending'" class="bid-detail__loading">
      <ProgressSpinner />
    </div>

    <div v-else-if="error" class="bid-detail__error">
      <Message severity="error" :closable="false">
        {{ error }}
      </Message>
    </div>

    <template v-else>
      <div class="bid-detail__header">
        <SelectButton v-model="tab" :allow-empty="false" :options="bidOptions" option-value="id" option-label="name" />
      </div>

      <BidTab v-if="bid" :tab-key="bidOptions[tab - 1].key" :fields="bid[bidOptions[tab - 1].key]" />

      <div class="bid-detail__footer">
        <Button label="Отклонить" severity="danger" />
        <Button label="Подтвердить" severity="success" />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.bid-detail {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__error {
    padding: 1rem;
  }

  &__footer {
    padding: 2.2rem;
    min-width: 100%;
    background-color: var(--white);

    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    margin: auto -2rem 0;

    :deep(.p-button) {
      padding: 2rem 5rem;
    }
  }
}
</style>
