import Link from "next/link";
import Image from "next/image";
import { StarIcon, ArrowRightIcon, CalendarBlankIcon, ClockIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";

export default function BlogFeaturedSec({ post }) {
  if (!post) return null;

  return (
    <section className="bg-tint-black py-16 relative">
      <div className="container">
        <div className="bg-tint-black-2 border border-white/8 rounded-[2rem] p-6 lg:p-8 hover:border-primary/30 duration-500 group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`} className="relative w-full aspect-[4/3] lg:aspect-[4/4] xl:aspect-[4/3.5] rounded-2xl overflow-hidden block">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </Link>

            <div className="space-y-6">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                  <StarIcon size={14} weight="fill" /> Featured
                </span>
                <span className="text-white/50 text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`} className="block">
                <h3 className="heading-h3 text-white group-hover:text-primary duration-300">
                  {post.title}
                </h3>
              </Link>

              <p className="text-lg text-white/60 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-white/50">
                <div className="flex items-center gap-1.5 font-medium text-white/80">
                  <UserIcon size={16} className="text-primary" /> {post.author}
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <CalendarBlankIcon size={16} className="text-primary" /> {post.date}
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <ClockIcon size={16} className="text-primary" /> {post.readTime}
                </div>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read more about ${post.title}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-b from-primary-start to-primary-end text-black text-sm font-bold hover:scale-[1.02] duration-200 shadow-lg shadow-primary/25"
                >
                  Read Article
                  <ArrowRightIcon size={16} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
