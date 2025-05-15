<script lang="ts" setup>
import FieldStatus from '@components/admin/field-status.vue';
import { useBid } from '@composables/bid';
import { bidOptions } from '@composables/bid/data';
import { useAppMainForm } from '@store/main-form';

const value = ref(1);
const { bidGroupedBySteps, getBid } = useBid();
const appMainForm = useAppMainForm();
definePageMeta({
  layout: 'admin',
});
getBid();
appMainForm.generateFieldToStepMap();
</script>

<template>
  <div class="bid-detail">
    <div>
      <SelectButton v-model="value" :options="bidOptions" option-value="id" option-label="name" />
    </div>

    <div class="bid-detail__content">
      <div class="bid-detail__content-column">
        <h3 class="font-20-sb">
          Контактная информация
        </h3>
        <FieldStatus status="success" label="Контактное лицо">
          <p class="font-14-b">
            Виктор Викторович Викторов
          </p>
        </FieldStatus>
        <FieldStatus status="success" label="Домашний">
          <p class="font-14-b">
            +998 90 900 90 90
          </p>
        </FieldStatus>
      </div>
      <div class="bid-detail__content-column">
        <h3 class="font-20-sb">
          Основные сведения
        </h3>
        <FieldStatus status="success" label="Контактное лицо">
          <p class="font-14-b">
            Виктор Викторович Викторов
          </p>
        </FieldStatus>

        <FieldStatus status="success" label="Контактное лицо">
          <p class="font-14-b">
            Виктор Викторович Викторов
          </p>
        </FieldStatus>
      </div>
      <div class="bid-detail__content-column">
        <h3 class="font-20-sb">
          Экономическое обоснование целевого кредита
        </h3>
        <FieldStatus status="success" label="Контактное лицо">
          <p class="font-14-r">
            Разработка веб-приложения для автоматизации процессов учебного центра. Платформа позволит администраторам управлять расписанием, записями на курсы, платежами и коммуникацией с учениками. Студенты смогут записываться на занятия, получать учебные материалы и отслеживать свой прогресс в личном кабинете.
          </p>
        </FieldStatus>
        <FieldStatus status="success" label="Контактное лицо">
          <p class="font-14-r">
            Учебный центр активно способствует социальному развитию, предоставляя доступное образование для всех слоев населения, включая льготные категории, и обеспечивая высокий процент трудоустройства выпускников. Организация участвует в благотворительных и образовательных инициативах, внедряет цифровые технологии для снижения экологического следа и создает комфортные условия для работы преподавателей, поддерживая их профессиональное развитие.
          </p>
        </FieldStatus>
        <FieldStatus status="success" label="Контактное лицо">
          <p class="font-14-r">
            <span class="font-14-b">12 000 000</span> сум
          </p>
        </FieldStatus>
      </div>
    </div>

    <div class="bid-detail__footer">
      <Button label="Отклонить" severity="danger" />
      <Button label="Подтвердить" severity="success" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.bid-detail {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__content {
    margin-top: 2.8rem;
    box-shadow: var(--box-shadow-card);
    padding: 1.4rem 2rem 2.8rem 2rem;
    border-radius: var(--radius-l);

    display: grid;
    grid-template-columns: 1fr 1fr 50%;
    gap: 8rem;

    &-column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__footer {
    padding: 2.2rem;
    min-width: 100%;
    background-color: var(--white);

    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    margin: auto -2rem 0 ;

    :deep(.p-button) {
      padding: 2rem 5rem;
    }
  }
}
</style>
