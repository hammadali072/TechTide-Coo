import { HowWeWorkData } from "@/Data";
import { MagnifyingGlassIcon, CodeIcon, RocketLaunchIcon, TrendUpIcon } from "@phosphor-icons/react/dist/ssr";

const iconMap = {
  MagnifyingGlassIcon,
  CodeIcon,
  RocketLaunchIcon,
  TrendUpIcon,
};

export default function HowWeWorkSec() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Our Proven Methodology
          </span>
          <h2 className="heading-h2 text-white">
            How We Turn Ideas Into <span className="text-gradient">Scalable Software</span>
          </h2>
          <p className="text-base text-white/70">
            A structured, transparent engineering process designed to deliver predictable timelines and flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HowWeWorkData.map((step, idx) => {
            const IconComp = iconMap[step.icon] || CodeIcon;
            return (
              <div
                key={idx}
                className="bg-tint-black-2 border border-white/10 rounded-2xl p-6 relative hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <IconComp size={24} weight="bold" />
                  </div>
                  <span className="text-3xl font-black text-white/15 group-hover:text-primary/30 transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="heading-h5 text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
