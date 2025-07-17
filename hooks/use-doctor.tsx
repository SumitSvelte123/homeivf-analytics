import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { GET_DOCTORS } from "@/lib/endpoints";
import { IDoctor } from "@/types/doctor.type";

export const useFetchDoctors = () => {
  return useQuery({
    queryKey: [GET_DOCTORS],
    queryFn: (): Promise<AxiosResponse<{ data: IDoctor[] }>> => {
      return api.get(GET_DOCTORS);
    },
  });
};
