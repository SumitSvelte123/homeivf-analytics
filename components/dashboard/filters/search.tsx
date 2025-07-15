import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchFilter = () => {
  return (
    <div className="border shadow rounded-md w-full flex items-center px-2">
      <Search className="text-gray-500" />
      <Input className="border-0 focus-visible:ring-0 placeholder:font-semibold" placeholder="Search" />
    </div>
  );
};
