<script setup lang="ts">
import { uzFlagIcon } from '../../assets/icons';
import VIcon from './VIcon.vue';

const { locales, locale, setLocale } = useI18n();

const regionName = computed(() => locales.value.find(option => option.code === locale.value)?.name);
</script>

<template>
  <Select v-model="locale" class="lang-switcher" :options="locales" placeholder="Выберите язык" option-value="code" option-label="name" @update:model-value="setLocale">
    <template #option="slotProps">
      <div class="lang-switcher__option">
        <VIcon
          :icon="uzFlagIcon"
          no-fill
        />
        <p class="font-14-r">
          {{ slotProps.option.name }}
        </p>
      </div>
    </template>
    <template #value="slotProps">
      <div v-if="slotProps.value" class="lang-switcher__option">
        <VIcon
          :icon="uzFlagIcon"
          no-fill
        />
        <p class="font-16-r">
          {{ regionName }}
        </p>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
  </Select>
</template>

<style scoped lang="scss">
.lang-switcher {
  padding: 0 1rem 0 0;
  border: none;
  box-shadow: none;
  background-color: transparent;
  :deep(.p-select-dropdown) {
    display: none;
  }

  &__option {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
</style>
