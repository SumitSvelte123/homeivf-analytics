import { MainHeader } from "@/components/header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppWrapper } from "@/components/app-wrapper";

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
          <div className="w-full">{children}</div>
        </SidebarProvider>
      </AppWrapper>
    </>
  );
}
