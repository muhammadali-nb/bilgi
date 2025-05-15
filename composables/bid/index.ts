import type { IBid, IBidResponse } from '@composables/bid/types';
import { useApi } from '@composables/use-api';
import { useAppMainForm } from '@store/main-form';

export const useBid = () => {
  const bids = ref<IBid[]>();
  const bid = ref<IBid>();
  const $route = useRoute();
  const appMainForm = useAppMainForm();

  const {
    refresh: getBidsFn, status,
    error, data: bidsData,
  } = useApi<IBidResponse>('/api/moderator/applications');

  const {
    refresh: getBidFn, status: statusBid,
    error: errorBid, data: bidData,
  } = useApi<IBid>(`/api/moderator/applications/${$route.params?.id}`);

  const getBids = async () => {
    if (statusBid.value === 'success') return;
    await getBidsFn();
    if (!errorBid.value && bidsData.value) {
      bids.value = bidsData.value;
    }
  };

  const getBid = async () => {
    if (status.value === 'success') return;
    await getBidFn();
    if (!error.value && bidData.value) {
      bid.value = bidData.value;
    }
  };

  const bidGroupedBySteps = computed(() => {
    const properties = bid.value?.properties ?? {};

    const grouped: Record<number, Array<{ name: string, value: any }>> = {};

    for (const [key, value] of Object.entries(properties)) {
      const step = appMainForm.fieldToStepMap[key] ?? 0;
      if (!grouped[step]) {
        grouped[step] = [];
      }
      grouped[step].push({ name: key, value });
    }

    return Object.entries(grouped)
      .map(([step, fields]) => ({
        step: Number(step),
        fields,
      }))
      .sort((a, b) => a.step - b.step);
  });

  return {
    getBids,
    bidData, getBid, bidsData,
    bidGroupedBySteps,
  };
};
