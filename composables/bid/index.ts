import type { BidTabData, IBid, IBidResponse } from './types';
import { useApi } from '@composables/use-api';
import { useSelectedFields } from '@composables/ui/selected-fields';
import { useBidFields } from './models';
import { PropertyStatus } from '@composables/main-form/types';
import { useToastStore } from '@store/toast';


export const useBid = () => {
  const bids = ref<IBid[]>();
  const bid = ref<BidTabData>();
  const $route = useRoute();
  const $toast = useToastStore()
  const rejectMessage = ref<string>()
  const isRejectDialogVisible = ref(false);
  const moderateBidStatus = ref<PropertyStatus>(PropertyStatus.Pending);
  const { selectedFields, toggleField, isFieldSelected, clearSelected } = useSelectedFields();

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
      bid.value = useBidFields(bidData.value);
    }
  };

  const { refresh: moderateBidFn, error: moderateBidError } = useApi('/api/moderator', {
    method: 'post',
    body: {
      id: $route.params?.id,
      properties: selectedFields,
      status: moderateBidStatus,
      message: rejectMessage,
    },
  });

  const moderateBid = async (status: PropertyStatus) => {
    if (!selectedFields.value.length) {
      return;
    }

    moderateBidStatus.value = status;
    await moderateBidFn();
    if (!moderateBidError.value) {
      getBid();
      $toast.success('Успешно!', 'Заявка успешно отправлена на клиенту');
      clearSelected();
      isRejectDialogVisible.value = false;
    } else {
      $toast.error('Ошибка!', 'Не удалось отправить заявку на клиента');
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
    selectedFields,
    toggleField,
    isFieldSelected,
    clearSelected,
    moderateBid,
    rejectMessage,
    isRejectDialogVisible,
  };
};
