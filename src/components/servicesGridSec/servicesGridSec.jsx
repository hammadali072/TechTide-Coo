"use client";

import { useState, useTransition } from "react";
import ServiceCard from "@/components/serviceCard/serviceCard";
import clsx from "clsx";

export default function ServicesGridSec({ services = [], categories = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isPending, startTransition] = useTransition();

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  const handleCategorySelect = (categoryName) => {
    startTransition(() => {
      setSelectedCategory(categoryName);
    });
  };

  return (
    <section className="py-20 bg-tint-black relative" aria-labelledby="services-grid-heading">
      <div className="container relative z-10">
        <h2 id="services-grid-heading" className="sr-only">
          Services Directory
        </h2>

        {/* Category Filter Chips Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar pb-4 mb-12 gap-2.5">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-tint-black-2 border border-white/8 shrink-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.name;

              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => handleCategorySelect(cat.name)}
                  aria-pressed={isActive}
                  className={clsx(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-primary-start to-primary-end text-black shadow-md shadow-primary/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span>{cat.name}</span>
                  <span
                    className={clsx(
                      "px-1.5 py-0.5 rounded-full text-[10px] font-bold transition-colors",
                      isActive
                        ? "bg-black/20 text-black"
                        : "bg-white/10 text-white/60"
                    )}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300",
            isPending ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"
          )}
        >
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                variant="default"
              />
            ))
          ) : (
            <div className="col-span-full py-16 text-center rounded-2xl border border-dashed border-white/15 bg-white/5">
              <p className="text-white/60 text-sm">
                No services found for the selected category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
