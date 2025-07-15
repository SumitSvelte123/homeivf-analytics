import React from "react";
import Link from "next/link";
import {
  CalendarDays,
  ChevronDown,
  FileText,
  Hospital,
  LayoutDashboard,
  LogOut,
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
import { AppLogo } from "./app.logo";

const menuData = [
  {
    title: "Dashboard",
    defaultOpen: true,
    icon: <LayoutDashboard />,
    items: [
      {
        title: "Clinical Metrics",
        icon: <Syringe />,
        url: "/",
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
                      <SidebarMenuSub className="gap-4 xl:gap-2 mt-2">
                        {section.items.map((item) => (
                          <SidebarMenuSubItem
                            key={item.title}
                            className="relative before:absolute before:left-[-11px] before:top-3 before:h-px before:w-3 before:bg-gray-200 before:content-[''] after:absolute after:left-[-4px] after:top-[10px] after:h-1.5 after:w-1.5 after:rounded-full after:bg-gray-300 after:content-['']"
                          >
                            <SidebarMenuSubButton
                              asChild
                              className="font-semibold text-grey-500 hover:text-primary hover:bg-transparent text-md"
                            >
                              <Link href={item.url}>
                                {item.icon}
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
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
        <SidebarMenu className="p-2">
          <SidebarMenuItem className="flex gap-2 items-center text-red-500 bg-red-100 p-2 rounded-md cursor-pointer">
            <LogOut size={18} />
            Logout
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
