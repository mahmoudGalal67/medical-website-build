"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle, Siren, HeartPulse } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useDictionary } from "@/providers/dictionary-provider";



const navLinks : { en: { title: string; href: string }, ar: { title: string; href: string } }[] = [
 {en:{title: "Home", href: "/"}, ar:{title: "الرئيسية", href: "/"}},
 {en:{title: "Departments", href: "en/Departements"}, ar:{title: "الأقسام", href: "ar/Departements"}},
 {en:{title: "Doctors", href: "en/doctors"}, ar:{title: "الأطباء", href: "ar/doctors"}},
 {en:{title: "Insurance", href: "en/insurance"}, ar:{title: "التأمين", href: "ar/insurance"}},
 {en:{title: "Packages", href: "en/packages"}, ar:{title: "الحزم", href: "ar/packages"}},
 {en:{title: "Blog", href: "en/blog"}, ar:{title: "المدونة", href: "ar/blog"}},
 {en:{title: "Booking", href: "en/booking"}, ar:{title: "الحجز", href: "ar/booking"}},
 {en:{title: "Contact Us", href: "en/contact"}, ar:{title: "اتصل بنا", href: "ar/contact"}},
];


export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] =  useState<"en" | "ar">(  params.locale === "ar" ? "ar" : "en");
  const dict = useDictionary();

  const switchLanguage = (lang: "en" | "ar") => {
    const newPath = `/${lang}${pathname.substring(3)}`;
    router.push(newPath);

    setLocale(lang)

  };



  return (
    <header className="max-w-7xl mx-auto" >
      {/* Top Utility Bar */}
      <div className="text-white" dir="ltr">
        <div className="bg-primary2 mx-auto flex h-9 max-w-7xl items-center justify-between rounded-t-xl px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium text-red-400">
              <Siren className="size-3.5" />
              Emergency 24/7
            </span>

            <span className="hidden items-center gap-1.5 sm:flex">
              <Phone className="size-3.5" />
              9200 12345
            </span>

            <span className="hidden items-center gap-1.5 md:flex">
              <MessageCircle className="size-3.5" />
              WhatsApp Us
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button dir="rtl" className={`opacity-90 cursor-pointer hover:opacity-100 ${locale === 'ar' ? 'text-primary' : ''}`} onClick={() => switchLanguage('ar')}>
              العربية
            </button>

            <span className="opacity-40">|</span>

            <button className={`font-medium opacity-90 cursor-pointer hover:opacity-100 ${locale === 'en' ? 'text-primary' : ''}`} onClick={() => switchLanguage('en')}>
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex shrink-0 items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <HeartPulse className="size-5" />
            </span>
<Image src="/Logo.jpeg" alt="HealthCare Booking" width={80} height={30} />
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden items-center gap-8 xl:flex">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link[locale].href}
                  href={`/${link[locale].href}`}
                  className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link[locale].title}
                </Link>
              ))}
            </nav>

            <Button className="rounded-full px-6">
              {dict.Buttons.book}
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button size="sm" className="rounded-full px-4">
              {locale === "en" ? "Book" : "احجز"
              }
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="relative flex h-10 w-10 items-center justify-center"
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

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 xl:hidden ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t bg-background">
            <nav className="flex flex-col py-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link[locale].href}
                  href={link[locale].href}
                  onClick={() => setIsOpen(false)}
                  className="translate-y-0 px-6 py-3 text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-muted hover:text-primary"
                  style={{
                    transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                  }}
                >
                  {link[locale].title}
                </Link>
              ))}
            </nav>

            <div className="border-t p-4">
              <Button className="w-full rounded-full">
                {dict.Buttons.book}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
