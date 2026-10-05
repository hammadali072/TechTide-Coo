import ServiceCard from "@/components/serviceCard/serviceCard";
import { SparkleIcon } from "@phosphor-icons/react/dist/ssr";

export default function RelatedServicesSec({ relatedServices = [] }) {
  if (!relatedServices || relatedServices.length === 0) return null;

  return (
    <section className="py-24 bg-black relative overflow-hidden" aria-labelledby="related-services-heading">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              <SparkleIcon size={14} weight="fill" />
              Complementary Solutions
            </span>
            <h2 id="related-services-heading" className="heading-h2 text-white">
              Explore <span className="text-gradient">Related Services</span>
            </h2>
          </div>

          <p className="text-sm text-white/60 max-w-md">
            Combine capabilities to accelerate delivery and scale your entire digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
