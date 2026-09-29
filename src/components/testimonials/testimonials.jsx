"use client";

import { useState } from "react";
import { TestimonialsData } from "@/Data";
import { QuotesIcon, StarIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TestimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TestimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = TestimonialsData[currentIndex] || TestimonialsData[0];

  return (
    <section className="py-20 bg-tint-black-2 border-y border-white/10 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="heading-h2 text-white">
            Trusted By <span className="text-gradient">Innovative Teams</span> Worldwide
          </h2>
          <p className="text-base text-white/70">
            Hear directly from founders and engineering leaders who scaled their products with TechTide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black border border-white/10 rounded-2xl p-8 lg:p-12 relative shadow-2xl">
            <QuotesIcon size={48} className="text-primary/30 mb-6" weight="fill" />

            <div className="space-y-6">
              <div className="flex gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <StarIcon key={i} size={20} weight="fill" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-white font-medium leading-relaxed italic">
                "{current.quote}"
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-white">{current.author}</div>
                  <div className="text-xs text-white/60">{current.role}</div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-primary hover:border-primary/50 transition-all"
                    aria-label="Previous testimonial"
                  >
                    <CaretLeftIcon size={20} weight="bold" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-primary hover:border-primary/50 transition-all"
                    aria-label="Next testimonial"
                  >
                    <CaretRightIcon size={20} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
