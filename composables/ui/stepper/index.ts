import { useAppMainForm } from '@store/main-form';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useStepper = () => {
  const $router = useRouter();
  const $route = useRoute();
  const appMainForm = useAppMainForm();

  const steps = ['Шаг №1', 'Шаг №2', 'Шаг №3', 'Шаг №4'];
  const totalSteps = steps.length;
  const guardLoading = ref(false);
  const isLockedOnDone = ref(false);

  const isFinished = computed(() => $route.query.step === 'done');

  const activeStep = computed<number>(() => {
    if (isLockedOnDone.value) return totalSteps + 1;
    const step = Number($route.query.step);
    return Number.isNaN(step) ? 1 : Math.min(step, totalSteps);
  });

  const next = async () => {
    if (isLockedOnDone.value) return;

    if (activeStep.value < totalSteps) {
      await $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: activeStep.value + 1 },
      });
    }
    else {
      const [invalidStep, rejectedStep] = await Promise.all([
        appMainForm.getFirstInvalidStep(),
        appMainForm.getStepByRejectedField(),
      ]);

      if (!invalidStep && !rejectedStep) {
        isLockedOnDone.value = true;
        console.log(isLockedOnDone.value);
        await $router.push({
          name: $route.name as string,
          query: { ...$route.query, step: 'done' },
        });
      }
    }

    window.scrollTo(0, 0);
  };

  const prev = () => {
    if (activeStep.value > 1 && !isLockedOnDone.value) {
      $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: activeStep.value - 1 },
      });
    }
    window.scrollTo(0, 0);
  };

  const stepGuard = async () => {
    guardLoading.value = true;

    const routeStep = $route.query.step;
    const isDoneStep = routeStep === 'done';

    // Если мы на done и isLockedOnDone не установлен, редиректим на первый невалидный шаг
    if (isDoneStep && !isLockedOnDone.value) {
      const [firstInvalidStep, rejectedStep] = await Promise.all([
        appMainForm.getFirstInvalidStep(),
        appMainForm.getStepByRejectedField(),
      ]);
      const targetStep = rejectedStep ?? firstInvalidStep ?? 1;

      await $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: targetStep },
      });

      guardLoading.value = false;
      return;
    }

    // Если isLockedOnDone установлен, не разрешаем переход на шаги
    if (isLockedOnDone.value) {
      await $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: 'done' },
      });

      guardLoading.value = false;
      return;
    }

    // Логика для переходов по шагам
    const [firstInvalidStep, rejectedStep] = await Promise.all([
      appMainForm.getFirstInvalidStep(),
      appMainForm.getStepByRejectedField(),
    ]);
    const hasErrors = firstInvalidStep !== null || rejectedStep !== null;

    const currentStep = Number(routeStep);
    const isValidStep = !Number.isNaN(currentStep) && currentStep >= 1 && currentStep <= totalSteps;
    const targetStep = rejectedStep ?? firstInvalidStep;

    if (!isValidStep || (targetStep !== null && currentStep > targetStep)) {
      await $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: targetStep ?? 1 },
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
    isLockedOnDone,
  };
};
