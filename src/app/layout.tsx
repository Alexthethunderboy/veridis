import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

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
      className={`${plusJakarta.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col lg:flex-row bg-brand-stone-50 text-brand-primary">
        <Sidebar />
        <div className="flex-1 lg:ml-64 min-h-screen pb-24 lg:pb-0">
          {children}
        </div>
        <MobileBottomNav />
      </body>
    </html>
  );
}
