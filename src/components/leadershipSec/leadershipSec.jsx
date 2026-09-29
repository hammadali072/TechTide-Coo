import Image from "next/image";
import { LeadershipData } from "@/Data";
import { LinkedinLogoIcon, TwitterLogoIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";

export default function LeadershipSec() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Leadership & Vision
          </span>
          <h2 className="heading-h2 text-white">
            Guided By <span className="text-gradient">Industry Veterans</span>
          </h2>
          <p className="text-base text-white/70">
            Our leadership team combines deep technical expertise with strategic business vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {LeadershipData.map((leader, idx) => (
            <div
              key={idx}
              className="bg-tint-black-2 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center hover:border-primary/50 transition-all group"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <h3 className="heading-h4 text-white group-hover:text-primary transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary mt-0.5">{leader.role}</p>
                </div>

                <p className="text-xs text-white/60 leading-relaxed">{leader.bio}</p>

                <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-primary transition-colors"
                  >
                    <LinkedinLogoIcon size={16} weight="bold" />
                  </a>
                  <a
                    href={leader.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-primary transition-colors"
                  >
                    <TwitterLogoIcon size={16} weight="bold" />
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-primary transition-colors"
                  >
                    <EnvelopeSimpleIcon size={16} weight="bold" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
