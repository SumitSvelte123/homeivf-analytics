"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
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
  const searchParams = useSearchParams();
  const { applyFilters } = useFilter();

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: searchParams.get("from")
      ? new Date(searchParams.get("from") as string)
      : undefined,
    to: searchParams.get("to")
      ? new Date(searchParams.get("to") as string)
      : undefined,
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

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn("justify-start text-left font-normal rounded-l-none")}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
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
              setDate(date)
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
