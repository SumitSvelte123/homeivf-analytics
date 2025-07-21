import { ReactNode, Suspense } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PackageStatusFilter } from "./filters/package-status";

export const PackageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <div className="flex">
          <div className="space-y-2">
            <CardTitle className="text-xl text-primary font-bold">
              Package(s)
            </CardTitle>
            <CardDescription className="max-w-4/5 text-gray-500 text-xs 2xl:text-sm">
              There ore plenty of tree wet prory shes toe, you con vee. The
              prottem is thot mony of the populor ones diso get blocked.
            </CardDescription>
          </div>

          <Suspense>
            <PackageStatusFilter />
          </Suspense>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">{children}</CardContent>
    </Card>
  );
};
