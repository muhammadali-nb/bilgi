import { useMainForm } from '@composables/main-form';

export const useAppMainForm = defineStore('main-form', () => {
  const { $v, formObj } = useMainForm();

  const handleSubmit = () => {
    console.log(formObj);
  };

  return { $v, formObj, handleSubmit };
});
