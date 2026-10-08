import Link from "next/link";
import {
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeSimpleIcon,
  ArrowRightIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { getServiceIcon } from "@/lib/serviceIcons";

export default function ServiceOverviewSec({ service }) {
  const stats = service.stats || [];
  const benefits = service.benefits || [];
  const deliverables = service.deliverables || [];

  return (
    <>
      {stats.length > 0 && (
        <section className="py-12 bg-tint-black border-y border-white/8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="py-4 md:py-0 px-6 text-center first:pl-0 last:pr-0"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-medium text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Overview & Benefits + Sticky Deliverables Sidebar ── */}
      <section className="py-24 bg-black relative" aria-labelledby="service-overview-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-16">

              {/* Overview Narrative */}
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
                  <SparkleIcon size={14} weight="fill" />
                  Overview
                </span>

                <h2 id="service-overview-heading" className="heading-h2 text-white">
                  Engineered for Impact, <span className="text-gradient">Built Without Shortcuts</span>
                </h2>

                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Key Benefits 2x2 Grid */}
              {benefits.length > 0 && (
                <div className="space-y-8 pt-8 border-t border-white/8">
                  <div>
                    <h3 className="heading-h4 text-white">
                      Key Business <span className="text-gradient">Benefits</span>
                    </h3>
                    <p className="mt-2 text-sm text-white/55">Why industry leaders choose our engineering approach.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, i) => {
                      const BenefitIcon = getServiceIcon(benefit.icon);

                      return (
                        <div
                          key={i}
                          className="flex gap-4 p-5 rounded-xl bg-tint-black border border-white/8 hover:border-primary/30 duration-300 group"
                        >
                          <div className="shrink-0 size-11 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white duration-300">
                            <BenefitIcon size={22} weight="bold" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white group-hover:text-primary duration-300">
                              {benefit.title}
                            </h4>
                            <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
                              {benefit.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">

              {/* Deliverables / At a Glance Card */}
              <div className="rounded-2xl p-6 sm:p-7 bg-tint-black-2 border border-white/10 shadow-xl space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-primary uppercase tracking-widest block mb-1">
                    Project Deliverables
                  </span>
                  <h3 className="heading-h5 text-white">What You Receive</h3>
                </div>

                {deliverables.length > 0 && (
                  <ul className="space-y-3.5 pt-2 border-t border-white/8">
                    {deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white/75">
                        <CheckCircleIcon
                          size={20}
                          weight="fill"
                          className="text-primary shrink-0 mt-0.5"
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-b from-primary-start to-primary-end text-white text-sm font-bold hover:opacity-95 duration-300 shadow-md shadow-primary/20"
                >
                  <span>Request Project Scope</span>
                  <ArrowRightIcon size={16} weight="bold" />
                </Link>
              </div>

              {/* Direct Contact Card */}
              <div className="rounded-2xl p-6 bg-tint-black border border-white/8 space-y-4">
                <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                  Speak Directly With Engineers
                </h4>

                <div className="space-y-3 text-sm">
                  <Link
                    href="tel:+442046205555"
                    className="flex items-center gap-3 text-white/70 hover:text-primary duration-300 group"
                  >
                    <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/40 duration-300">
                      <PhoneIcon size={16} weight="bold" />
                    </div>
                    <span>+44 20 4620 5555</span>
                  </Link>

                  <Link
                    href="mailto:info@fidayincorporate.io"
                    className="flex items-center gap-3 text-white/70 hover:text-primary duration-300 group truncate"
                  >
                    <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/40 duration-300 shrink-0">
                      <EnvelopeSimpleIcon size={16} weight="bold" />
                    </div>
                    <span className="truncate">info@fidayincorporate.io</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
