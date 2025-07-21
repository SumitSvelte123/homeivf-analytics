"use client";

import Image from "next/image";
import { ArrowBigDownDashIcon, ArrowBigUpDashIcon } from "lucide-react";

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

export const StatsTable = () => {
  const { data, isPending } = useWeekPerformance();

  if (!data || isPending) return "Loading...";

  const performances = data.data.data || [];

  return (
    <div className="max-h-96 overflow-auto">
      <Table>
        <TableHeader className="bg-[#F2F5F6]">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Current Week</TableHead>
            <TableHead className="text-center">Last Week</TableHead>
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
              <TableCell className="text-center text-sm font-semibold">
                {performance.this_week_count}
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
