import { AuthHeader } from "@/components/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-full bg-[url(/auth-bg.svg)] bg-left-bottom bg-no-repeat bg-size-[43rem] 2xl:bg-size-[70rem]">
      <AuthHeader /> {children}
    </main>
  );
}
