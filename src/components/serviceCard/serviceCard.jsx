"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { getServiceIcon } from "@/lib/serviceIcons";
import clsx from "clsx";

export default function ServiceCard({ service, index = 0, variant = "default" }) {
  const cardRef = useRef(null);
  const IconComponent = getServiceIcon(service.icon);
  const isCompact = variant === "compact";
  const num = `0${index + 1}`.slice(-2);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <Link
      href={`/services/${service.slug}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative block p-px rounded-2xl bg-gradient-to-b from-white/12 to-white/4 hover:from-primary/60 hover:to-primary/10 duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
      style={{
        "--mx": "50%",
        "--my": "0%",
      }}
    >
      <div className="relative h-full flex flex-col justify-between rounded-[15px] bg-tint-black-2 overflow-hidden p-5 sm:p-6">
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 duration-300 motion-reduce:hidden"
          style={{
            background:
              "radial-gradient(400px circle at var(--mx) var(--my), rgba(255, 96, 0, 0.12), transparent 70%)",
          }}
        />

        <div className="relative z-10 space-y-5">
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/40">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tint-black-2 via-transparent to-black/30" />
            <div className="absolute top-3.5 left-3.5 p-2.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-primary shadow-md">
              <IconComponent size={20} weight="bold" />
            </div>
            <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white/80 tracking-wider uppercase">
              {service.category}
            </div>
          </div>
          <div className="relative">
            {!isCompact && (
              <span className="absolute top-0 right-0 text-3xl font-black select-none text-stroke-outlined group-hover:text-stroke-outlined-hover duration-300 pointer-events-none">
                {num}
              </span>
            )}

            <h3 className="heading-h5 text-white pr-10 group-hover:text-primary duration-300">
              {service.title}
            </h3>

            <p className="mt-2.5 text-sm text-white/60 leading-relaxed line-clamp-2">
              {service.shortDesc}
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-5 mt-5 border-t border-white/8 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/60 group-hover:text-primary duration-300">
            Learn more
          </span>

          <div className="size-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary duration-300">
            <ArrowRightIcon
              size={15}
              weight="bold"
              className="duration-300 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
