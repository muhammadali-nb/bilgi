<script setup lang="ts">
import { document, documentIcon, plusIcon } from '@assets/icons';
import VIcon from './VIcon.vue';

const props = defineProps<{
  multiple?: boolean
  accept?: string
  label: string
}>();

const emit = defineEmits<{
  (e: 'files', files: File[]): void
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const isDragOver = ref(false);
const files = ref<File[]>([]);
const previews = ref<{ url: string, name: string, type: string }[]>([]);

function openFileDialog() {
  inputRef.value?.click();
}

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files) {
    handleFiles(Array.from(target.files));
  }
}

function onDragOver() {
  isDragOver.value = true;
}

function onDragLeave() {
  isDragOver.value = false;
}

function onDrop(e: DragEvent) {
  isDragOver.value = false;
  if (e.dataTransfer?.files) {
    handleFiles(Array.from(e.dataTransfer.files));
  }
}

function handleFiles(selectedFiles: File[]) {
  if (!props.multiple) {
    files.value = selectedFiles.slice(0, 1);
  }
  else {
    files.value = [...files.value, ...selectedFiles];
  }
  emit('files', files.value);
  updatePreviews();
}

function updatePreviews() {
  previews.value.forEach(p => URL.revokeObjectURL(p.url));
  previews.value = files.value.map(f => ({
    url: URL.createObjectURL(f),
    name: f.name,
    type: f.type,
  }));
}

onBeforeUnmount(() => {
  previews.value.forEach(p => URL.revokeObjectURL(p.url));
});
</script>

<template>
  <div class="uploader-container">
    <div class="uploader-header">
      <label class="font-16-r">{{ label }}</label>

      <!-- Сделать как кнопку -->
      <p class="uploader-sample">
        Скачать образец
      </p>
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
          :multiple="multiple"
          :accept="accept"
          @change="onFileChange"
        >
        <div class="uploader-content" @click="openFileDialog">
          <template v-if="!previews[0]">
            <VIcon :icon="plusIcon" />
            <p class="font-16-n">
              Загрузить документ
            </p>
          </template>
          <template v-else>
            <VIcon :icon="documentIcon" no-fill />
            <p class="font-16-n">
              {{ previews[0]?.name }}
            </p>
          </template>
        </div>
        <!-- <ul v-if="previews.length" class="preview-list">
      <li v-for="(preview, idx) in previews" :key="idx" class="preview-item">
        <img v-if="preview.type.startsWith('image/')" :src="preview.url" class="preview-img">
        <span>{{ preview.name }}</span>
      </li>
    </ul> -->
      </div>
      <VIcon :icon="document" no-fill />
    </div>
  </div>
</template>

<style scoped lang="scss">
.uploader {
  border: 2px dashed #BCBCBC;
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
  }

  &-sample {
    color: var(--primary-600);
    text-decoration: underline;
    text-wrap: nowrap;
    cursor: pointer;
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  // &-preview {
  //   margin: 6px 0 0 0;
  // }
}

.hidden {
  display: none;
}

.uploader.is-dragover {
  border-color: #007bff;
  background: #f0f8ff;
}
.preview-list {
  margin-top: 15px;
  list-style: none;
  padding: 0;
}
.preview-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
.preview-img {
  max-width: 50px;
  max-height: 50px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
