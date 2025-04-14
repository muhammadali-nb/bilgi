<script lang="ts" setup>
import { document, plusIcon } from '@assets/icons';
import { ref } from 'vue';
import VIcon from './VIcon.vue';

const src = ref<string | null>(null);

function onFileSelect(event: { files: File[] }) {
  const file = event.files[0];

  console.log(file);

  if (!file) return;

  const reader = new FileReader();

  reader.onload = async (e: ProgressEvent<FileReader>) => {
    if (e.target?.result) {
      src.value = e.target.result as string;
    }
  };

  reader.readAsDataURL(file);
}
</script>

<template>
  <div class="test">
    <FileUpload mode="basic" class="test-file" choose-label="Загрузить документ" auto :custom-upload="true" @select="onFileSelect">
      <template #chooseicon>
        <VIcon :icon="plusIcon" />
      </template>
      <template #content>
        <div class="test-file__content">
          <VIcon :icon="plusIcon" />
          <p>Загрузить документ</p>
        </div>
      </template> />
    </FileUpload>
    <VIcon :icon="document" no-fill />
  </div>
</template>

<style lang="scss" scoped>
.test {

  display: flex;
  align-items: center;

  :deep(.p-fileupload) {
    flex: 1;
  }

  :deep(.p-button) {

    min-width: 100%;
    flex: 1;
    border-radius: 8px;
    --p-button-padding-y: 3rem ;
    --p-button-padding-x: 3rem ;
    background-color: transparent;
    border: 2px dashed #BCBCBC;
    color: #111;
  }

}
</style>
