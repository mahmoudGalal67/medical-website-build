"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { reviews } from "@/data/reviwes";
import { Quote, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function TestimonialsSection() {
  const { ref, isVisible } = useIntersection(0.15);

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary2 py-24 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary2 text-sm font-semibold uppercase tracking-widest">
            قصص المرضى
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            ما يقوله مرضانا
          </h2>

          <p className="text-purple-200/70 mt-3 max-w-xl mx-auto">
            تجارب حقيقية لمرضى حقيقيين وضعوا ثقتهم بنا وبابتساماتهم.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg p-8 hover:bg-white/15 transition-all duration-300">

                <Quote
                  size={36}
                  className="absolute top-6 left-6 text-primary2"
                />

                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className="fill-[#FFD700] text-[#FFD700]"
                    />
                  ))}
                </div>

                <p className="text-white/90 leading-8 mb-8 min-h-[170px]">
                  "{review.review}"
                </p>

                <div className="border-t border-white/10 pt-5 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">
                      {review.name}
                    </h4>

                    <span className="text-sm text-white/60">
                      {review.date}
                    </span>
                  </div>

                  <div className="h-12 w-12 rounded-full bg-primary2 flex items-center justify-center font-bold text-primary text-lg">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}