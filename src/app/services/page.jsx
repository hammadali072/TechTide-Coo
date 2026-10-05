import { getAllServices, getServiceCategories } from "@/lib/services";
import ServicesHeroSec from "@/components/servicesHeroSec/servicesHeroSec";
import ServicesGridSec from "@/components/servicesGridSec/servicesGridSec";
import ServiceCtaSec from "@/components/serviceCtaSec/serviceCtaSec";

export const metadata = {
  title: "Our Services | TechTide Corporate LLP",
  description:
    "Explore our full-stack engineering, native mobile app development, custom AI automation, SaaS architecture, and cloud infrastructure services.",
  robots: { index: true, follow: true },
};

export default function ServicesPage() {
  const services = getAllServices();
  const categories = getServiceCategories();

  return (
    <main>
      <ServicesHeroSec totalServices={services.length} />
      <ServicesGridSec services={services} categories={categories} />
      <ServiceCtaSec
        pill="Next Steps"
        title="Not sure which service fits your roadmap?"
        accent="Let's Talk"
        desc="Schedule a free 15-minute consultation with our senior engineers to analyze your technical requirements and business goals."
        primaryButtonText="Schedule Free Consultation"
        primaryButtonHref="/contact"
      />
    </main>
  );
}
