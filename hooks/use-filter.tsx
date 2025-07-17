import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, setTransaction] = useTransition();

  const applyFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    setTransaction(() => router.push(pathname + "?" + params.toString()));
  };

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    setTransaction(() => router.push(pathname + "?" + params.toString()));
  };

  return {
    isApplying: isPending,
    applyFilter,
    removeFilter
  };
};
