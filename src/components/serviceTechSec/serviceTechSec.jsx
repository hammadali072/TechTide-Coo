import { TerminalWindowIcon } from "@phosphor-icons/react/dist/ssr";

export default function ServiceTechSec({ service }) {
  const technologies = service.technologies || [];

  if (technologies.length === 0) return null;

  return (
    <section className="py-16 bg-tint-black border-y border-white/8 relative" aria-labelledby="service-tech-heading">
      <div className="container text-center max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-semibold uppercase tracking-widest">
            <TerminalWindowIcon size={14} className="text-primary" />
            Technology Ecosystem
          </span>
          <h2 id="service-tech-heading" className="heading-h3 text-white">
            Technologies & Frameworks We Employ
          </h2>
          <p className="text-sm text-white/60">
            Battle-tested modern tooling chosen for long-term maintainability, speed, and security.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-xl bg-tint-black-2 border border-white/10 text-white/80 text-sm font-semibold hover:border-primary/50 hover:text-white transition-all duration-300 shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
