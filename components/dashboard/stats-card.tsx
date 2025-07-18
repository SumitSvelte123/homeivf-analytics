import Image from "next/image";

import { cn } from "@/lib/utils";
import type { IStats } from "@/types/matrix.type";
import { Skeleton } from "@/components/ui/skeleton";

interface IProps extends IStats {
  isFetching: boolean;
}

export const StatsCard = ({
  type,
  image,
  title,
  value,
  isFetching,
  description,
}: IProps) => {
  return (
    <div className="p-5 rounded-lg shadow border flex">
      <div className="flex-1 grid 2xl:gap-4">
        <h2 className="text-sm 2xl:text-base font-bold text-primary">{title}</h2>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            {isFetching ? <Skeleton className="h-9 w-24" /> : value.toLocaleString()}{" "}
            {/* <span className="text-base font-normal text-green-500">(•40x)</span> */}
          </h1>
          {description && (
            <p className="text-gray-500 font-semibold text-xs 2xl:text-sm">{description}</p>
          )}
        </div>
      </div>
      <div>
        <div
          className={cn(
            "border-1 border-primary py-2 px-3 2xl:py-4 2xl:px-5 rounded-md bg-primary/20",
            type === "OPD_BOOKED" && "border-[#27A4FF] bg-[#27A4FF]/20",
            type === "OPD_DONE" && "border-[#FF89CD] bg-[#FF89CD]/20",
            type === "PATIENT" && "border-[#FEA747] bg-[#FEA747]/20",
            type === "BLOOD" && "border-[#DA2F47] bg-[#DA2F47]/20",
            type === "KIT" && "border-[#2E369A] bg-[#2E369A]/20",
            type === "PRESCRIPTION" && "border-[#00A882] bg-[#00A882]/20",
            type === "PATIENT_ENROLLED" && "border-[#8E494E] bg-[#8E494E]/20",
            type === "IPD_BOOKED" && "border-[#FF5900] bg-[#FF5900]/20",
            type === "IPD_DONE" && "border-[#E24E40] bg-[#E24E40]/20"
          )}
        >
          <div className="relative w-5 h-6 2xl:w-7 2xl:h-8">
            <Image src={image} alt="patient" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
