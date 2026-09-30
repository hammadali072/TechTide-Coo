import Link from "next/link";
import Image from "next/image";
import { BlogData } from "@/Data";
import {
  UserIcon,
  CalendarBlankIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function BlogSec() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              Insights &amp; Articles
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all shrink-0 w-fit"
          >
            <span>Explore All Posts</span>
            <ArrowRightIcon size={16} weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BlogData.map((item) => (
            <BlogCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ item }) {
  return (
    <article className="group bg-tint-black-2 rounded-2xl xl:py-5 xl:pb-6 xl:px-5 p-4 border border-white/8 hover:border-primary/30 shadow-lg hover:shadow-primary/10 hover:-translate-y-2 duration-300">
      <div className="relative">
        <Link href={`/blog/${item.slug}`} className="relative inline-block w-full h-full aspect-[4/2.5] rounded-xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent" />
        </Link>

        <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 w-[86%] z-10">
          <ul className="flex justify-between items-center gap-2 bg-tint-black/80 border border-white/10 shadow-md shadow-black/50 backdrop-blur-md rounded-lg px-5 py-3">
            <li className="flex items-center gap-2">
              <UserIcon size={18} weight="bold" className="text-primary shrink-0" />
              <span className="text-white/70 text-sm font-regular truncate">Admin</span>
            </li>
            <li className="flex items-center gap-2">
              <CalendarBlankIcon size={18} weight="bold" className="text-primary shrink-0" />
              <span className="text-white/70 text-sm font-regular whitespace-nowrap">{item.date}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10 text-center flex flex-col items-center gap-4">
        <Link
          href={`/blog/${item.slug}`}
          className="heading-h5 text-white leading-snug hover:text-primary duration-200 line-clamp-3"
        >
          {item.title}
        </Link>

        <Link
          href={`/blog/${item.slug}`}
          className="inline-flex items-center gap-2 text-base font-semibold uppercase text-white/50 hover:text-primary duration-200"
        >
          Read More
          <ArrowRightIcon size={18} weight="bold" />
        </Link>
      </div>
    </article>
  );
}
