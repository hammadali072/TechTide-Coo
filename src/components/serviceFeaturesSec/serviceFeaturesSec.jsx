import { SparkleIcon, TrendUpIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";

export default function ServiceFeaturesSec({ service }) {
  const features = service.features || [];
  const outcomes = service.outcomes || [];

  return (
    <section className="py-24 bg-tint-black relative" aria-labelledby="service-features-heading">
      <div className="container">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            <SparkleIcon size={14} weight="fill" />
            Capabilities & Results
          </span>

          <h2 id="service-features-heading" className="heading-h2 text-white">
            What&rsquo;s Included & <span className="text-gradient">Measurable Outcomes</span>
          </h2>

          <p className="text-base text-white/60 leading-relaxed">
            Every engagement includes rigorous architectural standards, automated testing, and guaranteed performance benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Features Tiles (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-bold text-white/70 uppercase tracking-widest mb-6">
              Included Engineering Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => {
                const num = `0${idx + 1}`.slice(-2);

                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-tint-black-2 border border-white/8 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between min-h-[120px]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-stroke-outlined group-hover:text-stroke-outlined-hover duration-300 select-none">
                        {num}
                      </span>
                      <div className="size-6 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                        <CheckIcon size={12} weight="bold" />
                      </div>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-white/85 group-hover:text-white transition-colors leading-snug">
                      {feature}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Outcomes Highlight Panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-7 md:p-8 border border-primary/25 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary text-black">
                    <TrendUpIcon size={22} weight="bold" />
                  </div>
                  <div>
                    <h3 className="heading-h5 text-white">Results You Can Expect</h3>
                    <p className="text-xs text-white/60">Verified business ROI</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  {outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3.5"
                    >
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_8px] shadow-primary" />
                      <p className="text-sm font-medium text-white/90 leading-relaxed">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-white/50 flex items-center gap-2">
                  <SparkleIcon size={14} className="text-primary" />
                  <span>Backed by our code quality and performance SLA.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
