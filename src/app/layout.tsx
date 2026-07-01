import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Project Veridis | Global Cannabis Education & Advocacy",
  description: "Moving the needle from stigma to science-based legalization in Nigeria.",
};

import MobileBottomNav from "@/components/MobileBottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col lg:flex-row bg-brand-stone-50 text-brand-primary">
        <Sidebar />
        <div className="flex-1 lg:pl-20 min-h-screen pb-24 lg:pb-0 transition-all duration-300">
          {children}
        </div>
        <MobileBottomNav />
      </body>
    </html>
  );
}
