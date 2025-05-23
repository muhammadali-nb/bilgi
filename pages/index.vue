<script setup lang="ts">
import Stepper from '@components/shared/stepper.vue';
import FirstStep from '@components/steps/first-step.vue';
import FourthStep from '@components/steps/fourth-step.vue';
import SecondStep from '@components/steps/second-step.vue';
import Status from '@components/steps/status.vue';
import ThirdStep from '@components/steps/third-step.vue';

import { getApplicationStatusHeader, stepTitles } from '@composables/main-form/data';
import { useStepper } from '@composables/ui/stepper';
import { useAppMainForm } from '@store/main-form';

const appMainForm = useAppMainForm();
const { activeStep, next, steps, prev, isFinished, stepGuard } = useStepper();

const applicationInit = async () => {
  appMainForm.generateFieldToStepMap();
  await appMainForm.getApplication();
  await stepGuard();
};

const submitStep = async () => {
  const isCorrect = await appMainForm.submitApplication();
  if (isCorrect) {
    await next();
  }
};

const currentTitle = computed(() => {
  if (isFinished.value) return getApplicationStatusHeader(1);
  return stepTitles[activeStep.value] ?? `Шаг ${activeStep.value}`;
});

await applicationInit();
</script>

<template>
  <div class="home">
    <div class="container-xs home__content">
      <h3 class="font-24-sb home__title">
        {{ currentTitle }}
      </h3>

      <template v-if="!isFinished">
        <Stepper v-model:active-step="activeStep" :steps="steps" class="home__steps" />
        <FirstStep v-if="activeStep === 1" @submit="submitStep" />
        <SecondStep v-if="activeStep === 2" @prev="prev" @submit="submitStep" />
        <ThirdStep v-if="activeStep === 3" @prev="prev" @submit="submitStep" />
        <FourthStep v-if="activeStep === 4" @prev="prev" @submit="submitStep" />
      </template>

      <Status v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__content {
    padding: 3rem 0 8.5rem 0;
  }

  &__steps {
    margin: 0 0 3.2rem 0;
  }

  &__title {
    margin-bottom: 3.2rem;
  }
}
</style>
