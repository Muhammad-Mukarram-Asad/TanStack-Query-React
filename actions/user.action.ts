import { ADD_USER } from "@/types/user.types";
// import { ApiSuccessResponse } from "@/types";
import USER_SERVICE from "@/services/user.service";
import { useMutation } from "@tanstack/react-query";

export const useAddUser = () => {
  return useMutation({
    mutationFn: (data: ADD_USER) => USER_SERVICE.addUser(data),
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (user_id: number) => USER_SERVICE.deleteUser(user_id),
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: ({ userId, data }: { userId: number; data: ADD_USER }) =>
      USER_SERVICE.updateUser(userId, data),
  });
};
