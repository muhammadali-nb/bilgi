<script lang="ts" setup>
import { backIcon } from '@assets/icons';
import Navigation from '@components/layout/navigation.vue';
import VIcon from '@components/shared/VIcon.vue';
import { useNavigation } from '@composables/ui/navigation';
import { useAdminHeader } from '@store/admin-header';

const { navigationList } = useNavigation();
const adminHeaderStore = useAdminHeader();

const $router = useRouter();
</script>

<template>
  <div class="admin-layout">
    <aside>
      <Navigation :navigation-list="navigationList" />
    </aside>
    <div class="admin-layout__content">
      <div class="admin-layout__header font-16-n">
        <Button v-if="adminHeaderStore.isBackButtonEnabled" variant="text" @click="$router.back()">
          <VIcon :icon="backIcon" />
        </Button>
        <p class="admin-layout__header-title">
          {{ $t(adminHeaderStore.name) }}
          <span v-if="adminHeaderStore.bidNumber">{{ adminHeaderStore.bidNumber }}</span>
        </p>
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
  overflow: hidden;

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
    display: flex;
    align-items: center;

    :deep(.p-button) {

      padding: 1px;

    }

    &-title {
      margin: 0 0 0 1rem;
    }
  }
}
</style>
