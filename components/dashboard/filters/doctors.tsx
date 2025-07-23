"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronsUpDown, CircleX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useFetchDoctors } from "@/hooks/use-doctor";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useFilter } from "@/hooks/use-filter";

export const DoctorFilter = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  const doctorId = searchParams.get("doctor_id") || "";

  const { data, isPending } = useFetchDoctors();
  const { applyFilter, removeFilter, isApplying } = useFilter();

  const doctors = data?.data.data || [];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between font-semibold text-gray-500 h-10 shadow disabled:opacity-100"
          disabled={isPending || isApplying}
        >
          {doctorId
            ? doctors.find((doctor) => doctor.id === doctorId)?.name
            : isPending
            ? "Loading..."
            : "Select a doctor"}
          {doctorId ? (
            <span
              onClick={(e) => {
                e.stopPropagation();
                removeFilter("doctor_id");
              }}
            >
              <CircleX className="text-red-500 opacity-80" size={18} />
            </span>
          ) : (
            <ChevronsUpDown className="opacity-80" size={18} />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-sm p-0">
        <Command>
          <CommandInput placeholder="Search doctor..." />
          <CommandList>
            <CommandEmpty>No doctors found.</CommandEmpty>
            <CommandGroup>
              {doctors.map((doctor) => (
                <CommandItem
                  key={doctor.id}
                  data-id={doctor.id}
                  value={doctor.name}
                  onSelect={() => {
                    applyFilter("doctor_id", doctor.id);
                    setOpen(false);
                  }}
                >
                  {doctor.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
