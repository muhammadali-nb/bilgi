export const useStepper = () => {
  const $router = useRouter();

  const steps = ['Шаг №1', 'Шаг №2', 'Шаг №3', 'Шаг №4', 'Шаг №5'];
  const activeStep = ref(1);

  const next = () => {
    if (activeStep.value === undefined) return;
    if (activeStep.value < steps.length) {
      activeStep.value++;
      console.log(activeStep.value);
      $router.push({ name: $router.currentRoute.value.name, query: { step: activeStep.value } });
    }

    window.scrollTo(0, 0);
  };

  const prev = () => {
    if (activeStep.value === undefined) return;
    if (activeStep.value > 1) activeStep.value--;
    $router.push({ name: $router.currentRoute.value.name, query: { step: activeStep.value } });
    window.scrollTo(0, 0);
  };

  const checkRouteStep = () => {
    if ($router.currentRoute.value.query.step && !Number.isNaN(+$router.currentRoute.value.query.step)) {
      activeStep.value = +$router.currentRoute.value.query.step;
    }
  };

  return {
    steps,
    activeStep,
    next,
    prev,
    checkRouteStep,

  };
};
