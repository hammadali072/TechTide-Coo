import Link from "next/link";
import Image from "next/image";
import {
  CaretRightIcon,
  CalendarBlankIcon,
  TimerIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function BlogDetailHeroSec({ blog }) {
  const initials = blog.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <section className="relative pt-36 pb-16 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-primary/8 rounded-full blur-[100px]" />
      </div>
      <div className="container">
        <div className="space-y-6 md:space-y-8">
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-white/50 font-medium flex-wrap">
            <Link href="/" aria-label="Go back to the home page" className="hover:text-primary duration-200 shrink-0">Home</Link>
            <CaretRightIcon size={11} weight="bold" />
            <Link href="/blog" aria-label="Go back to the blog page" className="hover:text-primary duration-200 shrink-0">Blog</Link>
            <CaretRightIcon size={11} weight="bold" />
            <span className="text-white/70 truncate max-w-[160px] sm:max-w-xs md:max-w-md">{blog.title}</span>
          </nav>

          <div className="space-y-4 md:space-y-6 max-w-4xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              {blog.category}
            </span>
            <h1 className="heading-h1 leading-tight">
              {blog.title}
            </h1>
            <p className="text-base md:text-xl leading-relaxed text-white/60 max-w-3xl">
              {blog.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-white leading-tight">{blog.author}</p>
                  <p className="text-[10px] md:text-xs text-white/50">{blog.authorRole}</p>
                </div>
              </div>

              <div className="w-px h-6 bg-white/15 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-white/60">
                <CalendarBlankIcon size={16} weight="bold" className="text-primary/70 shrink-0" />
                <time className="text-xs md:text-sm font-medium">{blog.date}</time>
              </div>

              <div className="w-px h-6 bg-white/15 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-white/60">
                <TimerIcon size={16} weight="bold" className="text-primary/70 shrink-0" />
                <span className="text-xs md:text-sm font-medium">{blog.readTime}</span>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-xl md:rounded-2xl overflow-hidden border border-white/8 shadow-2xl mt-6 md:mt-10 group">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
