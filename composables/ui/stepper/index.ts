export const useStepper = () => {
  const steps = ['Шаг №1', 'Шаг №2', 'Шаг №3', 'Шаг №4', 'Шаг №5'];
  const activeStep = ref(0);

  const next = () => {
    if (activeStep.value === undefined) return;
    if (activeStep.value < steps.length - 1) activeStep.value++;

    window.scrollTo(0, 0);
  };

  const prev = () => {
    if (activeStep.value === undefined) return;
    if (activeStep.value > 0) activeStep.value--;
    window.scrollTo(0, 0);
  };

  return {
    steps,
    activeStep,
    next,
    prev,
  };
};
