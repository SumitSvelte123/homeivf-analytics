"use client";

import { useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilter } from "@/hooks/use-filter";

export const PackageStatusFilter = () => {
  const { applyFilter } = useFilter();
  const searchParams = useSearchParams();

  const statusValue = searchParams.get("p_type") || "all";

  return (
    <Select
      defaultValue={statusValue}
      onValueChange={(value) => applyFilter("p_type", value)}
    >
      <SelectTrigger
        className="ml-auto min-w-36 h-7 pl-2.5 font-semibold"
        aria-label="Select Status"
      >
        <SelectValue placeholder="Select Status" />
      </SelectTrigger>
      <SelectContent className="font-semibold">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="activated">Activated</SelectItem>
        <SelectItem value="not_activated">Not Activated</SelectItem>
        <SelectItem value="fully_paid">Fully Paid</SelectItem>
      </SelectContent>
    </Select>
  );
};
