import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { api } from "@/lib/api-client";
import type { IOPDRes } from "@/types/opd.type";
import { GET_BOOKED_OPD } from "@/lib/endpoints";

export const useGetOPDBooked = () => {
  const params = useSearchParams();

  const toDate = params.get("to") || null;
  const fromDate = params.get("from") || null;
  const doctorId = params.get("doctor_id") || null;

  return useQuery({
    queryKey: [GET_BOOKED_OPD, doctorId, fromDate, toDate].filter(Boolean),
    queryFn: (): Promise<AxiosResponse<{ data: IOPDRes[] }>> => {
      return api.get(GET_BOOKED_OPD, {
        doctor_id: doctorId,
        start_date: fromDate,
        end_date: toDate,
      });
    },
  });
};
