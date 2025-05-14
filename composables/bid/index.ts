import type { IBid, IBidResponse } from '@composables/bid/types';
import { useApi } from '@composables/use-api';

export const useBid = () => {
  const bids = ref<IBid[]>();

  const {
    refresh: getBidsFn, status,
    error, data,
  } = useApi<IBidResponse>('/api/moderator/applications');

  const getBids = async () => {
    if (status.value === 'success') return;
    await getBidsFn();
    if (!error.value && data.value) {
      bids.value = data.value;
      console.log(data.value);
    }
  };

  return {
    getBids,
  };
};
