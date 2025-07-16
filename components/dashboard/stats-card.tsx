import { cn } from "@/lib/utils";
import { IStats } from "@/types/auth.type";
import Image from "next/image";

export const StatsCard = ({
  type,
  image,
  title,
  value,
  description,
}: IStats) => {
  return (
    <div className="p-5 rounded-lg shadow border flex">
      <div className="flex-1 grid gap-4">
        <h2 className="text-base font-bold text-primary">{title}</h2>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">
            {value.toLocaleString()}{" "}
            <span className="text-base font-normal text-green-500">(•40x)</span>
          </h1>
          <p className="text-gray-500 font-semibold text-sm">{description}</p>
        </div>
      </div>
      <div>
        <div
          className={cn(
            "border-1 border-primary py-5 px-6 rounded-md bg-primary/20",
            type === "OPD" && "border-[#27A4FF] bg-[#27A4FF]/20",
            type === "IPD" && "border-[#FF89CD] bg-[#FF89CD]/20",
            type === "PATIENT" && "border-[#FEA747] bg-[#FEA747]/20",
            type === "BLOOD" && "border-[#DA2F47] bg-[#DA2F47]/20",
            type === "KIT" && "border-[#2E369A] bg-[#2E369A]/20",
            type === "PRESCRIPTION" && "border-[#00A882] bg-[#00A882]/20"
          )}
        >
          <div className="relative w-7 h-8">
            <Image src={image} alt="patient" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
