<script setup lang="ts">
import Stepper from '@components/shared/stepper.vue';
import FifthStep from '@components/steps/fifth-step.vue';
import FirstStep from '@components/steps/first-step.vue';
import FourthStep from '@components/steps/fourth-step.vue';
import SecondStep from '@components/steps/second-step.vue';
import ThirdStep from '@components/steps/third-step.vue';
import { useAppMainForm } from '@store/main-form';

const appMainForm = useAppMainForm();

const formInit = async () => {
  appMainForm.checkRouteStep();
  await appMainForm.getApplication();
};

const submitStep = async () => {
  const isCorrect = await appMainForm.submitApplication();

  if (isCorrect) {
    appMainForm.next();
  }
};

await formInit();
</script>

<template>
  <div class="home">
    <div class="container-xs">
      <div class="home__content">
        <h3 class="font-24-sb home__title">
          Заполнение заявки
        </h3>
        <Stepper v-model:active-step="appMainForm.activeStep" :steps="appMainForm.steps" class="home__steps" />
        <FirstStep v-if="appMainForm.activeStep === 1" @submit="submitStep" />
        <SecondStep v-if="appMainForm.activeStep === 2" @prev="appMainForm.prev" @submit="submitStep" />
        <ThirdStep v-if="appMainForm.activeStep === 3" @prev="appMainForm.prev" @submit="submitStep" />
        <FourthStep v-if="appMainForm.activeStep === 4" @prev="appMainForm.prev" @submit="submitStep" />
        <FifthStep v-if="appMainForm.activeStep === 5" @prev="appMainForm.prev" @submit="appMainForm.next" />
      </div>
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
