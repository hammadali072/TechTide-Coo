import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { getServiceIcon } from "@/lib/serviceIcons";

export default function RelatedServicesSec({ relatedServices = [] }) {
  if (!relatedServices || relatedServices.length === 0) return null;

  return (
    <section className="py-20 bg-black relative overflow-hidden" aria-labelledby="related-services-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              Complementary Solutions
            </span>
            <h2 id="related-services-heading" className="heading-h2 text-white">
              Explore <span className="text-gradient">Related Services</span>
            </h2>
            <p className="text-base text-white/70 leading-relaxed">
              Combine capabilities to accelerate delivery and scale your entire digital presence.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/20 duration-300 shrink-0 self-start sm:self-auto group"
          >
            <span>View All Services</span>
            <ArrowRightIcon
              size={16}
              className="group-hover:translate-x-1 duration-300"
              weight="bold"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service) => {
            const IconComponent = getServiceIcon(service.icon);

            return (
              <div
                key={service.id}
                className="bg-black border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-primary/50 duration-300 group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 duration-500"
                    />
                    <div className="absolute top-3 left-3 p-2.5 rounded-lg bg-black/80 backdrop-blur-md text-primary border border-white/10">
                      <IconComponent size={22} weight="bold" />
                    </div>
                  </div>

                  <h3 className="heading-h4 text-white duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white duration-300 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon
                      size={16}
                      className="group-hover/link:translate-x-1 duration-300"
                      weight="bold"
                    />
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
