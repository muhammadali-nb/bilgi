<script setup lang="ts">
import { documentIcon } from '@assets/icons';
import VIcon from '@components/shared/v-icon.vue';

defineProps<{
  url: string
}>();

const visible = ref(false);
const isLoading = ref(true);

const handleIframeLoad = () => {
  isLoading.value = false;
};

function getFileNameFromUrl(url: string) {
  if (!url) return '---';
  return url.substring(url.lastIndexOf('/') + 1);
}
</script>

<template>
  <div class="file-reader">
    <div class="file-reader__header">
      <VIcon :icon="documentIcon" no-fill class="icon" />
      <h6 class="font-16-r file-reader__name">
        {{ getFileNameFromUrl(url) }}
      </h6>
    </div>
    <div class="file-reader__body">
      <Button label="Скачать" class="file-reader__btn" as="a" download :href="url" />
      <Button label="Открыть" class="file-reader__btn" @click="visible = true" />
    </div>
    <Dialog
      v-model:visible="visible"
      style="width: 60vw;"
      modal
      :header="getFileNameFromUrl(url)"
      class="file-reader__dialog"
    >
      <div class="file-reader__content">
        <ProgressSpinner v-if="isLoading" />
        <iframe
          :src="`https://docs.google.com/gview?url=${url}&embedded=true`"
          class="file-reader__iframe"
          @load="handleIframeLoad"
        />
      </div>
    </Dialog>
  </div>
</template>

<style scoped lang="scss">
.file-reader {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .icon {
    flex-shrink: 0;
  }

  &__name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 300px;
  }

  &__body, &__header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__btn {
    --p-button-padding-y: 0.4rem;
    --p-button-padding-x: 1rem;
    border-radius: var(--radius-m);
    font: var(--font-14-n) !important;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__iframe {
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
  }

}
</style>
