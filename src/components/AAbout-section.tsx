"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Advanced dental technology & equipment",
  "Board-certified specialist doctors",
  "Sterile & comfortable environment",
  "Affordable treatment packages",
  "Flexible appointment scheduling",
];

export default function AboutSection() {
  const { ref, isVisible } = useIntersection(0.15);

  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-900 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary">
              <img
                src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Doctor"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d004d]/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-5 shadow-xl shadow-primary/30">
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-xs text-purple-200 mt-0.5">
                Years of Excellence
              </p>
            </div>
            <div className="absolute -top-6 -left-6 bg-primary2 text-white rounded-2xl p-4 shadow-xl">
              <p className="text-2xl font-bold">3K+</p>
              <p className="text-xs font-medium mt-0.5">Patients Served</p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-900 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d004d] mt-3 mb-5 leading-tight">
              Your Trusted Partner in Dental & Aesthetic Health
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Al Awali Clinic is a leading dental and beauty center committed to
              delivering exceptional care through the latest medical
              technologies. Our team of experienced specialists works with
              dedication to ensure every patient receives personalized,
              high-quality treatment in a warm and professional environment.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From routine checkups to complex cosmetic procedures, we offer a
              comprehensive range of services tailored to meet your unique needs
              and help you achieve the smile and confidence you deserve.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                >
                  <CheckCircle
                    size={18}
                    className="text-white flex-shrink-0"
                  />
                  {h}
                </li>
              ))}
            </ul>

            <a
              href="#doctors"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#2d004d] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/30"
            >
              Meet Our Team
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
