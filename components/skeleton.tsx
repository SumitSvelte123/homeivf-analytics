import { Skeleton } from "./ui/skeleton";

export const TableSkeleton = ({ repeat = 10 }) => {
  return (
    <div className="grid gap-2">
      {new Array(repeat).fill("").map((_, index) => (
        <Skeleton className="h-10" key={index} />
      ))}
    </div>
  );
};
