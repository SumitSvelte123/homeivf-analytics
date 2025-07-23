"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, CircleX } from "lucide-react";
import { DateRange } from "react-day-picker";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFilter } from "@/hooks/use-filter";

interface IProps {
  className?: string;
}

export function RangeCalender({ className }: IProps) {
  const { applyFilters, removeFilters, isApplying } = useFilter();
  const searchParams = useSearchParams();

  const fromDate = searchParams.get("from") || undefined;
  const toDate = searchParams.get("to") || undefined;

  const isFilterApplied = fromDate || toDate;

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: fromDate ? new Date(fromDate as string) : undefined,
    to: toDate ? new Date(toDate as string) : undefined,
  });

  const handleSelectRange = (date: DateRange | undefined) => {
    if (!date) return;
    const fromDate = format(date.from as Date, "yyyy-MM-dd");
    const toDate = format(date.to as Date, "yyyy-MM-dd");

    applyFilters([
      { key: "from", value: fromDate },
      { key: "to", value: toDate },
    ]);
  };

  const handleRemoveFilter = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();

    removeFilters(["from", "to"]);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild className="px-2">
          <Button
            id="date"
            disabled={isApplying}
            className={cn("justify-start text-left font-normal rounded-l-none")}
          >
            {isFilterApplied ? (
              <span onClick={handleRemoveFilter}>
                <CircleX className="text-red-500" size={24} />
              </span>
            ) : (
              <CalendarIcon size={24} />
            )}
            {fromDate ? (
              toDate ? (
                <>
                  {format(fromDate, "LLL dd, y")} -{" "}
                  {format(toDate, "LLL dd, y")}
                </>
              ) : (
                format(fromDate, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            mode="range"
            selected={date}
            numberOfMonths={2}
            onSelect={(date) => {
              setDate(date);
              if (date?.from && date?.to) {
                handleSelectRange(date);
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
