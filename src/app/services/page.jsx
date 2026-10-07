import { getAllServices, getServiceCategories } from "@/lib/services";
import HeroSec2 from "@/components/heroSec/heroSec2";
import ServicesGridSec from "@/components/servicesGridSec/servicesGridSec";
import { CheckCircleIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Our Services | FidayinCorporate",
  description: "Explore our full-stack engineering, native mobile app development, custom AI automation, SaaS architecture, and cloud infrastructure services.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const services = getAllServices();
  const categories = getServiceCategories();

  return (
    <main>
      <HeroSec2
        pill="Our Services"
        pillIcon={<SparkleIcon size={14} weight="fill" />}
        title="Digital Engineering, Built to Scale"
        accentWord="Built to Scale"
        description="We engineer high-performance web applications, native-grade mobile apps, automated AI workflows, and enterprise cloud systems designed to accelerate revenue."
        pb="pb-16"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircleIcon size={18} weight="fill" className="text-primary" />
            <span>{services.length} Core Specializations</span>
          </div>

          <div className="size-1 rounded-full bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <CheckCircleIcon size={18} weight="fill" className="text-primary" />
            <span>Zero-Obligation Discovery Call</span>
          </div>

          <div className="size-1 rounded-full bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <CheckCircleIcon size={18} weight="fill" className="text-primary" />
            <span>Dedicated Senior Engineers</span>
          </div>
        </div>
      </HeroSec2>
      <ServicesGridSec services={services} categories={categories} />
    </main>
  );
}
