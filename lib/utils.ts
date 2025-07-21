import { twMerge } from "tailwind-merge";
import { format, subDays } from "date-fns";

import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFromToDates(daysBack: number): { from: string; to: string } {
  const today = new Date();
  const from = subDays(today, daysBack);

  return {
    from: format(from, "yyyy-MM-dd"),
    to: format(today, "yyyy-MM-dd"),
  };
}

export function generateUniqueColors(count: number): string[] {
  const colors = new Set();

  while (colors.size < count) {
    const color =
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
    colors.add(color);
  }

  return Array.from(colors) as string[];
}
