import Link from "next/link";
import { ArrowRightIcon, SparkleIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";

export default function SupportSec() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container relative z-10">
        <div className="bg-gradient-to-r from-tint-black-2 via-black to-tint-black-2 border border-white/10 rounded-2xl p-8 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
              <SparkleIcon size={16} weight="fill" />
              <span>Ready To Scale Your Digital Infrastructure?</span>
            </span>

            <h2 className="heading-h2 text-white">
              Let's Build Something <span className="text-gradient">Extraordinary</span> Together
            </h2>

            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Schedule a technical strategy call with our engineering leaders to discuss your product architecture, timeline, and growth goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-semibold text-base shadow-xl shadow-primary/25 hover:opacity-95 transition-all hover:scale-[1.02]"
              >
                <span>Book Strategy Call</span>
                <ArrowRightIcon size={18} weight="bold" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-base hover:bg-white/10 transition-all"
              >
                <EnvelopeSimpleIcon size={18} weight="bold" />
                <span>Contact Engineering Team</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-white/60">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Instant Response Within 24 Hours
              </span>
              <span>•</span>
              <span>Free Technical Feasibility Audit</span>
              <span>•</span>
              <span>Direct Enterprise CRM Routing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
