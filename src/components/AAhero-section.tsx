"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  const images = [
  "tweq.jpeg",
  "tweq.jpeg",
  "tweq.jpeg",
  "tweq.jpeg",
];
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);


const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

const scrollToBranches = () => {
  document.getElementById("branches")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (
    <section
      id="hero"
      className="relative py-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
    <div className="absolute inset-0 overflow-hidden">
  {images.map((image, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
        current === index ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={image}
        className="w-full h-full object-cover scale-100 animate-slow-zoom"
      />
    </div>
  ))}

  <div className="absolute inset-0 bg-primary/70" />
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
            className="inline-block bg-primary2/20 border border-primary2/40 text-primary2 text-md font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ transitionDelay: "200ms" }}
          >
           رعاية طبية متميزة

          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          سند الجزبرة
          <br />
          <span className="text-primary2">الجمال والعناية</span>
          <br />
          <span className="text-white/90 text-2xl sm:text-4xl lg:text-4xl font-light">
            
          </span>
        </h1>

        <p
          className={`text-white/75 text-base sm:text-md max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
         نقدم علاجات أسنان وتجميل بمستوى عالمي، معتمدين على تقنيات متطورة ورعاية تتسم بالاهتمام والتعاطف؛ فابتسامتك المثالية هي غايتنا.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center  transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
  onClick={scrollToBranches}
            className="inline-flex cursor-pointer items-center justify-center gap-2 bg-primary2 hover:bg-primary text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-primary2/30 hover:shadow-primary2/50 hover:-translate-y-0.5"
          >
          اكتشف المزيد

          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:bg-primary2 text-white hover:text-primary font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
حجز موعد
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 180"
    preserveAspectRatio="none"
    className="w-full h-[180px] md:block hidden"
  >
    <path
      fill="#47A9B8"
      d="M0,0 C300,170 1140,170 1440,0 L1440,180 L0,180 Z"
    />
  </svg>
</div>

      {/* Scroll indicator */}
  <button
         onClick={scrollToBranches}
        className="absolute bottom-8 left-1/2 cursor-pointer -translate-x-1/2 text-white/60 hover:text-primary2 transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
