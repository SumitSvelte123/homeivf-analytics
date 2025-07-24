import React from "react";
import Link from "next/link";
import {
  CalendarDays,
  ChevronDown,
  FileText,
  Hospital,
  LayoutDashboard,  
  Syringe,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { AppLogo } from "./app.logo";
import { LogoutAction } from "./auth/logout";

const menuData = [
  {
    title: "Dashboard",
    defaultOpen: true,
    icon: <LayoutDashboard />,
    items: [
      {
        title: "Clinical Metrics",
        icon: <Syringe />,
        url: "/dashboard",
      },
      {
        title: "Operational Metrics",
        icon: <Hospital />,
        url: "/",
      },
      {
        title: "Financial Metrics",
        icon: <CalendarDays />,
        url: "/",
      },
      {
        title: "Patient Experience",
        icon: <FileText />,
        url: "/",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      variant="floating"
      className="relative p-2 2xl:p-0 h-[calc(100vh-100px)] 2xl:h-[calc(100vh-120px)]"
    >
      <SidebarHeader className="block lg:hidden bg-primary">
        <div className="relative w-52 h-16">
          <AppLogo />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-white rounded-md rounded-b-none py-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuData.map((section) => (
                <Collapsible
                  key={section.title}
                  defaultOpen={section.defaultOpen}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full justify-between text-primary hover:text-primary data-[state=open]:text-primary">
                        <div className="font-semibold flex gap-2">
                          {section.icon}
                          <span className="text-xl xl:text-base">
                            {section.title}
                          </span>
                        </div>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=closed]/collapsible:rotate-[-90deg]" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="gap-4 xl:gap-2 mt-2 border-l-2 border-grey-500">
                        {section.items.map((item, index) => {
                          const isActive = index === 0;                          

                          return (
                            <SidebarMenuSubItem
                              key={item.title}
                              className={cn(
                                "relative before:absolute before:left-[-12px] before:top-[-12px] before:bottom-3 before:w-[2px] before:content-[''] after:absolute after:left-[-11px] after:top-3 after:h-[2px] after:w-2 after:content-[''] after:bg-gray-400",
                                isActive && "after:bg-primary before:bg-primary"
                              )}
                            >
                              <div
                                className={cn(
                                  "absolute z-10 left-[-4px] top-[10px] h-1.5 w-1.5 rounded-full bg-grey-500",
                                  isActive && "bg-primary"
                                )}
                              />
                              <SidebarMenuSubButton
                                asChild
                                className={cn(
                                  "font-semibold text-grey-500 hover:text-primary hover:bg-transparent text-md",
                                  isActive && "text-primary"
                                )}
                              >
                                <Link href={item.url}>
                                  {item.icon}
                                  <span>{item.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-white rounded-md">
        <LogoutAction />
      </SidebarFooter>
    </Sidebar>
  );
}
