"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Star, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Al-Mansouri",
    specialty: "Cosmetic Dentistry",
    rating: 4.9,
    experience: "12 Years",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Dr. Ahmed Al-Rashidi",
    specialty: "Orthodontics",
    rating: 4.8,
    experience: "10 Years",
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Dr. Nora Al-Shammari",
    specialty: "Periodontics",
    rating: 4.9,
    experience: "8 Years",
    image:
      "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Dr. Khalid Al-Harbi",
    specialty: "Oral Surgery",
    rating: 4.7,
    experience: "15 Years",
    image:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Dr. Fatima Al-Zahrawi",
    specialty: "Aesthetic Medicine",
    rating: 4.9,
    experience: "9 Years",
    image:
      "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Dr. Omar Al-Otaibi",
    specialty: "Implantology",
    rating: 4.8,
    experience: "11 Years",
    image:
      "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function DoctorsSection({ doctors }: { doctors: any[] }) {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section id="doctors" className="bg-[#f8f0ff] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest">
            Our Medical Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d004d] mt-2">
            Meet Our Expert Doctors
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A dedicated team of certified specialists committed to your health
            and beauty.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-purple-200/60 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gold top bar */}
              <div className="h-2 bg-gradient-to-r from-[#c9a227] to-[#f0d060]" />

              <div className="p-6 flex flex-col items-center text-center">
                {/* Circular photo */}
                <div className="relative mb-5">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-lg shadow-[#c9a227]/20">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#3d0066] border-2 border-white flex items-center justify-center">
                    <Star size={12} className="text-[#c9a227] fill-[#c9a227]" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#2d004d] mb-1">
                  {doc.name}
                </h3>
                <p className="text-[#7c3aed] text-sm font-medium mb-3">
                  {doc.specialty}
                </p>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-5">
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-[#c9a227] fill-[#c9a227]" />
                    <span className="font-semibold text-gray-700">
                      {doc.rating}
                    </span>
                  </span>
                  <span className="w-px h-4 bg-gray-200" />
                  <span>{doc.experience}</span>
                </div>

                <button className="flex items-center gap-1.5 text-[#7c3aed] hover:text-[#3d0066] text-sm font-semibold transition-colors duration-200 group/btn">
                  View Profile
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
