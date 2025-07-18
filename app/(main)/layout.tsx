import { MainHeader } from "@/components/header";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppWrapper } from "@/components/app-wrapper";
import { SearchFilter } from "@/components/dashboard/filters/search";
import { DateRangeFilter } from "@/components/dashboard/filters/range";
import { DoctorFilter } from "@/components/dashboard/filters/doctors";
import { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader />
      <AppWrapper className="mt-[90px] 2xl:mt-[100px] h-full">
        <SidebarProvider className="gap-5">
          <AppSidebar />
          <SidebarInset className="lg:ml-[16.8rem] 2xl:ml-[17.2rem]">
            <div className="relative">
              <SidebarTrigger className="block lg:hidden fixed right-0" />
              <main className="pb-5">
                <div className="grid items-center lg:grid-cols-2 xl:grid-cols-4 mb-5 gap-3 lg:gap-5">
                  <SearchFilter />
                  <Suspense>
                    <DoctorFilter />
                    <DateRangeFilter />
                  </Suspense>
                </div>
                {children}
              </main>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </AppWrapper>
    </>
  );
}
