<script setup lang="ts">
import { document, documentIcon, plusIcon } from '@assets/icons';
import VIcon from './VIcon.vue';

const props = defineProps<{
  accept?: string
  label: string
  url?: string
}>();

const emit = defineEmits<{
  (e: 'update', files: File): void
}>();

function getFileNameFromUrl(url: string) {
  return url.substring(url.lastIndexOf('/') + 1);
}

const inputRef = ref<HTMLInputElement | null>(null);
const isDragOver = ref(false);
const file = ref<File | null>(null);
const preview = ref<{ url: string, name: string, type: string } | null>(null);

function openFileDialog() {
  inputRef.value?.click();
}

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    processIncomingFile(target.files[0]);
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
  if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
    processIncomingFile(e.dataTransfer.files[0]);
  }
}

function processIncomingFile(selectedFile: File) {
  file.value = selectedFile;
  emit('update', selectedFile);

  updatePreview();
}

onMounted(() => {
  if (props.url) {
    preview.value = {
      url: props.url,
      name: getFileNameFromUrl(props.url),
      type: '',
    };
  }

  console.log(getFileNameFromUrl(props.url));
});

function updatePreview() {
  if (preview.value?.url) {
    URL.revokeObjectURL(preview.value.url);
  }
  if (file.value) {
    preview.value = {
      url: URL.createObjectURL(file.value),
      name: file.value.name,
      type: file.value.type,
    };
  }
}

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
          :accept="props.accept"
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
            <p class="font-16-n">
              {{ preview.name }}
            </p>
          </template>
        </div>
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
}

.hidden {
  display: none;
}

.uploader.is-dragover {
  border-color: #007bff;
  background: #f0f8ff;
}
</style>
