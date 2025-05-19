import { computed, ref } from 'vue';

export const useSelectedFields = () => {
  const selectedFields = ref<string[]>([]);

  const addField = (fieldId: string) => {
    if (!selectedFields.value.includes(fieldId)) {
      selectedFields.value.push(fieldId);
    }
  };

  const removeField = (fieldId: string) => {
    selectedFields.value = selectedFields.value.filter(id => id !== fieldId);
  };

  const toggleField = (fieldId: string) => {
    if (selectedFields.value.includes(fieldId)) {
      removeField(fieldId);
    }
    else {
      addField(fieldId);
    }
  };

  const isFieldSelected = (fieldId: string) => {
    return selectedFields.value.includes(fieldId);
  };

  const clearSelected = () => {
    selectedFields.value = [];
  };

  return {
    selectedFields: computed(() => selectedFields.value),
    addField,
    removeField,
    toggleField,
    isFieldSelected,
    clearSelected,
  };
};
