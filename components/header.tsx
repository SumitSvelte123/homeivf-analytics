import { AppLogo } from "@/components/app.logo";
import { AppWrapper } from "@/components/app-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Mail } from "lucide-react";

export const AuthHeader = () => {
  return (
    <div className="bg-primary fixed top-0 w-full px-5 py-2 2xl:px-0">
      <AppWrapper>
        <div className="relative w-40 h-14 2xl:w-56 2xl:h-20">
          <AppLogo />
        </div>
      </AppWrapper>
    </div>
  );
};

export const MainHeader = () => {
  return (
    <div className="bg-primary fixed top-0 z-30 w-full py-2">
      <AppWrapper className="flex justify-between items-center">
        <div className="relative w-52 h-16">
          <AppLogo />
        </div>
        <div className="flex justify-center items-center gap-3 text-white">
          <div className="relative">
            <Bell />
            <span className="flex size-2 absolute top-0 right-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-red-500"></span>
            </span>
          </div>

          <Mail />
          <h1 className="hidden md:block">
            Hey, <span className="font-semibold">Anna</span>
          </h1>
          <Avatar className="ring-2 ring-white size-10 rounded-md">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="rounded-md">GA</AvatarFallback>
          </Avatar>
        </div>
      </AppWrapper>
    </div>
  );
};
