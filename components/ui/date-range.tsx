"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IProps {
  className?: string;
}

export function RangeCalender({ className }: IProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn("justify-start text-left font-normal rounded-l-none")}
          >
            <CalendarIcon />
            <span>Pick a date</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar initialFocus mode="range" numberOfMonths={2} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
