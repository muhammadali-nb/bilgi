<script setup lang="ts">
const props = defineProps<{
  multiple?: boolean
  accept?: string
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
      <slot>
        <p>📁 Drag & drop files here or click to upload</p>
      </slot>
    </div>

    <ul v-if="previews.length" class="preview-list">
      <li v-for="(preview, idx) in previews" :key="idx" class="preview-item">
        <img v-if="preview.type.startsWith('image/')" :src="preview.url" class="preview-img">
        <span>{{ preview.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.uploader {
  border: 2px dashed #BCBCBC;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: 0.3s ease;
  cursor: pointer;
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
