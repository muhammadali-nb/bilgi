<script lang="ts" setup>

</script>

<template>
  <div class="digital-signature">
    <div class="digital-signature__item">
      <label class="font-14-r">
        Ф.И.О
      </label>
      <p class="font-16-r">
        Викторов Виктор Викторович
      </p>
    </div>
    <div class="digital-signature__item">
      <label class="font-14-r">
        Юр лицо
      </label>
      <p class="font-16-r">
        "CodeMaster Академия"
      </p>
    </div>
    <div class="digital-signature__item">
      <label class="font-14-r">
        Серийный номер
      </label>
      <p class="font-16-r">
        21342354235
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .digital-signature {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1.4rem;
    background-color: var(--card-bg);
    border-radius: 1rem;
    cursor: pointer;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        color: var(--site-secondary-text);
      }

    }
  }
</style>
