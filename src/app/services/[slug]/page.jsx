import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug, getRelatedServices } from "@/lib/services";
import ServiceDetailHeroSec from "@/components/serviceDetailHeroSec/serviceDetailHeroSec";
import ServiceOverviewSec from "@/components/serviceOverviewSec/serviceOverviewSec";
import ServiceFeaturesSec from "@/components/serviceFeaturesSec/serviceFeaturesSec";
import ServiceProcessSec from "@/components/serviceProcessSec/serviceProcessSec";
import ServiceTechSec from "@/components/serviceTechSec/serviceTechSec";
import Faq from "@/components/faq/faq";
import RelatedServicesSec from "@/components/relatedServicesSec/relatedServicesSec";

export const dynamicParams = false;

export function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found | TechTide Corporate LLP",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | TechTide Corporate LLP`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | TechTide Corporate LLP`,
      description: service.shortDesc,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDesc,
    provider: {
      "@type": "Organization",
      name: "TechTide Corporate LLP",
      url: "https://techtidecorporate.com",
    },
    serviceType: service.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ServiceDetailHeroSec service={service} />
        <ServiceOverviewSec service={service} />
        <ServiceFeaturesSec service={service} />
        <ServiceProcessSec service={service} />
        <ServiceTechSec service={service} />

        {service.faqs && service.faqs.length > 0 && (
          <Faq
            tag="Service FAQ"
            title="Frequently Asked Questions"
            subtitle={`Common questions about our ${service.title.toLowerCase()} process, deliverables, and timelines.`}
            items={service.faqs}
          />
        )}

        <RelatedServicesSec relatedServices={relatedServices} />
      </main>
    </>
  );
}
