import { RangeCalender } from "@/components/ui/date-range";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const DateRangeFilter = () => {
  return (
    <div className="flex items-center w-full flex-1">
      <ToggleGroup
        type="single"
        className="bg-primary text-white rounded-tr-none rounded-br-none"                
      >
        <ToggleGroupItem value="1d" className="w-10 cursor-pointer">
          1D
        </ToggleGroupItem>
        <ToggleGroupItem value="7d" className="w-10 cursor-pointer">
          7D
        </ToggleGroupItem>
        <ToggleGroupItem value="14d" className="w-10 cursor-pointer">
          14D
        </ToggleGroupItem>
        <ToggleGroupItem value="30d" className="w-10 cursor-pointer">
          30D
        </ToggleGroupItem>
      </ToggleGroup>

      <RangeCalender className="flex-1 border-l-2" />
    </div>
  );
};
