import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StatsBar } from "@/components/stats-bar";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Refah Medical Center | Your Health Is Our Priority",
  description:
    "Advanced medical care with compassion and excellence. Book appointments, find doctors, verify insurance and explore health packages at Al Refah Medical Center.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-sans antialiased min-h-full flex flex-col">
        <main className="min-h-screen bg-background ">
          <div className="max-w-7xl mx-auto border-x ">
            <SiteHeader />
            <FloatingContact />
            {children}
            <StatsBar />
          </div>
        </main>
      </body>
    </html>
  );
}
