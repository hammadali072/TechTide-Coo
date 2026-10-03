"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HowWeWorkData } from "@/Data";
import {
  MagnifyingGlassIcon,
  CodeIcon,
  RocketLaunchIcon,
  TrendUpIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

const iconMap = {
  MagnifyingGlassIcon,
  CodeIcon,
  RocketLaunchIcon,
  TrendUpIcon,
};

export default function HowWeWorkSec() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, idx) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex((prev) => Math.max(prev, idx));
          }
        },
        { threshold: 0.45 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="relative py-24 bg-tint-black-2">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div className="self-start lg:sticky lg:top-28 space-y-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              How We Work
            </span>

            <h2 className="heading-h2 text-white">
              How We Turn Ideas Into{" "}
              <span className="text-gradient">Scalable Software</span>
            </h2>

            <p className="text-base text-white/60 leading-relaxed">
              A structured, transparent engineering process designed to deliver predictable timelines and flawless execution.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary-start to-primary-end text-black text-sm font-bold hover:bg-primary/90 transition-all w-fit"
            >
              Get Started
              <ArrowRightIcon size={16} weight="bold" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-white/8 hidden sm:block" />
            <div
              className="absolute left-5 top-5 w-px bg-gradient-to-b from-primary to-primary/20 hidden sm:block transition-all duration-700 ease-out"
              style={{
                height:
                  activeIndex < 0
                    ? "0%"
                    : activeIndex >= HowWeWorkData.length - 1
                      ? "calc(100% - 40px)"
                      : `calc(${((activeIndex + 0.5) / HowWeWorkData.length) * 100}% )`,
              }}
            />

            <div className="flex flex-col gap-8">
              {HowWeWorkData.map((step, idx) => {
                const IconComp = iconMap[step.icon] || CodeIcon;
                const isActive = idx <= activeIndex;

                return (
                  <div
                    key={step.num}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    className="flex gap-6 sm:gap-8 group"
                  >
                    <div className="hidden sm:flex flex-col items-center shrink-0 pt-1">
                      <div
                        className={clsx(
                          "size-10 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-500",
                          isActive
                            ? "border-primary bg-primary shadow-[0_0_12px_2px] shadow-primary/40"
                            : "border-white/15 bg-tint-black-2"
                        )}
                      >
                        <IconComp
                          size={18}
                          weight="bold"
                          className={clsx(
                            "transition-colors duration-500",
                            isActive ? "text-black" : "text-white/30"
                          )}
                        />
                      </div>
                    </div>

                    <div
                      className={clsx(
                        "flex-1 rounded-2xl p-6 border transition-all duration-500",
                        isActive
                          ? "bg-black border-primary/25 shadow-lg shadow-primary/5"
                          : "bg-tint-black-2 border-white/8"
                      )}
                    >
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3 block">
                        Step {step.num}
                      </span>

                      <h3
                        className={clsx(
                          "heading-h5 mb-3 transition-colors duration-500",
                          isActive ? "text-primary" : "text-white"
                        )}
                      >
                        {step.title}
                      </h3>

                      <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
