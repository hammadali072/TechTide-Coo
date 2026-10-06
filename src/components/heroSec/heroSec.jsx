import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  SparkleIcon,
  LightningIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function HeroSec() {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-30 overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center lg:gap-8 gap-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
            <SparkleIcon size={16} className="text-primary" weight="fill" />
            <span>Next-Gen Enterprise Digital Solutions</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>

          <h1 className="heading-h1">
            Engineering High-Performance{" "}
            <span className="text-gradient">Digital Products</span> & AI Systems
          </h1>

          <p className="text-base md:text-lg text-white/70 max-w-[70%] leading-relaxed">
            We partner with visionary enterprises and scaling startups to architect web applications, mobile platforms, and automated cloud workflows that deliver scalable, measurable business outcomes.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-to-b from-primary-start to-primary-end text-white text-base font-semibold shadow-xl shadow-primary/25 hover:opacity-95 hover:scale-[1.02] duration-300"
            >
              <span>Book Strategy Call</span>
              <ArrowRightIcon size={18} weight="bold" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white text-base font-medium hover:bg-white/10 hover:border-white/20 duration-300"
            >
              <span>Explore Services</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 w-full">
            <div className="space-y-1">
              <h6 className="text-2xl font-bold text-white">99.9%</h6>
              <p className="text-xs text-white/60">System Reliability</p>
            </div>
            <div className="space-y-1">
              <h6 className="text-2xl font-bold text-gradient">50+</h6>
              <p className="text-xs text-white/60">Projects Shipped</p>
            </div>
            <div className="space-y-1">
              <h6 className="text-2xl font-bold text-white">3x-5x</h6>
              <p className="text-xs text-white/60">Growth ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
