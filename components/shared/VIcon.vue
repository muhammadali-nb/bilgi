<script setup lang="ts">
const props = defineProps<{
  icon: string
  size?: number
  spanBg?: string
  color?: string
  noFill?: boolean
}>();

const colorVal = computed(() => props.color || 'unset');
const background = computed(() => props.spanBg || 'transparent');
const iconSize = computed(() => props.size ? `${props.size}px` : 'auto');
</script>

<template>
  <span
    :style="{
      'color': colorVal,
      '--size': iconSize,
      background,
    }"
    :class="[noFill && 'no-fill']"
    v-html="props.icon"
  />
</template>

<style scoped lang="scss">
span {
  display: inline-block;
  font-size: 0;
  overflow: hidden;
  text-align: center;
  width: var(--size);
  height: var(--size);
  :deep(svg) {
    width: auto;
    max-width: 100%;
    max-height: 100%;
    transition: var(--transition-fast);
  }
  &:not(.no-fill) {
    :deep(svg) {
      [fill]:not([fill='none']) {
        fill: currentColor;
      }
      [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    }
  }
}
</style>
