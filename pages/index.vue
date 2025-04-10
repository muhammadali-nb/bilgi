<script setup lang="ts">
import Stepper from '@components/shared/stepper.vue';
import FifthStep from '@components/steps/fifth-step.vue';
import FirstStep from '@components/steps/first-step.vue';
import FourthStep from '@components/steps/fourth-step.vue';
import SecondStep from '@components/steps/second-step.vue';
import ThirdStep from '@components/steps/third-step.vue';

const steps = ['Шаг №1', 'Шаг №2', 'Шаг №3', 'Шаг №4', 'Шаг №5'];
const activeStep = ref(0);
</script>

<template>
  <div class="home">
    <div class="container-xs">
      <div class="home__content">
        <h3 class="font-24-sb home__title">
          Заполнение заявки
        </h3>
        <Stepper v-model:active-step="activeStep" :steps="steps" class="home__steps" />
        <FirstStep v-if="activeStep === 0" />
        <SecondStep v-if="activeStep === 1" />
        <ThirdStep v-if="activeStep === 2" />
        <FourthStep v-if="activeStep === 3" />
        <FifthStep v-if="activeStep === 4" />
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
