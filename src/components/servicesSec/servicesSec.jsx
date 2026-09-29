import Link from "next/link";
import Image from "next/image";
import { ServicesData } from "@/Data";
import {
  CodeIcon,
  DeviceMobileIcon,
  CpuIcon,
  RocketLaunchIcon,
  TrendUpIcon,
  CloudIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/dist/ssr";

const iconMap = {
  CodeIcon,
  DeviceMobileIcon,
  CpuIcon,
  RocketLaunchIcon,
  TrendUpIcon,
  CloudIcon,
};

export default function ServicesSec() {
  return (
    <section className="py-20 bg-tint-black-2 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Our Core Capabilities
          </span>
          <h2 className="heading-h2 text-white">
            End-to-End <span className="text-gradient">Digital Engineering</span> Services
          </h2>
          <p className="text-base text-white/70">
            From high-converting web applications to custom AI workflows and cloud infrastructure, we build tailored software solutions that move your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || CodeIcon;
            return (
              <div
                key={service.id}
                className="bg-black border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/50 transition-all group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md text-primary border border-white/10">
                      <IconComponent size={22} weight="bold" />
                    </div>
                  </div>

                  <h3 className="heading-h4 text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-white/10">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircleIcon size={14} className="text-primary shrink-0" weight="fill" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors group/link"
                  >
                    <span>Learn More & Pricing</span>
                    <ArrowRightIcon size={16} className="group-hover/link:translate-x-1 transition-transform" weight="bold" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
