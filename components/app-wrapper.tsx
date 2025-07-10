import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const AppWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[1920px] px-5 m-auto", className)}>
      {children}
    </div>
  );
};
