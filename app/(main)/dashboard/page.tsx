import { STATS } from "@/lib/constants";
import { StatsCard } from "@/components/dashboard/stats-card";
import { StatsTable } from "@/components/dashboard/stats-table";
import { PackageChart } from "@/components/dashboard/charts/package";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-primary font-bold text-xl">Analytics Dashboard</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
          {STATS.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <PackageChart />
        <StatsTable />
      </div>
    </div>
  );
}
