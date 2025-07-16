import { AuthHeader } from "@/components/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-full">
      <AuthHeader /> {children}
    </main>
  );
}
