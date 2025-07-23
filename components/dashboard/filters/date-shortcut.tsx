"use client";

import { getFromToDates } from "@/lib/utils";
import { useFilter } from "@/hooks/use-filter";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const DateShortcut = () => {
  const { applyFilters, isApplying } = useFilter();

  const handleChangeShortcut = (value: string) => {
    const { from, to } = getFromToDates(+value);

    applyFilters([
      { key: "from", value: from },
      { key: "to", value: to },
    ]);
  };

  return (
    <div className="bg-primary text-white rounded-l-md overflow-hidden">
      <ToggleGroup
        type="single"
        onValueChange={handleChangeShortcut}
        disabled={isApplying}
      >
        <ToggleGroupItem value="1" className="w-8 md:w-10 cursor-pointer">
          1D
        </ToggleGroupItem>
        <ToggleGroupItem value="7" className="w-8 md:w-10 cursor-pointer">
          7D
        </ToggleGroupItem>
        <ToggleGroupItem value="14" className="w-8 md:w-10 cursor-pointer">
          14D
        </ToggleGroupItem>
        <ToggleGroupItem value="30" className="w-8 md:w-10 cursor-pointer">
          30D
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
