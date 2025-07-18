"use client";

import { STATS } from "@/lib/constants";
import { useDashboardMetrics } from "@/hooks/use-metrics";
import { StatsCard } from "@/components/dashboard/stats-card";

export const ClinicalMetrics = () => {
  const { data, isPending } = useDashboardMetrics();

  const metrics = data?.data.data || null;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
      {STATS.map((stats) => (
        <StatsCard
          {...stats}
          key={stats.accesskey}    
          isFetching={isPending}           
          value={metrics ? metrics[stats.accesskey] : 0}
        />
      ))}
    </div>
  );
};
