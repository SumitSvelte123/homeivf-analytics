"use client";

import { api } from "@/lib/api-client";
import { ILogin, ILoginRes } from "@/types/auth.type";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { setCookie } from "cookies-next";
import { toast } from "sonner";
import { SERVER_ERROR } from "@/lib/constants";

export const useSignIn = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: ILogin) => api.post("/login", data),
    onSuccess: (response: AxiosResponse<ILoginRes>) => {
      toast.success("Login Successful");

      setCookie("access_token", response.data.data.accessToken);
      setCookie("refresh_token", response.data.data.refreshToken);
      setCookie("username", response.data.data.user.fullName);

      router.push("/dashboard");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        return toast.success(error.response?.data.message || SERVER_ERROR);
      }

      toast.success(error.message);
    },
  });
};
