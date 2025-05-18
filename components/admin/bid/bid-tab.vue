<script setup lang="ts">
import type { BidTabData } from '@composables/bid/types';
import FileReader from '@components/shared/file-reader.vue';
import FieldStatus from '../field-status.vue';
import { getBidGroups } from '@composables/bid/models';

const props = defineProps<{
    tabKey: keyof BidTabData;
    fields: Record<string, any>;
}>();

const groups = getBidGroups(props.tabKey);
</script>

<template>
    <div class="bid-detail__content">
        <div v-for="(group, groupKey) in groups" :key="groupKey" class="bid-detail__content-column">
            <h3 class="font-20-sb">
                {{ group.title }}
            </h3>
            <FieldStatus v-for="field in group.fields" :key="field" status="success" :label="field">
                <template v-if="fields[field]?.includes('http')">
                    <FileReader :url="fields[field]" />
                </template>
                <template v-else>
                    <p class="font-14-b">
                        {{ fields[field] }}
                    </p>
                </template>
            </FieldStatus>
        </div>
    </div>
</template>

<style scoped lang="scss">
.bid-detail__content {
    margin-top: 2.8rem;
    box-shadow: var(--box-shadow-card);
    padding: 1.4rem 2rem 2.8rem 2rem;
    border-radius: var(--radius-l);

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 8rem;

    &-column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>