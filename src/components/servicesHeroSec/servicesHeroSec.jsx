import { CheckCircleIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr";

export default function ServicesHeroSec({ totalServices = 6 }) {
  return (
    <section className="relative pt-36 pb-16 bg-black overflow-hidden">
      {/* Soft blurred primary blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
          <SparkleIcon size={14} weight="fill" />
          Our Services
        </span>

        <h1 className="heading-h1 text-white">
          Digital Engineering,{" "}
          <span className="text-gradient">Built to Scale</span>
        </h1>

        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
          We engineer high-performance web applications, native-grade mobile apps, automated AI workflows, and enterprise cloud systems designed to accelerate revenue.
        </p>

        {/* Inline facts */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircleIcon size={18} weight="fill" className="text-primary" />
            <span>{totalServices} Core Specializations</span>
          </div>

          <div className="size-1 rounded-full bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <CheckCircleIcon size={18} weight="fill" className="text-primary" />
            <span>Zero-Obligation Discovery Call</span>
          </div>

          <div className="size-1 rounded-full bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <CheckCircleIcon size={18} weight="fill" className="text-primary" />
            <span>Dedicated Senior Engineers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
