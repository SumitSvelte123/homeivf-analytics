import Link from "next/link";
import { Suspense } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,  
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { STATS } from "@/lib/constants";
import type { IDashboardWeekSlug } from "@/types/matrix.type";
import { UnderDevelopment } from "@/components/metrics/under-development";

const loadComponentBySlug = async (slug: keyof IDashboardWeekSlug | null) => {
  switch (slug) {
    case "opd-done":
      return (await import("@/components/metrics/opd/opd-done")).default;
    case "opd-booked":
      return (await import("@/components/metrics/opd/opd-booked")).default;
    default:
      return null;
  }
};

const MetricsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const stat = STATS.find((stat) => stat.slug === (slug as string)) || null;

  const Component = await loadComponentBySlug(slug as keyof IDashboardWeekSlug);
  if (!Component) return <UnderDevelopment />;

  return (
    <div className="grid gap-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="font-semibold text-base">
            <Link href="/dashboard">KPI Metrics</Link>
          </BreadcrumbItem>
          {stat && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold text-base text-primary">
                  {stat.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="p-5 shadow border rounded-lg">
        <Suspense fallback="Loading....">
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default MetricsPage;
