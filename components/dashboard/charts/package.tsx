"use client";

import React from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { NoDataFound } from "@/components/no-data";
import { generateUniqueColors } from "@/lib/utils";
import { useGetPackages } from "@/hooks/use-metrics";

export const description = "A donut chart";

export function PackageChart() {
  const { data, isPending } = useGetPackages();

  if (!data || isPending) return <NoDataFound />;

  const packageData = data.data.data || [];  
  if (!packageData.length) return <NoDataFound />

  const colorCodes = generateUniqueColors(packageData.length)
  const totalPackages = packageData.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <ChartContainer config={{}} className="mx-auto aspect-square max-h-[300px]">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={packageData}
          dataKey="count"
          nameKey="package"
          innerRadius={90}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-primary text-3xl font-bold"
                    >
                      {totalPackages.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground font-semibold"
                    >
                      Packages
                    </tspan>
                  </text>
                );
              }
            }}
          />
          {packageData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colorCodes[index % colorCodes.length]} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
