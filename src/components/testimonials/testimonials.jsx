"use client";

import { TestimonialsData } from "@/Data";
import { QuotesIcon } from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="py-24 bg-tint-black relative overflow-hidden">
      <div className="container-fluid">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="heading-h2 text-white">
            Trusted By <span className="text-gradient">Innovative Teams</span> Worldwide
          </h2>
          <p className="text-base text-white/70">
            Hear directly from founders and engineering leaders who scaled their products with FidayinCorporate.
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          speed={700}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".testimonial-pagination" }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className="!pb-14"
        >
          {TestimonialsData.map((item, idx) => (
            <SwiperSlide key={item.id || idx} className="!h-auto">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonial-pagination flex justify-center gap-2 mt-2 [&_.swiper-pagination-bullet]:bg-white/20 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet]:duration-300" />
      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="h-full bg-tint-black-2 border border-white/8 rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/25 duration-300 group">
      <QuotesIcon
        size={44}
        weight="fill"
        className="text-primary/80 shrink-0 -mb-2 rotate-180"
      />
      <p className="text-base text-white/85 leading-relaxed flex-1">&ldquo;{item.quote}&rdquo;</p>
      <div className="border-t border-white/8 pt-5">
        <div className="space-y-0.5">
          <div className="text-base font-bold text-white">{item.author}</div>
          <div className="text-xs text-white/55">{item.role}</div>
        </div>
      </div>
    </article>
  );
}
