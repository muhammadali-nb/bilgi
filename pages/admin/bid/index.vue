<script lang="ts" setup>
import StatisticCard from '@components/admin/statistic-card.vue';
import { bidData } from '@composables/mock/admin';

definePageMeta({
  layout: 'admin',
});
const localePath = useLocalePath();

const dataList = computed(() => bidData);
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

    <DataTable :value="dataList" :rows="5" :rows-per-page-options="[5, 20, 50]" paginator paginator-template="PrevPageLink PageLinks NextPageLink RowsPerPageDropdown">
      <Column field="id" header="№" />
      <Column field="bid_id" header="ID заявки" />
      <Column field="bid_id" header="ID заявки" />
      <Column field="legal_person" header="Юр лицо" />
      <Column field="person" header="Ф.И.О" />
      <Column field="phone" header="Номер телефона" />
      <Column field="date" header="Дата подачи" />
      <Column field="status" header="Статус" />
      <Column header="Действие">
        <template #body="slotProps">
          <NuxtLink :to="localePath(`/admin/bid/${slotProps.data.bid_id}`)">
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
