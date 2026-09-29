import Link from "next/link";
import Image from "next/image";
import { ProjectsData } from "@/Data";
import { ArrowUpRightIcon, TagIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProjectsSec() {
  return (
    <section className="py-20 bg-tint-black-2 border-y border-white/10 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              Featured Case Studies
            </span>
            <h2 className="heading-h2 text-white">
              Recent Engineering <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-base text-white/70">
              A showcase of recent digital applications, AI systems, and cloud platforms shipped by our team.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all shrink-0 w-fit"
          >
            <span>View All Projects</span>
            <ArrowUpRightIcon size={16} weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ProjectsData.map((proj, idx) => (
            <div
              key={idx}
              className="bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-primary/50 transition-all group flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-primary">
                  {proj.category}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="heading-h4 text-white group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    <ArrowUpRightIcon size={20} className="text-white/40 group-hover:text-primary transition-colors" weight="bold" />
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{proj.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-medium text-white/70"
                    >
                      <TagIcon size={12} className="text-primary" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
