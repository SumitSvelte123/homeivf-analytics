import { Suspense } from "react";

import { StatsTable } from "@/components/dashboard/stats-table";
import { PackageChart } from "@/components/dashboard/charts/package";
import { ClinicalMetrics } from "@/components/dashboard/clinical-mertrics";
import { PackageContainer } from "@/components/dashboard/package-container";
import { PerformanceContainer } from "@/components/dashboard/performance-container";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-primary font-bold text-xl">KPI Metrics</h1>
        <Suspense>
          <ClinicalMetrics />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <PackageContainer>
          <Suspense>
            <PackageChart />
          </Suspense>
        </PackageContainer>

        <PerformanceContainer>
          <Suspense>
            <StatsTable />
          </Suspense>
        </PerformanceContainer>
      </div>
    </div>
  );
}
