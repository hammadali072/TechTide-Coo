import Image from "next/image";
import { CheckCircleIcon, RocketLaunchIcon, ShieldCheckIcon, LightningIcon } from "@phosphor-icons/react/dist/ssr";

export default function SolutionSec() {
  const solutions = [
    {
      title: "Sub-Second Static Export Architecture",
      desc: "Pre-rendered Next.js static pages served directly from global CDN nodes for zero latency and instant page loads.",
      icon: LightningIcon,
    },
    {
      title: "AI-Powered Automation Pipelines",
      desc: "Seamless integration of custom LLM agents and workflow automations that eliminate 70%+ of manual operational overhead.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Direct Enterprise CRM Integration",
      desc: "Inbound leads automatically verified, categorized, and funneled directly into your CRM with zero data loss.",
      icon: CheckCircleIcon,
    },
    {
      title: "Production-Grade Security & SLA",
      desc: "Robust code quality, clean architecture, automated testing, and guaranteed 99.9% uptime for continuous growth.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-tint-black-2 border border-white/10 p-4 shadow-2xl overflow-hidden group">
              <Image
                src="/assets/SAAS Image (1).webp"
                alt="TechTide Solution Architecture"
                width={550}
                height={420}
                className="rounded-xl w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="text-xs text-primary font-semibold uppercase tracking-wider">The TechTide Edge</div>
                <div className="text-base font-bold text-white mt-1">Enterprise-Grade Performance Engineered for Scale</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              The TechTide Solution
            </span>
            <h2 className="heading-h2 text-white">
              Modern Digital Engineering <span className="text-gradient">That Drives Results</span>
            </h2>
            <p className="text-base text-white/70">
              We combine cutting-edge tech stack standards with agile product design to deliver fast, secure, and revenue-generating digital platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {solutions.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-tint-black-2 border border-white/10 space-y-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                      <IconComp size={20} weight="bold" />
                    </div>
                    <h3 className="heading-h6 text-white font-semibold">{item.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
