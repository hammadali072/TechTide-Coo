export default function ServiceTechSec({ service }) {
  const technologies = service.technologies || [];

  if (technologies.length === 0) return null;

  return (
    <section className="py-12 bg-tint-black border-y border-white/8" aria-labelledby="service-tech-heading">
      <div className="container">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-widest block mb-1">
                Technology Ecosystem
              </span>
              <h4 id="service-tech-heading" className="heading-h4 text-white">
                Technologies & Tools We Employ
              </h4>
              <p className="text-sm text-white/50">Modern tooling chosen for speed, reliability, and scale.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="py-3 px-4 rounded-lg bg-tint-black-2 border border-white/8 text-center text-sm font-medium text-white/80 hover:text-white hover:border-primary/40 duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
