import type { BidTabData, IBid, IBidResponse } from './types';
import { useApi } from '@composables/use-api';
import { useBidFields } from './models';

export const useBid = () => {
  const bids = ref<IBid[]>();
  const bid = ref<BidTabData>();
  const $route = useRoute();

  const {
    refresh: getBidsFn,
    error: bidsError,
    data: bidsData,
  } = useApi<IBidResponse>('/api/moderator/applications');

  const {
    refresh: getBidFn,
    error: bidError,
    status: bidStatus,
    data: bidData,
  } = useApi<IBid>(`/api/moderator/applications/${$route.params?.id}`);

  const getBids = async () => {
    await getBidsFn();
    if (!bidsError.value && bidsData.value) {
      bids.value = bidsData.value;
    }
  };

  const getBid = async () => {
    await getBidFn();
    if (!bidError.value && bidData.value) {
      bid.value = useBidFields(bidData.value.properties);
    }
  };

  return {
    bids,
    bid,
    getBids,
    getBid,
    bidStatus,
    loading: bidStatus,
    error: bidError,
  };
};
