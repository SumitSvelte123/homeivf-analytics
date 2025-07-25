"use client";

import { format } from "date-fns";
import { STATS } from "@/lib/constants";
import { useDashboardMetrics } from "@/hooks/use-metrics";
import { StatsCard } from "@/components/dashboard/stats-card";
import { StatsProvider } from "@/providers/stats.provide";

export const ClinicalMetrics = () => {
  const { data, isPending, toDate, fromDate } = useDashboardMetrics();

  const metrics = data?.data.data || null;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {STATS.map((stats) => {
        let description = "Metrics pulled for ";
        if (fromDate && toDate) {
          description += `for ${format(fromDate, "dd/MM/yyyy")} to ${format(
            toDate,
            "dd/MM/yyyy"
          )}`;
        } else {
          description += "up till Today";
        }

        return (
          <StatsProvider key={stats.accesskey} slug={stats.slug}>
            <StatsCard
              {...stats}
              isFetching={isPending}
              value={metrics ? metrics[stats.accesskey] : 0}
              description={description}
            />
          </StatsProvider>
        );
      })}
    </div>
  );
};
