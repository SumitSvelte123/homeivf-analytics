import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

          <Select defaultValue="all">
            <SelectTrigger
              className="ml-auto min-w-36 h-7 pl-2.5"
              aria-label="Select Status"
            >
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Activated</SelectItem>
              <SelectItem value="not-active">Not Activated</SelectItem>
              <SelectItem value="pain">Fully Paid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        {children}
      </CardContent>
    </Card>
  );
};
