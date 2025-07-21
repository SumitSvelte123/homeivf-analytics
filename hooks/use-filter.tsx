import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IParamsArg {
  key: string;
  value: string;
}

export const useFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, setTransaction] = useTransition();

  const applyFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    setTransaction(() =>
      router.push(pathname + "?" + params.toString(), { scroll: false })
    );
  };

  const applyFilters = (paramArg: IParamsArg[]) => {
    const params = new URLSearchParams(searchParams.toString());

    paramArg.map((param) => params.set(param.key, param.value));

    setTransaction(() =>
      router.push(pathname + "?" + params.toString(), { scroll: false })
    );
  };

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    setTransaction(() =>
      router.push(pathname + "?" + params.toString(), { scroll: false })
    );
  };

  return {
    isApplying: isPending,
    applyFilter,
    applyFilters,
    removeFilter,
  };
};
