"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "A donut chart";

const chartData = [
  { browser: "chrome", count: 275, fill: "var(--color-chrome)" },
  { browser: "safari", count: 200, fill: "var(--color-safari)" },
  { browser: "firefox", count: 187, fill: "var(--color-firefox)" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  chrome: {
    label: "IVF",
    color: "#FF89CD",
  },
  safari: {
    label: "ICSI",
    color: "#36ABFF",
  },
  firefox: {
    label: "SELF EGG",
    color: "#3E4AD5",
  },
} satisfies ChartConfig;

export function PackageChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <div className="flex">
          <div className="space-y-2">
            <CardTitle className="text-xl text-primary font-bold">
              Package(s)
            </CardTitle>
            <CardDescription className="max-w-4/5 text-gray-500 text-xs 2xl:text-base">
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
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="browser"
              innerRadius={80}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
