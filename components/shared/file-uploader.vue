<script setup lang="ts">
import type { IEmitsFileUploader, IPropsFileUploader } from '@composables/ui/file-uploader/types';
import { document, documentIcon, plusIcon } from '@assets/icons';
import { useFileUploader } from '@composables/ui/file-uploader';
import VIcon from './VIcon.vue';

const props = defineProps<IPropsFileUploader>();
const emit = defineEmits<IEmitsFileUploader>();

const {
  getFileNameFromUrl, preview, onFileChange,
  openFileDialog, onDrop, status, onDragOver,
  onDragLeave, isDragOver, errorMessage, inputRef,
} = useFileUploader(props, emit);

onMounted(() => {
  if (props.url) {
    preview.value = {
      url: props.url,
      name: getFileNameFromUrl(props.url),
      type: '',
    };
  }
});

onBeforeUnmount(() => {
  if (preview.value?.url) {
    URL.revokeObjectURL(preview.value.url);
  }
});
</script>

<template>
  <div class="uploader-container">
    <div class="uploader-header">
      <label class="font-16-r">{{ label }}</label>
      <a class="uploader-sample" :href="url" download>
        Скачать образец
      </a>
    </div>

    <div class="uploader-body">
      <div
        class="uploader"
        :class="{ 'is-dragover': isDragOver }"
        @dragover.prevent="onDragOver"
        @dragleave.prevent="onDragLeave"
        @drop.prevent="onDrop"
      >
        <input
          ref="inputRef"
          type="file"
          class="hidden"
          :accept="props.accept || '.pdf,.doc,.docx,.txt'"
          @change="onFileChange"
        >

        <div class="uploader-content" @click="openFileDialog">
          <template v-if="!preview">
            <VIcon :icon="plusIcon" />
            <p class="font-16-n">
              Загрузить документ
            </p>
          </template>
          <template v-else>
            <VIcon :icon="documentIcon" no-fill />
            <p class="font-16-n uploader-name">
              {{ preview.name }}
            </p>
          </template>
        </div>
      </div>

      <VIcon :icon="document" no-fill />
    </div>

    <Message v-if="errorMessage" severity="error" variant="simple" class="uploader-error">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<style scoped lang="scss">
.uploader {
  border: 2px dashed v-bind(status);
  border-radius: 8px;
  padding: 22px;
  text-align: center;
  transition: 0.3s ease;
  cursor: pointer;
  flex: 1;

  &-header {
    margin: 0 0 14px 0;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  &-body {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &-sample {
    color: var(--primary-600);
    text-decoration: underline;
    white-space: nowrap;
    cursor: pointer;
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  &-name {
    max-width: 40rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }

  &-error {
    margin: 1rem 0 0 0;
  }
}

.uploader-error {
  color: var(--p-red-500);
  font-size: 14px;
  margin-top: 8px;
}

.hidden {
  display: none;
}

.uploader.is-dragover {
  border-color: #007bff;
  background: #f0f8ff;
}
</style>
