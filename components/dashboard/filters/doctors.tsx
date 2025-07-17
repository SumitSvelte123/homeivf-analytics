"use client";

import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";

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
import { Skeleton } from "@/components/ui/skeleton";

export const DoctorFilter = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { data, isPending } = useFetchDoctors();

  if (!data || isPending) return <Skeleton className="w-full h-10" />
  const doctors = data.data.data || [];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between font-semibold text-gray-500 h-10 shadow"
        >
          {value
            ? doctors.find((doctor) => doctor.id === value)?.name
            : "Select a doctor"}
          <ChevronsUpDown className="opacity-50" size={18} />
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
                    setValue(doctor.id === value ? "" : doctor.id);
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
