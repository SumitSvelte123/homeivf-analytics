import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { api } from "@/lib/api-client";
import { GET_DASHBOARD_MATRIX } from "@/lib/endpoints";
import type { IDashboardMatrix } from "@/types/matrix.type";

export const useDashboardMetrics = () => {
  const params = useSearchParams();

  const doctorId = params.get("doctor-id") || false;
  const fromDate = params.get("from") || false;
  const toDate = params.get("to") || false;

  const url = new URL(GET_DASHBOARD_MATRIX, process.env.NEXT_PUBLIC_API_URL);
  
  if (doctorId) url.searchParams.append("doctor_id", doctorId);
  if (fromDate) url.searchParams.append("start_date", fromDate);
  if (toDate) url.searchParams.append("end_date", toDate);

  return useQuery({
    queryKey: [GET_DASHBOARD_MATRIX, doctorId, fromDate, toDate].filter(
      Boolean
    ),
    queryFn: (): Promise<AxiosResponse<{ data: IDashboardMatrix }>> => {
      return api.get(url.toString());
    },
  });
};
