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
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-black">
      {/* Background Ambient Glowing Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary-start/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
              <SparkleIcon size={16} className="text-primary" weight="fill" />
              <span>Next-Gen Enterprise Digital Solutions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="heading-h1">
              Engineering High-Performance{" "}
              <span className="text-gradient">Digital Products</span> & AI Systems
            </h1>

            {/* Subcopy */}
            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              We partner with visionary enterprises and scaling startups to architect web applications, mobile platforms, and automated cloud workflows that deliver scalable, measurable business outcomes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white text-base font-semibold shadow-xl shadow-primary/25 hover:opacity-95 transition-all hover:scale-[1.02]"
              >
                <span>Book Strategy Call</span>
                <ArrowRightIcon size={18} weight="bold" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-base font-medium hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white flex items-center gap-1">
                  <span>99.9%</span>
                </div>
                <div className="text-xs text-white/60">System Reliability</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-gradient">50+</div>
                <div className="text-xs text-white/60">Projects Shipped</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white">3x-5x</div>
                <div className="text-xs text-white/60">Growth ROI</div>
              </div>
            </div>
          </div>

          {/* Hero Right Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Card Glass Container */}
              <div className="relative rounded-2xl bg-tint-black-2 border border-white/10 p-3 shadow-2xl overflow-hidden group">
                <Image
                  src="/assets/Dashboard-Growth.webp"
                  alt="TechTide Growth Analytics Dashboard"
                  width={600}
                  height={450}
                  className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />

                {/* Floating Stat Badge Top Right */}
                <div className="absolute top-6 right-6 bg-tint-black-tint/90 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-xl flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <CheckCircleIcon size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Enterprise SLA</div>
                    <div className="text-sm font-semibold text-white">Active Protection</div>
                  </div>
                </div>

                {/* Floating Stat Badge Bottom Left */}
                <div className="absolute bottom-6 left-6 bg-tint-black-tint/90 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-xl flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <LightningIcon size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Execution Speed</div>
                    <div className="text-sm font-semibold text-white">Agile Sprints</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
