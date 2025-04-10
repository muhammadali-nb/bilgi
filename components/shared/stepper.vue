<script lang="ts" setup>
import { nextIcon } from '../../assets/icons';
import VIcon from './VIcon.vue';

const props = defineProps<{
  steps: string[]
}>();

const activeStep = defineModel<number>('activeStep');

// const next = () => {
//   if (activeStep.value === undefined) return;
//   if (activeStep.value < props.steps.length - 1) activeStep.value++;
// };

// const prev = () => {
//   if (activeStep.value === undefined) return;
//   if (activeStep.value > 0) activeStep.value--;
// };
</script>

<template>
  <div class="stepper">
    <div class="stepper__list">
      <template v-for="(step, index) in steps" :key="index">
        <div
          class="stepper__item"
          :class="{
            active: index === activeStep,
            completed: index < (activeStep ?? 0),
            upcoming: index > (activeStep ?? 0),
          }"
        >
          <div class="circle">
            {{ index + 1 }}
          </div>
          <div class="label">
            {{ step }}
          </div>
        </div>

        <VIcon v-if="index < steps.length - 1" :icon="nextIcon" no-fill />
      </template>
    </div>

    <!-- <div class="stepper__buttons">
      <button :disabled="activeStep === 0" @click="prev">
        Назад
      </button>
      <button :disabled="activeStep === steps.length - 1" @click="next">
        Далее
      </button>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.stepper {

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--dark-text);

    .circle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      font-size: 12px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--site-secondary-text);
      color: var(--site-text);
    }

    .label {
      font-size: 14px;
      font-weight: 500;
    }

    &.active .circle {
      background-color: var(--primary-500);
      color: var(--white-text);
    }

    &.completed .circle {
      background-color: var(--primary-100);
      color:  var(--dark-text)
    }

    &.completed .label {
      color: #111;
    }

    &.upcoming .circle {
      background-color: var(--primary-50);
      color:  var(--dark-text);
    }

    &.upcoming .label {
      color: var(--site-secondary-text);
      opacity: 0.5;
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem;

    button {
      padding: 0.5rem 1rem;
      background-color: var(--primary-500);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:disabled {
        background-color: #aaa;
        cursor: not-allowed;
      }
    }
  }
}
</style>
