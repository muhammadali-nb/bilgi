import { useAppMainForm } from '@store/main-form';
import useVuelidate from '@vuelidate/core';

export const useStepper = () => {
  const $router = useRouter();
  const $route = useRoute();
  const isFinished = computed(() => $route.query.step === 'done');
  const steps = ['Шаг №1', 'Шаг №2', 'Шаг №3', 'Шаг №4'];
  const guardLoading = ref(false);
  const appMainForm = useAppMainForm();
  const activeStep = computed<number>(() => {
    const step = Number($route.query.step);
    return Number.isNaN(step) ? 1 : step;
  });

  const next = () => {
    if (activeStep.value < steps.length) {
      $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: activeStep.value + 1 },
      });
    }
    else {
      $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: 'done' },
      });
    }
    window.scrollTo(0, 0);
  };

  const prev = () => {
    if (activeStep.value > 1) {
      $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: activeStep.value - 1 },
      });
    }
    window.scrollTo(0, 0);
  };

  const stepGuard = async () => {
    guardLoading.value = true;

    const totalSteps = 4;
    const routeStepParam = $route.query.step;
    const isDoneStep = routeStepParam === 'done';
    const currentStep = isDoneStep ? 'done' : Number(routeStepParam);
    const isValidStepNumber = typeof currentStep === 'number' && currentStep >= 1 && currentStep <= totalSteps;

    // Проверяем каждый шаг на валидность
    let firstInvalidStep: number | null = null;
    for (let i = 0; i < totalSteps; i++) {
      const validation = useVuelidate(appMainForm.rules[i], appMainForm.formObj);
      await validation.value.$validate();

      if (validation.value.$error) {
        firstInvalidStep = i + 1;
        break;
      }
    }

    //  Нельзя на done если не все шаги валидны
    if (isDoneStep && firstInvalidStep !== null) {
      $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: firstInvalidStep },
      });
      guardLoading.value = false;
      return;
    }

    //  Нельзя попасть на невалидный
    if (!isDoneStep && !isValidStepNumber) {
      const fallback = firstInvalidStep ?? 1;
      $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: fallback },
      });
      guardLoading.value = false;
      return;
    }

    // Нельзя перескакивать вперёд, если что-то невалидно
    if (
      typeof currentStep === 'number'
      && firstInvalidStep !== null
      && currentStep > firstInvalidStep
    ) {
      $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: firstInvalidStep },
      });
    }

    guardLoading.value = false;
  };

  return {
    steps,
    activeStep,
    next,
    prev,
    isFinished,
    stepGuard,
    guardLoading,
  };
};
