import Link from "next/link";
import Image from "next/image";
import { BlogData } from "@/Data";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function BlogSec() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              Insights & Articles
            </span>
            <h2 className="heading-h2 text-white">
              Latest From Our <span className="text-gradient">Tech Blog</span>
            </h2>
            <p className="text-base text-white/70">
              Deep dives on web development, AI workflow automation, SaaS product engineering, and SEO strategy.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all shrink-0 w-fit"
          >
            <span>Explore All Posts</span>
            <ArrowRightIcon size={16} weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BlogData.map((item, idx) => (
            <div
              key={idx}
              className="bg-tint-black-2 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-primary/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-primary">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={14} className="text-primary" /> {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon size={14} className="text-primary" /> {item.readTime}
                    </span>
                  </div>

                  <h3 className="heading-h5 text-white group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRightIcon size={14} weight="bold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
