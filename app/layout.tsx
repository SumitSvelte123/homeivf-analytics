import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { TanstackQueryProvider } from "@/providers/tanstack.provider";

export const metadata: Metadata = {
  title: "HomeIVF | Bringing Life Home",
  description:
    "HomeIVF is a platform that helps bring life home. Learn more about our services and how we can assist you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="antialiased">
        <TanstackQueryProvider>{children}</TanstackQueryProvider>{" "}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
