import axios, { AxiosResponse } from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { redirect } from "next/navigation";

function clearCookies() {
  deleteCookie("access_token");
  deleteCookie("refresh_token");
  deleteCookie("username");

  redirect("/");
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = getCookie("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        clearCookies();
      } else if (error.response.status === 403) {
        clearCookies();
      }
    }
    return Promise.reject(error);
  }
);

export const api = {
  get: (
    url: string,
    params?: Record<string, unknown>
  ): Promise<AxiosResponse> => {
    return axiosInstance.get(url, { params });
  },

  post: (url: string, body?: unknown): Promise<AxiosResponse> => {
    return axiosInstance.post(url, body);
  },

  put: (url: string, body?: unknown): Promise<AxiosResponse> => {
    return axiosInstance.put(url, body);
  },

  patch: (url: string, body?: unknown): Promise<AxiosResponse> => {
    return axiosInstance.patch(url, body);
  },

  delete: (url: string): Promise<AxiosResponse> => {
    return axiosInstance.delete(url);
  },
};
