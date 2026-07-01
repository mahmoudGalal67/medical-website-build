import type { Metadata, Viewport } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Alexandria } from "next/font/google";

import { SiteHeader } from "@/components/site-header";

import "./globals.css";

import FloatingContact from "@/components/FloatingContact";
import { getDictionary } from "@/i18n/config";
import { DictionaryProvider } from "@/providers/dictionary-provider";
import FooterSection from "@/components/AAfooterSection";

const alexandria = Alexandria({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700", "800"],
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
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>) {
  const { locale } = await params;
  const lang = locale === "ar" ? "ar" : "en";
  const dict = await getDictionary(locale);
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={` ${alexandria.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="font-sans antialiased min-h-full flex flex-col overflow-x-hidden scroll-smooth">
        <main className="min-h-screen bg-background ">
          <div className="mx-auto border-x ">
            <DictionaryProvider dictionary={dict}>
              <SiteHeader />
              <FloatingContact />
              {children}
              <FooterSection />
            </DictionaryProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
