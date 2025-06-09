import { ApplicationStatus } from '@composables/main-form/types';
import { useAppMainForm } from '@store/main-form';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useStepper = () => {
  const $router = useRouter();
  const $route = useRoute();
  const appMainForm = useAppMainForm();
  const { $i18n } = useNuxtApp();

  const steps = [`${$i18n.t('step')} №1`, `${$i18n.t('step')} №2`, `${$i18n.t('step')} №3`, `${$i18n.t('step')} №4`];
  const totalSteps = steps.length;

  const guardLoading = ref(false);

  const isFinished = computed(() => $route.query.step === 'done');

  const activeStep = computed<number>(() => {
    const step = Number($route.query.step);
    return Number.isNaN(step) ? 1 : step;
  });

  const next = async () => {
    if (activeStep.value < totalSteps) {
      await $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: activeStep.value + 1 },
      });
    }
    else {
      // if (appMainForm.applicationStatus === ApplicationStatus.New || appMainForm.applicationStatus === ApplicationStatus.Correction) {
      await $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: 'done' },
      });
      // }
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

    const stepParam = $route.query.step;
    const routeStep = Number(stepParam);
    const isValidStep = !Number.isNaN(routeStep) && routeStep >= 1 && routeStep <= totalSteps;

    const status = appMainForm.applicationStatus;

    const firstInvalidStep = await appMainForm.getFirstInvalidStep();

    // Если статус Correction и в адресной строке step невалидный или стоит 'done',
    // то разрешаем переход только на 'done' — остальные шаги только по кнопке
    if (status === ApplicationStatus.Correction && (!isValidStep || stepParam === 'done')) {
      await $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: 'done' },
      });

      guardLoading.value = false;
      return;
    }

    // Если статус НЕ New, то переход возможен только на done
    if (status !== ApplicationStatus.New) {
      await $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: 'done' },
      });
      guardLoading.value = false;
      return;
    }

    // Если шаг в url невалидный или превышает первый невалидный шаг — возвращаем на первый невалидный
    if (!isValidStep || (firstInvalidStep !== null && routeStep > firstInvalidStep)) {
      await $router.push({
        name: $route.name as string,
        query: { ...$route.query, step: firstInvalidStep ?? 1 },
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
