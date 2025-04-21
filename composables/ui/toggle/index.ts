export const useToggle = () => {
  const isActive = ref<boolean>(false);

  const toggle = () => {
    isActive.value = !isActive.value;
  };

  const active = () => {
    isActive.value = true;
  };

  const inactive = () => {
    isActive.value = false;
  };

  return {
    isActive,
    toggle,
    active,
    inactive,
  };
};
