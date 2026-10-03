import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function AboutCTASec() {
  return (
    <section className="py-24 bg-tint-black-2 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/6 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
          Work With Us
        </span>

        <h2 className="heading-h2 text-white">
          Let&rsquo;s Build the{" "}
          <span className="text-gradient">Future Together</span>
        </h2>

        <p className="text-base text-white/60 leading-relaxed">
          Whether you&rsquo;re a startup with a bold idea or an enterprise ready to scale, we have the expertise to turn your vision into a market-leading digital product.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-black text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
        >
          Get in Touch
          <ArrowRightIcon size={16} weight="bold" />
        </Link>
      </div>
    </section>
  );
}
