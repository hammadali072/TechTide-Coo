import clsx from "clsx";
import {
  EyeSlashIcon,
  TrendDownIcon,
  ShieldWarningIcon,
} from "@phosphor-icons/react/dist/ssr";

const problems = [
  {
    num: "01",
    icon: EyeSlashIcon,
    title: "Weak Online Presence",
    desc: "Your website feels like a generic company profile that doesn't clearly communicate your value or differentiate you from competitors.",
    impact: "Lost Opportunities",
  },
  {
    num: "02",
    icon: TrendDownIcon,
    title: "Poor Lead Generation",
    desc: "You're getting traffic but no conversions. Your visitors leave without taking action because there's no defined user journey or clear CTA.",
    impact: "Revenue Leak",
  },
  {
    num: "03",
    icon: ShieldWarningIcon,
    title: "Lack Of Trust & Authority",
    desc: "Minimal proof of results, no strong case studies, and generic messaging make it hard for prospects to trust you with their business.",
    impact: "Revenue Loss",
  },
];

export default function ProblemSec() {
  return (
    <section className="py-24 bg-tint-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-5">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/15 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest">
              The Opportunity Cost
            </span>

            <h2 className="heading-h2">
              Is Your Website{" "}
              <span className="text-gradient">Costing You</span> Business?
            </h2>

            <p className="text-white/55 text-base leading-relaxed">
              A generic digital profile is a liability. We help you transition from being &quot;just another option&quot; to the only logical choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map(({ num, icon: Icon, title, desc, impact }) => (
              <div
                key={num}
                className="group relative bg-tint-black-2 border border-white/8 rounded-2xl p-7 overflow-hidden hover:border-primary/30 duration-300"
              >
                <span
                  className={clsx(
                    "absolute -top-3 right-0 text-[96px] font-black leading-none select-none",
                    "text-stroke-outlined group-hover:text-stroke-outlined-hover duration-300"
                  )}
                >
                  {num}
                </span>

                <div className="relative z-10 mb-6 w-12 h-12 rounded-lg border border-primary/12 bg-primary/20 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 duration-300">
                  <Icon
                    size={22}
                    weight="regular"
                    className="text-primary/70 group-hover:text-primary duration-300"
                  />
                </div>

                <div className="relative z-10 space-y-3 mb-8">
                  <h3 className="heading-h5 text-white">{title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
                </div>
                <div className="relative z-10 border-t border-white/8 pt-5 space-y-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35">
                    Financial Impact
                  </p>
                  <p className="text-sm font-semibold text-gradient">{impact}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
