import Link from "next/link";
import Image from "next/image";
import {
  UserIcon,
  CalendarBlankIcon,
  ArrowRightIcon,
  ClockIcon,
} from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

export default function BlogCard({ item, variant = "default" }) {
  if (variant === "compact") {
    return (
      <article className="group bg-tint-black-2 rounded-2xl p-4 border border-white/8 hover:border-primary/30 shadow-lg hover:shadow-primary/10 hover:-translate-y-2 duration-300 flex flex-col h-full">
        <Link href={`/blog/${item.slug}`} className="relative block w-full aspect-[4/2.5] rounded-xl overflow-hidden mb-6">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-3 left-3 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            {item.category}
          </div>
        </Link>
        <div className="flex-1 flex flex-col">
          <Link href={`/blog/${item.slug}`} className="heading-h6 text-white mb-3 hover:text-primary duration-200 line-clamp-2">
            {item.title}
          </Link>
          <p className="text-sm text-white/60 line-clamp-2 mb-4">
            {item.excerpt}
          </p>
          <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
            <span className="flex items-center gap-1.5"><ClockIcon size={14} className="text-primary"/> {item.readTime}</span>
            <Link href={`/blog/${item.slug}`} className="flex items-center gap-1 font-semibold text-white/80 hover:text-primary uppercase tracking-wider group-hover:text-primary transition-colors">
              Read <ArrowRightIcon size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // default variant (homepage style)
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
            <li className="flex items-center gap-2 overflow-hidden">
              <UserIcon size={18} weight="bold" className="text-primary shrink-0" />
              <span className="text-white/70 text-sm font-regular truncate">{item.author}</span>
            </li>
            <li className="flex items-center gap-2 shrink-0">
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
