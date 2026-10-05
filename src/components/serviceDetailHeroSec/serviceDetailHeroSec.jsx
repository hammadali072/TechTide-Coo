import Link from "next/link";
import Image from "next/image";
import { CaretRightIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { getServiceIcon } from "@/lib/serviceIcons";

export default function ServiceDetailHeroSec({ service }) {
  const IconComponent = getServiceIcon(service.icon);

  // Split title to apply gradient to the last word(s)
  const words = service.title.split(" ");
  const mainWords = words.length > 2 ? words.slice(0, -2).join(" ") : words.slice(0, -1).join(" ");
  const accentWords = words.length > 2 ? words.slice(-2).join(" ") : words.slice(-1).join(" ");

  return (
    <section className="relative pt-36 pb-20 bg-black overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-medium text-white/50 flex-wrap">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <CaretRightIcon size={12} className="text-white/30" />
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li aria-hidden="true">
              <CaretRightIcon size={12} className="text-white/30" />
            </li>
            <li className="text-white/90 truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              {service.category}
            </span>

            <h1 className="heading-h1 text-white">
              {mainWords ? `${mainWords} ` : ""}
              <span className="text-gradient">{accentWords}</span>
            </h1>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl">
              {service.tagline || service.shortDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-black text-sm font-bold hover:opacity-95 transition-all shadow-lg shadow-primary/25"
              >
                <span>Book a Strategy Call</span>
                <ArrowRightIcon size={16} weight="bold" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
              >
                All Services
              </Link>
            </div>
          </div>

          {/* Right Image Frame Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl p-2 bg-gradient-to-b from-white/12 to-white/4 border border-white/10 shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-tint-black-2">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>

              {/* Overlapping frosted badge */}
              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 text-primary shadow-xl flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <IconComponent size={24} weight="bold" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                    Enterprise SLA
                  </div>
                  <div className="text-[11px] text-white/50">
                    Guaranteed Performance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
