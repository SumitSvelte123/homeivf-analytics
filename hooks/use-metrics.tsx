import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { api } from "@/lib/api-client";
import {
  GET_DASHBOARD_MATRIX,
  GET_PACKAGES_MATRIX,
  GET_WEEK_PERFORMANCE,
} from "@/lib/endpoints";
import type {
  IDashboardMatrix,
  IPackageMatrix,
  IWeekPerformance,
} from "@/types/matrix.type";

export const useDashboardMetrics = () => {
  const params = useSearchParams();

  const doctorId = params.get("doctor_id") || "";
  const fromDate = params.get("from") || "";
  const toDate = params.get("to") || "";

  const url = new URL(GET_DASHBOARD_MATRIX, process.env.NEXT_PUBLIC_API_URL);

  if (toDate) url.searchParams.append("end_date", toDate);
  if (fromDate) url.searchParams.append("start_date", fromDate);
  if (doctorId) url.searchParams.append("doctor_id", doctorId);

  const query = useQuery({
    queryKey: [GET_DASHBOARD_MATRIX, doctorId, fromDate, toDate].filter(
      Boolean
    ),
    queryFn: (): Promise<AxiosResponse<{ data: IDashboardMatrix }>> => {
      return api.get(url.toString());
    },
  });

  return {
    ...query,
    fromDate,
    toDate,
  };
};

export const useGetPackages = () => {
  const params = useSearchParams();

  const doctorId = params.get("doctor_id") || false;
  const fromDate = params.get("from") || false;
  const toDate = params.get("to") || false;
  const type = params.get("p_type") || "all";

  const url = new URL(GET_PACKAGES_MATRIX, process.env.NEXT_PUBLIC_API_URL);

  if (type !== "all") url.searchParams.append("type", type);
  if (toDate) url.searchParams.append("end_date", toDate);
  if (fromDate) url.searchParams.append("start_date", fromDate);
  if (doctorId) url.searchParams.append("doctor_id", doctorId);

  return useQuery({
    queryKey: [GET_PACKAGES_MATRIX, doctorId, fromDate, toDate, type].filter(
      Boolean
    ),
    queryFn: (): Promise<AxiosResponse<{ data: IPackageMatrix[] }>> => {
      return api.get(url.toString());
    },
  });
};

export const useWeekPerformance = () => {
  const params = useSearchParams();

  const doctorId = params.get("doctor_id") || false;

  const url = new URL(GET_WEEK_PERFORMANCE, process.env.NEXT_PUBLIC_API_URL);

  if (doctorId) url.searchParams.append("doctor_id", doctorId);

  return useQuery({
    queryKey: [GET_WEEK_PERFORMANCE, doctorId].filter(Boolean),
    queryFn: (): Promise<AxiosResponse<{ data: IWeekPerformance[] }>> => {
      return api.get(url.toString());
    },
  });
};
