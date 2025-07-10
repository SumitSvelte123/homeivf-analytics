import Image from "next/image";
import { AppWrapper } from "./app-wrapper";

export const AuthHeader = () => {
  return (
    <div className="bg-primary fixed top-0 w-full px-5 py-2 2xl:px-0">
      <div className="container m-auto">
        <div className="relative w-40 h-14 2xl:w-56 2xl:h-20">
          <Image
            src="/logo.svg"
            alt="homeivf"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export const MainHeader = () => {
  return (
    <div className="bg-primary fixed top-0 z-30 w-full px-5 py-2">
      <AppWrapper>
        <div className="relative w-52 h-16">
          <Image
            src="/logo.svg"
            alt="homeivf"
            className="object-contain object-left"
            fill
          />
        </div>
      </AppWrapper>
    </div>
  );
};
