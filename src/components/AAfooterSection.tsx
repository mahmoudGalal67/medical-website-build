"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const footerLinks = {
  Services: [
    "Teeth Whitening",
    "Dental Implants",
    "Orthodontics",
    "Veneers & Crowns",
    "Laser Treatment",
    "Aesthetic Medicine",
  ],
  "Quick Links": [
    "About Us",
    "Our Doctors",
    "Special Offers",
    "Equipment",
    "Gallery",
    "Book Appointment",
  ],
};

export default function FooterSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <footer id="contact" className="bg-primary">
      {/* Contact banner */}
      <div
        ref={ref}
        className={`bg-gradient-to-r from-accent to-primary2 py-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-primary font-bold text-2xl sm:text-3xl">
              Ready for Your Perfect Smile?
            </h3>
            <p className="text-white mt-1">
              Book a free consultation today and take the first step toward
              confidence.
            </p>
          </div>
          <a
            href="tel:+966500000000"
            className="flex items-center gap-2 bg-primary hover:bg-primary2 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 whitespace-nowrap shadow-lg"
          >
            <Phone size={16} />
            Call Now: +966 50 000 0000
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary2 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <div>
                <p className="text-white font-bold">Al Awali</p>
                <p className="text-accent text-xs">Dental & Beauty Clinic</p>
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed mb-6">
              Your trusted partner for premium dental and aesthetic care.
              Delivering excellence with compassion since 2009.
            </p>
            <div className="flex gap-3"></div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-accent text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-white text-sm">
                  Al Awali District, Riyadh, Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+966500000000"
                  className="text-white hover:text-accent text-sm transition-colors duration-200"
                >
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@alawali.com"
                  className="text-white hover:text-accent text-sm transition-colors duration-200"
                >
                  info@alawali.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  size={16}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-white text-sm">
                  Sat–Thu: 9:00 AM – 10:00 PM
                  <br />
                  Friday: 4:00 PM – 10:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white text-xs">
            &copy; 2024 Al Awali Dental & Beauty Clinic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:text-accent text-xs transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white hover:text-accent text-xs transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
