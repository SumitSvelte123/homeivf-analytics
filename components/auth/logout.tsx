"use client";

import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export const LogoutAction = () => {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    deleteCookie("username");

    toast.success("Logout Successful");
    router.push("/");
  };

  return (
    <SidebarMenu className="p-2">
      <SidebarMenuItem
        className="flex gap-2 items-center text-red-500 bg-red-100 p-2 rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        <LogOut size={18} />
        Logout
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
