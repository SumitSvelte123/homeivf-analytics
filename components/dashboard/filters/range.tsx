import { DateShortcut } from "./date-shortcut";
import { RangeCalender } from "@/components/ui/date-range";

export const DateRangeFilter = () => {
  return (
    <div className="flex items-center w-full flex-1 border-2 rounded-lg bg-primary border-primary">
      <DateShortcut />
      <RangeCalender className="flex-1 border-l-2" />
    </div>
  );
};
