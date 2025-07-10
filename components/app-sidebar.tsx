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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const menuData = [
  {
    title: "Dashboard",
    defaultOpen: true,
    icon: <LayoutDashboard />,
    items: [
      {
        title: "Clinical Metrics",
        icon: <Syringe className="text-inherit" />,
        url: "#",
      },
      {
        title: "Operational Metrics",
        icon: <Hospital />,
        url: "#",
      },
      {
        title: "Financial Metrics",
        icon: <CalendarDays />,
        url: "#",
      },
      {
        title: "Patient Experience",
        icon: <FileText />,
        url: "#",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="relative p-2 2xl:p-0 h-[calc(100vh-100px)] 2xl:h-[calc(100vh-120px)]">
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
                          <span className="text-base">{section.title}</span>
                        </div>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=closed]/collapsible:rotate-[-90deg]" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="gap-2 mt-2">
                        {section.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              className="font-semibold text-grey-500 hover:text-primary hover:bg-transparent"
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
