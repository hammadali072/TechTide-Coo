import Link from "next/link";
import { ArrowRightIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr";

export default function ServiceCtaSec({
  pill = "Work With Us",
  title = "Not sure which service fits?",
  accent = "Let's Talk",
  desc = "Book a quick 15-minute discovery call with our software architects. We'll evaluate your project scope and recommend the right roadmap.",
  primaryButtonText = "Schedule Discovery Call",
  primaryButtonHref = "/contact",
}) {
  return (
    <section className="py-24 bg-tint-black-2 relative overflow-hidden border-t border-white/8">
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/6 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-7">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
          <SparkleIcon size={14} weight="fill" />
          {pill}
        </span>

        <h2 className="heading-h2 text-white">
          {title} <span className="text-gradient">{accent}</span>
        </h2>

        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
          {desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href={primaryButtonHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-black text-sm font-bold hover:opacity-95 transition-all shadow-lg shadow-primary/25"
          >
            <span>{primaryButtonText}</span>
            <ArrowRightIcon size={16} weight="bold" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            About Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
