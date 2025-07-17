import { toast } from "sonner";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { LOGIN } from "@/lib/endpoints";
import { SERVER_ERROR } from "@/lib/constants";
import type { ILogin, ILoginRes } from "@/types/auth.type";

export const useSignIn = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: ILogin) => api.post(LOGIN, data),
    onSuccess: (response: AxiosResponse<ILoginRes>) => {
      toast.success("Login Successful");

      setCookie("access_token", response.data.data.access_token);
      setCookie("refresh_token", response.data.data.refresh_token);
      setCookie("username", response.data.data.role_type);

      router.push("/dashboard");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        return toast.error(error.response?.data.message || SERVER_ERROR);
      }

      toast.error(error.message);
    },
  });
};
