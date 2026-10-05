import BlogCard from "../blogCard/blogCard";
import { getRelatedPosts } from "@/Data";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function RelatedPostsSec({ blog }) {
  const related = getRelatedPosts(blog, 3);

  if (!related || related.length === 0) return null;

  return (
    <section className="bg-black py-24 border-t border-white/8 relative">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold uppercase tracking-wider">
              Keep Reading
            </span>
            <h2 className="heading-h2 text-white">Related Articles</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-start font-semibold transition-colors"
          >
            View all posts
            <ArrowRightIcon size={16} weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {related.map((item) => (
            <BlogCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
