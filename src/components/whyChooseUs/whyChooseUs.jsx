import { WhyChooseUsData } from "@/Data";
import {
  ShieldCheckIcon,
  LightningIcon,
  UsersThreeIcon,
  HeadsetIcon,
  CodeIcon,
  TrendUpIcon,
} from "@phosphor-icons/react/dist/ssr";

const iconMap = {
  LightningIcon,
  UsersThreeIcon,
  ShieldCheckIcon,
  CodeIcon,
  TrendUpIcon,
  HeadsetIcon,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            The TechTide Advantage
          </span>
          <h2 className="heading-h2 text-white">
            Why Visionary Leaders <span className="text-gradient">Choose TechTide</span>
          </h2>
          <p className="text-base text-white/70">
            We deliver top-tier engineering quality with the speed and flexibility of a dedicated technology partner.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WhyChooseUsData.map((item, idx) => {
            const IconComp = iconMap[item.icon] || LightningIcon;
            return (
              <div
                key={idx}
                className="bg-tint-black-2 even:bg-tint-black border border-white/10 rounded-2xl p-6 hover:border-primary/50 duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-white duration-300">
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
