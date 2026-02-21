import useAuth from "@/hooks/hook.auth";
import USER_SERVICE from "@/services/user.service";
import { ApiSuccessResponse, SignInData, SignInPayload } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useSignInAction = () => {
    const { afterSignIn } = useAuth();
    return useMutation({
        mutationFn: async (data: SignInPayload) => USER_SERVICE.signIn(data),
        onSuccess: async (response: ApiSuccessResponse<SignInData>) => {
            await afterSignIn(response);
        },
    });
};
