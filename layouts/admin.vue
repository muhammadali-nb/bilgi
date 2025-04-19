<script lang="ts" setup>
import Navigation from '@components/layout/navigation.vue';
import { useNavigation } from '@composables/ui/navigation';

const { navigationList } = useNavigation();
// const route = useRoute();

// const routeName = computed(() => {
//   if (typeof route.name !== 'string' || route.name.includes('/admin')) return '';
//   return route.name.split('__')[0].replaceAll('-', '.');
// });
</script>

<template>
  <div class="admin-layout">
    <aside>
      <Navigation :navigation-list="navigationList" />
    </aside>
    <div class="admin-layout__content">
      <div class="admin-layout__header font-16-n">
        Все заявки
      </div>

      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-layout {
  height: 100dvh;
  display: flex;
  align-items: center;

  aside {
    min-width: 30rem;
    height: 100%;
    background-color: var(--primary-500);
    padding: 8rem 1.5rem;
  }

  &__content {
    height: 100%;
    flex: 1;
    background-color: var(--site-secondary-bg);
    position: relative;
  }

  &__header {
    padding: 2.4rem 2.2rem;
    background-color: var(--card-bg-05);
  }
}
</style>
