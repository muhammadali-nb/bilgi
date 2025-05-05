<script setup lang="ts">
import { document, documentIcon, plusIcon } from '@assets/icons';
import VIcon from './VIcon.vue';

const props = defineProps<{
  accept?: string
  label: string
  url?: string
  invalid?: boolean
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
const errorMessage = ref('');

const hasError = computed(() => props.invalid || !!errorMessage.value);
const status = computed(() => hasError.value ? 'var(--p-red-500)' : 'var(--border-color)');

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

function isAllowedFileType(file: File): boolean {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
  ];
  const allowedExtensions = ['.pdf', '.doc', '.docx', '.txt'];

  const extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();

  return allowedTypes.includes(file.type) || allowedExtensions.includes(extension);
}

function processIncomingFile(selectedFile: File) {
  if (!isAllowedFileType(selectedFile)) {
    errorMessage.value = 'Можно загружать только PDF, Word или текстовые файлы.';
    return;
  }

  errorMessage.value = '';
  file.value = selectedFile;
  emit('update', selectedFile);
  updatePreview();
}

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
            <p class="font-16-n">
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
