import Image from "next/image";
import { cn } from "@/lib/utils";

export const NoDataFound = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative w-full h-72", className)}>
      <Image src="/no-data.svg" alt="no data" fill className="object-contain" />
    </div>
  );
};
