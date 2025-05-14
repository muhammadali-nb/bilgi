import type { IEmitsFileUploader, IPropsFileUploader } from '@composables/ui/file-uploader/types';
import { useToastStore } from '@store/toast';

export const useFileUploader = (props: IPropsFileUploader, emit: IEmitsFileUploader) => {
  function getFileNameFromUrl(url: string) {
    return url.substring(url.lastIndexOf('/') + 1);
  }
  const $toast = useToastStore();
  const inputRef = ref<HTMLInputElement | null>(null);
  const isDragOver = ref(false);
  const file = ref<File | null>(null);
  const preview = ref<{ url: string, name: string, type: string } | null>(null);
  const errorMessage = ref('');

  const hasError = computed(() => props.invalid);
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
      $toast.error('Ошибка', errorMessage.value);
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

  return {
    getFileNameFromUrl,
    status,
    openFileDialog,
    onFileChange,
    onDragOver,
    onDragLeave,
    onDrop,
    preview,
    errorMessage,
    inputRef,
    isDragOver,
  };
};
