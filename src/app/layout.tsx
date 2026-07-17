import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Efifya | Cannabis Knowledge for Nigeria",
  description: "Evidence-aware cannabis education grounded in Nigerian context, public health and science.",
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
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
      <body className="min-h-full bg-brand-stone-50 text-brand-primary">
        <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-brand-secondary px-4 py-3 font-bold text-brand-stone-50 transition-transform focus:translate-y-0">Skip to content</a>
        <Sidebar />
        <div id="main-content" className="app-main min-h-screen pb-28 lg:pb-0">
          {children}
        </div>
        <MobileBottomNav />
      </body>
    </html>
  );
}
