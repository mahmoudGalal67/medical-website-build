"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle, Siren, HeartPulse } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
  "Home",
  "About Us",
  "Departments",
  "Doctors",
  "Insurance",
  "Packages",
  "Blog",
  "Booking",
  "Contact Us",
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-7xl mx-auto">
      {/* Top Utility Bar */}
      <div className="text-white">
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
            <button dir="rtl" className="opacity-90 hover:opacity-100">
              العربية
            </button>

            <span className="opacity-40">|</span>

            <button className="font-medium opacity-90 hover:opacity-100">
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <HeartPulse className="size-5" />
            </span>

            <span className="flex flex-col leading-none">
              <span
                className="text-sm font-bold text-primary lg:text-base"
                dir="rtl"
              >
                مركز الرفاه الطبي
              </span>

              <span className="text-[10px] tracking-[0.18em] text-muted-foreground">
                AL REFAH MEDICAL CENTER
              </span>
            </span>
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden items-center gap-8 xl:flex">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={link}
                  className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link}
                </Link>
              ))}
            </nav>

            <Button className="rounded-full px-6">Book Appointment</Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button size="sm" className="rounded-full px-4">
              Book
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
                  key={link}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="translate-y-0 px-6 py-3 text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-muted hover:text-primary"
                  style={{
                    transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                  }}
                >
                  {link}
                </Link>
              ))}
            </nav>

            <div className="border-t p-4">
              <Button className="w-full rounded-full">Book Appointment</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
