import Image from "next/image";
import clsx from "clsx";
import {
  LightningIcon,
  TargetIcon,
  ChartLineUpIcon,
} from "@phosphor-icons/react/dist/ssr";

const solutions = [
  {
    icon: LightningIcon,
    title: "Conversion-Focused Design",
    desc: "We don't just build websites; we build lead-generation machines designed to convert visitors into loyal customers.",
  },
  {
    icon: TargetIcon,
    title: "Authority Positioning",
    desc: "We help you niche down and communicate your unique value, positioning you as the go-to expert in your industry.",
  },
  {
    icon: ChartLineUpIcon,
    title: "Growth Systems",
    desc: "Seamlessly integrate CRM, email marketing, and analytics to track your ROI and scale with confidence.",
  },
];

export default function SolutionSec() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="heading-h2">
              From Generic Profile to{" "}
              <span className="text-gradient">Growth Machine</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              We stop the leak in your sales funnel by implementing a proprietary 3-step system that clarifies your message, builds authority and optimizes for conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60 group">
              <Image
                src="/assets/Dashboard-Growth.webp"
                alt="TechTide Growth Dashboard"
                width={700}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-[1.03] duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col gap-7">
              {solutions.map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    "flex gap-5 group",
                    idx !== solutions.length - 1 && "pb-7 border-b border-white/8"
                  )}
                >
                  <div className="flex-shrink-0 size-11 rounded-lg border border-primary/20 bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/35 duration-300">
                    <Icon
                      size={20}
                      weight="regular"
                      className="text-primary/80 group-hover:text-primary duration-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="heading-h6 text-white">{title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
