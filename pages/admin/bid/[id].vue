<script lang="ts" setup>
import BidFinancial from '@components/admin/bid/bid-financial.vue';
import BidFounding from '@components/admin/bid/bid-founding.vue';
import BidMain from '@components/admin/bid/bid-main.vue';
import BidSecurity from '@components/admin/bid/bid-security.vue';
import { useBid } from '@composables/bid';
import { bidOptions } from '@composables/bid/data';
import { PropertyStatus } from '@composables/main-form/types';

const tab = ref(1);
const {
  bid, getBid, bidStatus,
  error, selectedFields, toggleField,
  moderateBid, rejectMessage, isRejectDialogVisible,
} = useBid();

const handleFieldSelect = (fieldId: string) => {
  toggleField(fieldId);
};

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
      <div>
        <SelectButton v-model="tab" :allow-empty="false" :options="bidOptions" option-value="id" option-label="name" />
      </div>
      <BidMain
        v-if="tab === 1 && bid"
        :fields="bid.main"
        :selected-fields="selectedFields"
        @update:selected="handleFieldSelect"
      />
      <BidFounding
        v-if="tab === 2 && bid"
        :fields="bid.collateralDocuments"
        :selected-fields="selectedFields"
        @update:selected="handleFieldSelect"
      />
      <BidFinancial
        v-if="tab === 3 && bid"
        :fields="bid.financial"
        :selected-fields="selectedFields"
        @update:selected="handleFieldSelect"
      />
      <BidSecurity
        v-if="tab === 4 && bid"
        :fields="bid.security"
        :selected-fields="selectedFields"
        @update:selected="handleFieldSelect"
      />

      <div class="bid-detail__footer">
        <Button label="Отклонить" severity="danger" :disabled="!selectedFields.length" @click="isRejectDialogVisible = true" />
        <Button label="Подтвердить" severity="success" :disabled="!selectedFields.length" @click="moderateBid(PropertyStatus.Approved)" />
      </div>
    </template>
    <Dialog v-model:visible="isRejectDialogVisible" style="width: 600px;" header="Отклонить заявку" :modal="true" :draggable="false" :resizable="false">
      <Textarea v-model="rejectMessage" fluid placeholder="Введите причину отклонения" :rows="10" />
      <template #footer>
        <div class="bid-detail__footer">
          <Button label="Отменить" severity="danger" :disabled="!rejectMessage && !selectedFields.length" @click="moderateBid(PropertyStatus.Rejected)" />
          <Button label="На доработку" severity="warn" :disabled="!rejectMessage && !selectedFields.length" @click="moderateBid(PropertyStatus.Rejected)" />
        </div>
      </template>
    </Dialog>
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
