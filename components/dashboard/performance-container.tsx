import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const PerformanceContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl text-primary font-bold">
          Week Performance
        </CardTitle>
        <CardDescription aria-description="" />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
