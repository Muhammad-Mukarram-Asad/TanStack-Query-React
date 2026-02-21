import { ADD_STORE } from "@/types/store.types";
// import { ApiSuccessResponse } from "@/types";
import STORE_SERVICE from "@/services/store.service";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/wrapper/provider-component";
import { QUERY_KEYS } from "@/constants";

export const useAddStore = () => {
  return useMutation({
    mutationFn: (data: ADD_STORE) => STORE_SERVICE.addNewStore(data),
    onSuccess: () => {
      // Invalidate the 'stores' query key
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.STORE.ALL });
    },
  });
};

export const useUpdateStore = () => {
  return useMutation({
    mutationFn: ({ storeId, data }: { storeId: number; data: ADD_STORE }) =>
      STORE_SERVICE.updateStore(storeId, data),

    onSuccess: () => {
      // Invalidate the 'stores' query key
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.STORE.ALL }); // For fetching latest data
    },
  });
};

export const useDeleteStore = () => {
  return useMutation({
    mutationFn: (storeId: number) => STORE_SERVICE.deleteStore(storeId),
    onSuccess: () => {
      // Invalidate the 'stores' query key
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.STORE.ALL }); // For fetching latest data
    },
  });
};
