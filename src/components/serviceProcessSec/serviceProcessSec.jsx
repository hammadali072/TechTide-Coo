import { SparkleIcon } from "@phosphor-icons/react/dist/ssr";

export default function ServiceProcessSec({ service }) {
  const processSteps = service.process || [];

  if (processSteps.length === 0) return null;

  return (
    <section className="py-24 bg-black relative overflow-hidden" aria-labelledby="service-process-heading">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            <SparkleIcon size={14} weight="fill" />
            Execution Roadmap
          </span>

          <h2 id="service-process-heading" className="heading-h2 text-white">
            How We Execute Your <span className="text-gradient">Project</span>
          </h2>

          <p className="text-base text-white/60 leading-relaxed">
            A structured, predictable 4-phase delivery framework tailored specifically to {service.title.toLowerCase()}.
          </p>
        </div>

        {/* Desktop 4-column timeline / Mobile vertical timeline */}
        <div className="relative">
          {/* Desktop horizontal connector line */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-white/10 z-0" />

          {/* Mobile vertical connector line */}
          <div className="lg:hidden absolute top-6 bottom-6 left-6 w-px bg-white/10 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex lg:flex-col gap-6 lg:gap-6 group relative"
              >
                {/* Step Circle */}
                <div className="shrink-0 size-12 lg:size-14 rounded-full bg-tint-black-2 border-2 border-white/15 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300 shadow-lg">
                  <span className="text-sm lg:text-base font-extrabold text-white group-hover:text-black transition-colors duration-300">
                    {step.num}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1 p-6 rounded-2xl bg-tint-black-2 border border-white/8 group-hover:border-primary/30 transition-colors duration-300 space-y-3">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-widest block">
                    Phase {step.num}
                  </span>
                  <h3 className="heading-h5 text-white group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
