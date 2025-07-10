import Image from "next/image";

export const AppLogo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="homeivf"
      className="object-contain object-left"
      fill
    />
  );
};
