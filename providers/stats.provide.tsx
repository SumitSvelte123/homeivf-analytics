"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useSearchParams } from "next/navigation";

interface IProps {
  slug: string;
  children: ReactNode;
}

export const StatsProvider = ({ slug, children }: IProps) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  let redirectLink = `/metrics/${slug}`;
  if (params.size) redirectLink += `?${params.toString()}`;

  return <Link href={redirectLink}>{children}</Link>;
};
