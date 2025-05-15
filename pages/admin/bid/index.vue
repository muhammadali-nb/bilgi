<script lang="ts" setup>
import StatisticCard from '@components/admin/statistic-card.vue';
import { useBid } from '@composables/bid';

const { getBids, bidsData } = useBid();
definePageMeta({
  layout: 'admin',
});
const localePath = useLocalePath();
await getBids();
</script>

<template>
  <div class="bid">
    <div class="bid__statistic-cards">
      <StatisticCard value="100 000" title="Новые" severity="default" />
      <StatisticCard value="100 000" title="На доработке" severity="error" />
      <StatisticCard value="100 000" title="Отменена" severity="error" />
      <StatisticCard value="100 000" title="Заключение" severity="default" />
      <StatisticCard value="100 000" title="Одобрена" severity="default" />
      <StatisticCard value="100 000" title="Выдача" severity="success" />
    </div>
    <div class="bid__statistic-filters">
      <Select placeholder="Дата  _ _  _ _  _ _ _ _" />
      <Select placeholder="Статус ______" />
    </div>

    <DataTable :value="bidsData" :rows="5" :rows-per-page-options="[5, 20, 50]" paginator paginator-template="PrevPageLink PageLinks NextPageLink RowsPerPageDropdown">
      <Column field="id" header="№" />
      <Column field="bid_id" header="Юр лицо">
        <template #body="slotProps">
          {{ `${slotProps.data.properties.directorFullName}` }}
        </template>
      </Column>
      <Column field="bid_id" header="Ф.И.О">
        <template #body="slotProps">
          {{ `${slotProps.data.properties.contactPersonFullName}` }}
        </template>
      </Column>
      <Column field="legal_person" header="Номер телефона">
        <template #body="slotProps">
          {{ `${slotProps.data.properties.mobilePhone}` }}
        </template>
      </Column>
      <Column field="person" header="Дата подачи ">
        <template #body>
          {{ new Date().toLocaleString() }}
        </template>
      </Column>
      <Column field="status" header="Статус" />
      <Column header="Действие">
        <template #body="slotProps">
          <NuxtLink :to="localePath(`/admin/bid/${slotProps.data.id}`)">
            <Button label="Просмотреть" severity="primary" size="small" />
          </NuxtLink>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style lang="scss" scoped>
.bid {
  padding: 2rem;

  &__statistic-cards {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  &__statistic-filters {
    display: flex;
    gap: 2rem;
    margin-bottom: 3.2rem;
  }
}
</style>
