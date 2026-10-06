"use client";

import { useState, useEffect, useRef } from "react";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

/**
 * Reusable FAQ accordion component.
 * Props: tag, title, subtitle, items: [{ question, answer }]
 */
export default function Faq({ tag, title, subtitle, items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const [contentHeights, setContentHeights] = useState([]);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  useEffect(() => {
    const heights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setContentHeights(heights);
  }, [openIndex]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            {tag && (
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
                {tag}
              </span>
            )}
            {title && <h2 className="heading-h2 text-white">{title}</h2>}
            {subtitle && (
              <p className="text-base text-white/60 leading-relaxed">{subtitle}</p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              const num = `0${idx + 1}`;

              return (
                <div
                  key={idx}
                  className={clsx(
                    "border border-b-4 rounded-2xl lg:p-6 p-4 duration-300 group",
                    isOpen
                      ? "bg-primary/8 border-primary"
                      : "border-white/10 bg-tint-black-2 hover:border-primary/40"
                  )}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-4 items-center">
                      <span
                        className={clsx(
                          "text-3xl lg:text-5xl font-black leading-none select-none duration-300 shrink-0",
                          isOpen ? "text-primary" : "text-stroke-outlined group-hover:text-stroke-outlined-hover"
                        )}
                      >
                        {num}
                      </span>

                      <h3
                        className={clsx(
                          "text-base lg:text-lg font-semibold leading-snug duration-300",
                          isOpen ? "text-primary" : "text-white/80 group-hover:text-primary"
                        )}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={clsx(
                        "flex items-center justify-center shrink-0 size-9 lg:size-10 rounded-lg duration-300",
                        isOpen
                          ? "bg-primary"
                          : "bg-white/8 text-white group-hover:bg-primary"
                      )}
                    >
                      <PlusIcon
                        size={18}
                        weight="bold"
                        className={clsx("duration-300", isOpen ? "rotate-45" : "rotate-0")}
                      />
                    </div>
                  </button>

                  <div
                    ref={(el) => (contentRefs.current[idx] = el)}
                    style={{
                      height: isOpen ? `${contentHeights[idx]}px` : "0px",
                    }}
                    className={clsx(
                      "border-t border-white/10 overflow-hidden duration-500 ease-in-out",
                      isOpen ? "opacity-100 mt-4" : "opacity-0 mt-0"
                    )}
                  >
                    <p className="lg:pr-16 pr-8 pt-3 text-sm text-white/60 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
