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

  const end_date = params.get("to") || null;
  const start_date = params.get("from") || null;
  const doctor_id = params.get("doctor_id") || null;

  const query = useQuery({
    queryKey: [GET_DASHBOARD_MATRIX, doctor_id, start_date, end_date].filter(
      Boolean
    ),
    queryFn: (): Promise<AxiosResponse<{ data: IDashboardMatrix }>> => {
      return api.get(GET_DASHBOARD_MATRIX, { doctor_id, start_date, end_date });
    },
  });

  return {
    ...query,
    fromDate: start_date,
    toDate: end_date,
  };
};

export const useGetPackages = () => {
  const params = useSearchParams();

  const end_date = params.get("to") || null;
  const type = params.get("p_type") || "all";
  const start_date = params.get("from") || null;
  const doctor_id = params.get("doctor_id") || null;

  return useQuery({
    queryKey: [
      GET_PACKAGES_MATRIX,
      doctor_id,
      start_date,
      end_date,
      type,
    ].filter(Boolean),
    queryFn: (): Promise<AxiosResponse<{ data: IPackageMatrix[] }>> => {
      return api.get(GET_PACKAGES_MATRIX, {
        doctor_id,
        start_date,
        end_date,
        ...(type !== "all" && { type }),
      });
    },
  });
};

export const useWeekPerformance = () => {
  const params = useSearchParams();

  const doctor_id = params.get("doctor_id") || null;

  return useQuery({
    queryKey: [GET_WEEK_PERFORMANCE, doctor_id].filter(Boolean),
    queryFn: (): Promise<AxiosResponse<{ data: IWeekPerformance[] }>> => {
      return api.get(GET_WEEK_PERFORMANCE, { doctor_id });
    },
  });
};
