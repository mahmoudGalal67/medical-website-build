"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Tag, ArrowRight } from "lucide-react";

const offers = [
  {
    title: "Teeth Whitening",
    subtitle: "Professional Laser Whitening",
    description:
      "Get a brilliant white smile with our advanced laser whitening technology. Safe, effective, and long-lasting results guaranteed.",
    discount: "30% OFF",
    price: "From SAR 699",
    originalPrice: "SAR 999",
    image:
      "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Most Popular",
  },
  {
    title: "Dental Veneers",
    subtitle: "Hollywood Smile Package",
    description:
      "Transform your smile with custom porcelain veneers crafted to perfection. Natural look, lasting confidence.",
    discount: "20% OFF",
    price: "From SAR 2,499",
    originalPrice: "SAR 3,199",
    image:
      "https://images.pexels.com/photos/3762454/pexels-photo-3762454.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Limited Time",
  },
  {
    title: "Teeth Cleaning",
    subtitle: "Deep Scaling & Polishing",
    description:
      "Comprehensive deep cleaning session that removes tartar, plaque, and stains for a healthier mouth.",
    discount: "40% OFF",
    price: "From SAR 299",
    originalPrice: "SAR 499",
    image:
      "https://images.pexels.com/photos/3845547/pexels-photo-3845547.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Best Value",
  },
];

export default function OffersSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section id="offers" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary2 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Tag size={14} />
            Special Offers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d004d] mt-2">
            Exclusive Deals for You
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Take advantage of our limited-time offers on premium dental and
            aesthetic treatments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
                <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                  {offer.badge}
                </div>
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-primary to-primary2 p-6">
                <p className="text-primary2 text-xs font-semibold uppercase tracking-wider mb-1">
                  {offer.subtitle}
                </p>
                <h3 className="text-white font-bold text-xl mb-3">
                  {offer.title}
                </h3>
                <p className="text-purple-200/70 text-sm leading-relaxed mb-5">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">
                      {offer.price}
                    </p>
                    <p className="text-purple-300/60 text-sm line-through">
                      {offer.originalPrice}
                    </p>
                  </div>
                  <button className="flex items-center gap-1.5 bg-primary hover:bg-primary2 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow">
                    Book Now
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
