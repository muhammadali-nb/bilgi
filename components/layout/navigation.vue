<script lang="ts" setup>
import type { INavigationItem } from '@composables/ui/navigation/types';
import VIcon from '@components/shared/VIcon.vue';

defineProps<{
  navigationList: INavigationItem[]
}>();

const localePath = useLocalePath();
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in navigationList" :key="item.path">
        <NuxtLink :to="localePath(item.path)">
          <Button class="link-button" fluid>
            <VIcon v-if="item.icon" :icon="item.icon" no-fill />
            {{ $t(item.name) }}
          </Button>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.link-button {
  justify-content: flex-start;
  --p-button-primary-background: var(--primary-300);
  --p-button-padding-x: 1rem;
  --p-button-gap: 1rem;
}
</style>
