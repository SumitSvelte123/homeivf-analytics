"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowBigDownDashIcon,
  ArrowBigUpDashIcon,
  ArrowUpDown,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WEEK_STATS } from "@/lib/constants";
import { useWeekPerformance } from "@/hooks/use-metrics";
import type { IWeekPerformance } from "@/types/matrix.type";
import { TableSkeleton } from "../skeleton";

type ISortType = "current_asc" | "current_desc" | "all";

function getSortedPerformance(type: ISortType, data: IWeekPerformance[]) {
  if (!data.length) return [];

  try {
    switch (type) {
      case "current_asc":
        return data.sort((a, b) => a.this_week_count - b.this_week_count);
      case "current_desc":
        return data.sort((a, b) => b.this_week_count - a.this_week_count);
      default:
        return data;
    }
  } catch (error) {
    console.error("Error while sorting ->", error);
    return [];
  }
}

export const StatsTable = () => {
  const [sort, setSort] = useState<ISortType>("all");

  const { data, isPending } = useWeekPerformance();

  if (!data || isPending) return <TableSkeleton repeat={8} />;

  const handleApplyCurrentWeekSort = () => {
    switch (sort) {
      case "current_asc":
        return setSort("current_desc");
      case "current_desc":
        return setSort("current_asc");
      default:
        return setSort("current_asc");
    }
  };

  const performances = getSortedPerformance(sort, data.data.data) || [];

  return (
    <div className="max-h-96 overflow-auto">
      <Table>
        <TableHeader className="bg-[#F2F5F6]">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>
              <button
                onClick={handleApplyCurrentWeekSort}
                className="flex gap-2 items-center justify-center cursor-pointer"
              >
                Current Week <ArrowUpDown size={14} />
              </button>
            </TableHead>
            <TableHead>Last Week</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {performances.map((performance) => (
            <TableRow key={performance.item}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src={WEEK_STATS[performance.item].image}
                    width={16}
                    height={18}
                    alt={WEEK_STATS[performance.item].title}
                  />{" "}
                  <span className="text-sm font-semibold">
                    {WEEK_STATS[performance.item].title}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-sm font-semibold">
                {performance.this_week_count.toLocaleString()}
              </TableCell>
              <TableCell className="text-sm font-semibold">
                <div className="flex gap-2 justify-center">
                  <span className="w-6">
                    {performance.this_week_growth_compared_previous_week}
                  </span>
                  {performance.growth_status === "positive" && (
                    <ArrowBigUpDashIcon className="text-green-500" />
                  )}
                  {performance.growth_status === "negative" && (
                    <ArrowBigDownDashIcon className="text-red-500" />
                  )}
                  {performance.growth_status === "no_change" && (
                    <ArrowBigUpDashIcon className="text-yellow-500" />
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
