<script setup lang="ts">
import LangSwitcher from '@components/LangSwitcher.vue';

const visible = ref(false);
</script>

<template>
  <h1>hello world</h1>
  <LangSwitcher />
  <div class="page">
    <Button icon="pi pi-home" aria-label="Save" @click="visible = true" />
    <Button label="Profile" icon="pi pi-user" />
    <Button label="Save" icon="pi pi-check" icon-pos="right" />
    <Button label="Search" icon="pi pi-search" icon-pos="top" />
    <Button label="Update" icon="pi pi-refresh" icon-pos="bottom" />

    <hr>
    <Button label="Primary" />
    <Button label="Secondary" severity="secondary" />
    <Button label="Success" severity="success" />
    <Button label="Info" severity="info" />
    <Button label="Warn" severity="warn" />
    <Button label="Help" severity="help" />
    <Button label="Danger" severity="danger" />
    <Button label="Contrast" severity="contrast" />
    <hr>
    <Button label="Primary raised" raised />
    <Button label="Secondary raised" severity="secondary" raised />
    <Button label="Success raised" severity="success" raised />
    <Button label="Info raised" severity="info" raised />
    <Button label="Warn raised" severity="warn" raised />
    <Button label="Help raised" severity="help" raised />
    <Button label="Danger raised" severity="danger" raised />
    <Button label="Contrast raised" severity="contrast" raised />
    <hr>
    <Button label="Primary rounded" rounded />
    <Button label="Secondary rounded" severity="secondary" rounded />
    <Button label="Success rounded" severity="success" rounded />
    <Button label="Info rounded" severity="info" rounded />
    <Button label="Warn rounded" severity="warn" rounded />
    <Button label="Help rounded" severity="help" rounded />
    <Button label="Danger rounded" severity="danger" rounded />
    <Button label="Contrast rounded" severity="contrast" rounded />
    <hr>
    <Button label="Primary text" text />
    <Button label="Secondary text" severity="secondary" text />
    <Button label="Success text" severity="success" text />
    <Button label="Info text" severity="info" text />
    <Button label="Warn text" severity="warn" text />
    <Button label="Help text" severity="help" text />
    <Button label="Danger text" severity="danger" text />
    <Button label="Contrast text" severity="contrast" text />
    <hr>
    <Button label="Primary" text raised />
    <Button label="Secondary" severity="secondary" text raised />
    <Button label="Success" severity="success" text raised />
    <Button label="Info" severity="info" text raised />
    <Button label="Warn" severity="warn" text raised />
    <Button label="Help" severity="help" text raised />
    <Button label="Danger" severity="danger" text raised />
    <Button label="Contrast" severity="contrast" text raised />
    <hr>
    <Button label="Primary" outlined />
    <Button label="Secondary" severity="secondary" outlined />
    <Button label="Success" severity="success" outlined />
    <Button label="Info" severity="info" outlined />
    <Button label="Warn" severity="warn" outlined />
    <Button label="Help" severity="help" outlined />
    <Button label="Danger" severity="danger" outlined />
    <Button label="Contrast" severity="contrast" outlined />
    <hr>
    <Button icon="pi pi-check" aria-label="Filter" />
    <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
    <Button icon="pi pi-search" severity="success" aria-label="Search" />
    <Button icon="pi pi-user" severity="info" aria-label="User" />
    <Button icon="pi pi-bell" severity="warn" aria-label="Notification" />
    <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
    <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
    <Button icon="pi pi-star" severity="contrast" aria-label="Star" />
    <hr>
    <Button icon="pi pi-check" rounded aria-label="Filter" />
    <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
    <Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
    <Button icon="pi pi-user" severity="info" rounded aria-label="User" />
    <Button icon="pi pi-bell" severity="warn" rounded aria-label="Notification" />
    <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
    <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
    <Button icon="pi pi-star" severity="contrast" rounded aria-label="Star" />
    <hr>
    <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
    <Button icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
    <Button icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
    <Button icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
    <Button icon="pi pi-bell" severity="warn" rounded outlined aria-label="Notification" />
    <Button icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
    <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />
    <Button icon="pi pi-star" severity="contrast" rounded outlined aria-label="Star" />
    <hr>
    <Button icon="pi pi-check" text raised rounded aria-label="Filter" />
    <Button icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
    <Button icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
    <Button icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
    <Button icon="pi pi-bell" severity="warn" text raised rounded aria-label="Notification" />
    <Button icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
    <Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />
    <Button icon="pi pi-star" severity="contrast" text raised rounded aria-label="Star" />
    <hr>
    <Button icon="pi pi-check" text rounded aria-label="Filter" />
    <Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
    <Button icon="pi pi-search" severity="success" text rounded aria-label="Search" />
    <Button icon="pi pi-user" severity="info" text rounded aria-label="User" />
    <Button icon="pi pi-bell" severity="warn" text rounded aria-label="Notification" />
    <Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
    <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />
    <Button icon="pi pi-star" severity="contrast" text rounded aria-label="Star" />

    <Dialog v-model:visible="visible" header="Header" :modal="true" style="width: 400px;">
      <h1>hello world</h1>
    </Dialog>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  hr {
    width: 100%;
  }
}
</style>
