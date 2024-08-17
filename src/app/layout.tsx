import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NIQ Assessment",
  description: "My fabulous store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Providers>
            <Suspense fallback="Loading...">{children}</Suspense>
          </Providers>
        </main>
      </body>
    </html>
  );
}
