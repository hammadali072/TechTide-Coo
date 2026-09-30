import { WarningIcon, ClockIcon, TrendDownIcon, XCircleIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProblemSec() {
  const problems = [
    {
      title: "Slow & Outdated Web Systems",
      desc: "Legacy monoliths and bloated CMS templates that take 5+ seconds to load, frustrating users and destroying organic search rankings.",
      icon: ClockIcon,
    },
    {
      title: "Manual Operational Bottlenecks",
      desc: "Teams spending hundreds of hours on repetitive data entry, email follow-ups, and disconnected software systems.",
      icon: WarningIcon,
    },
    {
      title: "High Lead Drop-off Rates",
      desc: "Unoptimized landing pages and broken contact workflows that let high-intent leads slip through the cracks.",
      icon: TrendDownIcon,
    },
    {
      title: "Unpredictable Software Costs",
      desc: "Freelancers and agencies delivering buggy code with zero documentation, security flaws, and missed launch deadlines.",
      icon: XCircleIcon,
    },
  ];

  return (
    <section className="py-20 bg-tint-black-2 border-y border-white/10 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-red-500/20 text-primary text-xs font-semibold uppercase tracking-wider">
            The Industry Challenge
          </span>
          <h2 className="heading-h2 text-white">
            Why Traditional Digital Upgrades <span className="text-gradient">Fail To Scale</span>
          </h2>
          <p className="text-base text-white/70">
            Most businesses struggle with slow engineering cycles, disconnected tools, and digital solutions that fail to drive real revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-black border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                  <IconComp size={24} weight="bold" />
                </div>
                <h3 className="heading-h5 text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
