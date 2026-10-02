import Image from "next/image";
import { TechStackData } from "@/Data";
import clsx from "clsx";

export default function TechStackSec() {
  return (
    <section className="py-24 bg-tint-black relative overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/15 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest">
            Technology Ecosystem
          </span>
          <h2 className="heading-h2 text-white">Technologies We <span className="text-gradient">Build With</span></h2>
          <p className="text-base text-white/60">
            We integrate with trusted platforms to create reliable, scalable business systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8">
          {TechStackData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="relative flex items-center justify-center h-14 mb-4 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={56}
                  height={56}
                  className={clsx(
                    "max-w-full max-h-full object-contain transition-all duration-300",
                    "brightness-0 invert"
                  )}
                />
              </div>
              <div className="text-sm font-medium text-white/70 group-hover:text-primary transition-colors duration-300">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
