<script setup lang="ts">
import type { LanguagesTypes } from '~/i18n/types';
import { useI18n } from '#imports';
import { uzFlagIcon } from '../../assets/icons';
import VIcon from './v-icon.vue';

const { locales, locale, setLocale } = useI18n({ useScope: 'global' });

const regionName = computed(() => locales.value.find(option => option.code === locale.value)?.name);

const lang = computed({
  get() {
    return locale.value;
  },

  set: async (value: LanguagesTypes) => {
    await setLocale(value);
  },
});
</script>

<template>
  <Select v-model="lang" class="lang-switcher" :options="locales" placeholder="Выберите язык" option-value="code" option-label="name">
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

<!-- <script setup lang="ts">
const { locales, locale, setLocale } = useI18n();
</script>

<template>
  <div class="switcher">
    <button
      v-for="lang in locales"
      :key="lang.code"
      :class="[lang.code === locale && 'active']"
      @click="setLocale(lang.code)"
    >
      {{ lang.name }}
    </button>
    <hr>
    {{ locale }}
  </div>
</template>

<style scoped lang="scss">
.active {
  background: var(--black);
  color: #fff;
}
</style> -->
