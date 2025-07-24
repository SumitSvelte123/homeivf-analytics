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
  const formattedValue = value.toLocaleString().toString().padStart(2, "0");

  return (
    <div className="p-5 rounded-lg shadow border grid gap-2">
      <div className="flex">
        <div className="flex-1 grid 2xl:gap-4">
          <h2 className="text-md lg:text-sm 2xl:text-base font-bold text-primary">
            {title}
          </h2>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              {isFetching ? <Skeleton className="h-9 w-24" /> : formattedValue}{" "}
            </h1>
          </div>
        </div>
        <div>
          <div
            className={cn(
              "border-1 border-primary py-2 px-3 2xl:py-4 2xl:px-5 rounded-md bg-primary/20",
              type === "OPD_BOOKED" && "border-[#27A4FF] bg-[#27A4FF]/10",
              type === "OPD_DONE" && "border-[#FF89CD] bg-[#FF89CD]/10",
              type === "PATIENT" && "border-[#FEA747] bg-[#FEA747]/10",
              type === "BLOOD" && "border-[#DA2F47] bg-[#DA2F47]/10",
              type === "KIT" && "border-[#2E369A] bg-[#2E369A]/10",
              type === "PRESCRIPTION" && "border-[#00A882] bg-[#00A882]/10",
              type === "PATIENT_ENROLLED" && "border-[#8E494E] bg-[#8E494E]/10",
              type === "IPD_BOOKED" && "border-[#FF5900] bg-[#FF5900]/10",
              type === "IPD_DONE" && "border-[#E24E40] bg-[#E24E40]/10",
              type === "MALE" && "border-[#C440FF] bg-[#C440FF]/10",
              type === "FEMALE" && "border-[#FF5B5B] bg-[#FF5B5B]/10",
              type === "IPD_PARTIAL" && "border-[#FF4C4C] bg-[#FF4C4C]/10"
            )}
          >
            <div className="relative w-5 h-6 2xl:w-7 2xl:h-8">
              <Image
                src={image}
                alt="patient"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {description && (
        <p className="text-gray-500 font-semibold text-xs 2xl:text-sm">
          {description}
        </p>
      )}
    </div>
  );
};
