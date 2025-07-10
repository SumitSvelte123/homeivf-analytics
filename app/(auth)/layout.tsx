import { AuthHeader } from "@/components/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-full bg-[url(/auth-bg.png)] bg-cover">
      <AuthHeader /> {children}
    </main>
  );
}
