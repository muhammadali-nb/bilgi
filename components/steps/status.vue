<script lang="ts" setup>
import VIcon from '@components/shared/v-icon.vue';
import { getApplicationStatusMeta } from '@composables/ui/status';
import { useAppMainForm } from '@store/main-form';

const appMainForm = useAppMainForm();
const $router = useRouter();
const $route = useRoute();
const statusMeta = computed(() => getApplicationStatusMeta(appMainForm.applicationStatus ?? 1));

// const statusMeta = getApplicationStatusMeta(appMainForm.applicationStatus ?? 1);

const goToRejectedFieldStep = () => {
  const step = appMainForm.getStepByRejectedField();
  $router.push({ name: $route.name as string, query: { ...$route.query, step: step ?? 1 } });
};

function handleActionClick() {
  switch (statusMeta.value.action?.type) {
  case 'edit':

    break;
  case 'resend':
    break;
  }
}
</script>

<template>
  <div class="step-status">
    <h4 class="step-status__title font-24-sb">
      {{ $t('application-form.application') }} №{{ appMainForm.applicationId }}
    </h4>

    <Message :severity="statusMeta.severity">
      <template #icon>
        <VIcon :icon="statusMeta.icon" class="p-message-icon" />
      </template>
      {{ statusMeta.message }}

      <!--      {{ appMainForm.applicationStatus === ApplicationStatus.Correction ? 'new' : 'wen' }} -->
    </Message>

    <p v-if="statusMeta.description" class="font-16-r">
      {{ statusMeta.description }}
    </p>

    <div v-if="statusMeta.action">
      <Button
        :label="statusMeta.action.label"
        @click="goToRejectedFieldStep"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.step-status {
  background-color: var(--card-bg-05);
  border: 1px solid var(--border-color-secondary);
  border-radius: 1rem;
  padding: 4rem 4rem 7.2rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}
</style>
