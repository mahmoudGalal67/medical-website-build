"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d004d]/85 via-[#3d0066]/75 to-[#2d004d]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d004d]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#c9a227]/20 opacity-60 hidden lg:block" />
      <div className="absolute top-32 right-32 w-40 h-40 rounded-full border border-[#c9a227]/10 hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-32 h-32 rounded-full bg-[#c9a227]/10 blur-xl hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center lg:text-left">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="inline-block bg-[#c9a227]/20 border border-[#c9a227]/40 text-[#f0d060] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ transitionDelay: "200ms" }}
          >
            Premium Medical Care
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Al Awali
          <br />
          <span className="text-[#c9a227]">Dental & Beauty</span>
          <br />
          <span className="text-white/90 text-3xl sm:text-4xl lg:text-5xl font-light">
            Clinic
          </span>
        </h1>

        <p
          className={`text-white/75 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Providing world-class dental and aesthetic treatments with
          cutting-edge technology and compassionate care. Your perfect smile is
          our mission.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a227] hover:bg-[#b8911e] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#c9a227]/30 hover:shadow-[#c9a227]/50 hover:-translate-y-0.5"
          >
            Discover More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-[#c9a227] text-white hover:text-[#c9a227] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-[#c9a227] transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
