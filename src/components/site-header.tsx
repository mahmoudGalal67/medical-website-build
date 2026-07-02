"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, MessageCircle, Siren, HeartPulse, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useDictionary } from "@/providers/dictionary-provider";

const navLinks: {
  en: { title: string; href: string };
  ar: { title: string; href: string };
}[] = [
  { en: { title: "Home", href: "/" }, ar: { title: "الرئيسية", href: "/" } },
  {
    en: { title: "sanad el-jezera taweq", href: "en/branches/tweq" },
    ar: { title: "سند الجزيرة فرع طويق", href: "ar/branches/tweq" },
  },
  {
    en: { title: "sanad el-jezera mahdya", href: "en/branches/mahdya" },
    ar: { title: "سند الجزيرة فرع المهدية", href: "ar/branches/mahdya" },
  },
  {
    en: { title: "sanad el--jezera lbn", href: "en/branches/lbn" },
    ar: { title: "سند الجزيرة فرع لبن", href: "ar/branches/lbn" },
  },
  {
    en: { title: "sade el-jezera care", href: "en/branches/care" },
    ar: { title: "مجمع الجزيره كير الطبي", href: "ar/branches/care" },
  },
  {
    en: { title: "dar el-khyal", href: "en/branches/khayal" },
    ar: { title: "دار الخيال الطبي", href: "ar/branches/khayal" },
  },
  {
    en: { title: "dar el-hoda", href: "en/branches/hoda" },
    ar: { title: " دار الهدا الطبي", href: "ar/branches/hoda" },
  },
  {
    en: { title: "Insurance", href: "#" },
    ar: { title: "التأمينات", href: "#" },
  },
  {
    en: { title: "Laboratory and Radiology", href: "#" },
    ar: { title: "المعمل والأشعة", href: "#" },
  },
  {
    en: { title: "Contact Us", href: "en/contact" },
    ar: { title: "اتصل بنا", href: "ar/contact" },
  },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState<"en" | "ar">(
    params.locale === "ar" ? "ar" : "en",
  );
  const dict = useDictionary();

  const switchLanguage = (lang: "en" | "ar") => {
    const newPath = `/${lang}${pathname.substring(3)}`;
    router.push(newPath);
    setLocale(lang);
  };

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Subtle elevation once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 mx-auto">
      {/* Top Utility Bar */}
      <div className="text-white" dir="ltr">
        <div className="mx-auto flex h-9 items-center justify-between gap-4 rounded-t-xl bg-gradient-to-r from-primary to-primary/85 px-4 text-xs shadow-sm sm:px-6 lg:px-36">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium text-red-100">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-red-300" />
              </span>
              Emergency 24/7
            </span>

            <a
              href="tel:920012345"
              className="hidden items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100 sm:flex"
            >
              <Phone className="size-3.5" />
              9200 12345
            </a>

            <a
              href="https://wa.me/920012345"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100 md:flex"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp Us
            </a>
          </div>

          <div className="flex items-center rounded-full bg-white/10 p-0.5">
            <button
              dir="rtl"
              className={`cursor-pointer rounded-full px-3 py-1 font-medium transition-all ${
                locale === "ar"
                  ? "bg-white text-primary shadow-sm"
                  : "text-white/80 hover:text-white"
              }`}
              onClick={() => switchLanguage("ar")}
            >
              العربية
            </button>

            <button
              className={`cursor-pointer rounded-full px-3 py-1 font-medium transition-all ${
                locale === "en"
                  ? "bg-white text-primary shadow-sm"
                  : "text-white/80 hover:text-white"
              }`}
              onClick={() => switchLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`border-b border-border bg-card/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex h-26 max-w-8xl items-center justify-between px-4 sm:px-6 md:px-12 xl:px-48">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="group flex shrink-0 items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="HealthCare Booking"
              width={140}
              height={90}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden items-center gap-8 xl:flex">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link[locale].href}
                  href={`/${link[locale].href}`.replace(/\/{2,}/g, "/")}
                  className="group relative py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link[locale].title}
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden xl:block">
            <Button className="cursor-pointer gap-2 rounded-full px-6 py-6 shadow-sm transition-all hover:shadow-md hover:brightness-105">
              <HeartPulse className="size-4" />
              {dict.Buttons.book}
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button size="sm" className="rounded-full px-4 shadow-sm">
              {locale === "en" ? "Book" : "احجز"}
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted"
            >
              <span
                className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 top-[calc(2.25rem+6.5rem)] z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 xl:hidden ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        {/* Mobile Menu */}
        <div
          className={`relative z-50 overflow-hidden transition-all duration-300 xl:hidden ${
            isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t bg-background">
            <nav className="flex flex-col divide-y divide-border/60 py-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link[locale].href}
                  href={`/${link[locale].href}`.replace(/\/{2,}/g, "/")}
                  onClick={() => setIsOpen(false)}
                  className="group flex translate-y-0 items-center justify-between px-6 py-3.5 text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-muted hover:text-primary"
                  style={{
                    transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                  }}
                >
                  {link[locale].title}
                  <ChevronDown className="size-4 -rotate-90 text-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:text-primary rtl:rotate-90" />
                </Link>
              ))}
            </nav>

            <div className="space-y-3 border-t bg-muted/40 p-4">
              <div className="flex gap-2">
                <a
                  href="tel:920012345"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-card py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                >
                  <Phone className="size-4" />
                  {locale === "en" ? "Call Us" : "اتصل بنا"}
                </a>
                <a
                  href="https://wa.me/920012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-card py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>

              <Button className="w-full gap-2 rounded-full py-6 shadow-sm">
                <HeartPulse className="size-4" />
                {dict.Buttons.book}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
