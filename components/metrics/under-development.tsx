import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const UnderDevelopment = () => {
  return (
    <div className="relative p-5 shadow border rounded-lg h-[calc(100vh-180px)]">
      <Image src="/coming-soon.svg" alt="Under Development" fill />
      <Button className="absolute rounded-lg" size="lg" asChild>
        <Link href="/dashboard">
          <ChevronLeft />
          <span>Back to Dashboard</span>
        </Link>
      </Button>
    </div>
  );
};
