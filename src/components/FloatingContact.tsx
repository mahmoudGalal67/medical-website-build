"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function FloatingContact() {
    const params = useParams();
  const locale = (params.locale || 'en') as string
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp */}

      <a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-green-300">
          <Image
            src="/whatsapp.png"
            alt="whatsapp"
            width={32}
            height={32}
            className="w-8 h-8 filter brightness-0 invert"
          />
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-white px-4 py-2 text-sm font-medium shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100">
          {locale === "ar" ? "دردشة على واتساب" : "Chat on WhatsApp"}
        </div>
      </a>

      {/* Call */}

      <a href="tel:+201234567890" className="group relative">
        <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-30" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-blue-300">
          <Phone className="h-8 w-8" />
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-white px-4 py-2 text-sm font-medium shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100">
          {locale === "ar" ? "اتصل بنا" : "Call Us"}
        </div>
      </a>
    </div>
  );
}
