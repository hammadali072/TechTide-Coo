import Link from "next/link";
import { BlogData } from "@/Data";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import BlogCard from "../blogCard/blogCard";

export default function BlogSec() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 duration-300 shrink-0 w-fit"
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
