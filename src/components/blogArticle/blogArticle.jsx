import { QuotesIcon, LightbulbIcon, CheckCircleIcon, CopyIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import ShareButtons from "./shareButtons";
import BlogToc from "./blogToc";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import BlogAuthorCard from "../blogAuthorCard/blogAuthorCard";
function BlogContent({ blocks }) {
  return (
    <div className="space-y-6 text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-white/70">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={idx}
                  id={block.id}
                  className="heading-h3 text-white mt-10 md:mt-14 mb-4 md:mb-6 scroll-mt-32 relative inline-block"
                >
                  {block.text}
                  <span className="block w-10 md:w-12 h-1 bg-gradient-to-b from-primary-start to-primary-end mt-2 rounded-full" />
                </h2>
              );
            }
            return (
              <h3 key={idx} id={block.id} className="heading-h5 text-white mt-8 md:mt-10 mb-3 scroll-mt-32">
                {block.text}
              </h3>
            );

          case "paragraph":
            return <p key={idx} className="mb-4">{block.text}</p>;

          case "list":
            if (block.style === "bullet") {
              return (
                <ul key={idx} className="space-y-3 mb-4">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <ol key={idx} className="space-y-3 mb-4">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="mt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            );

          case "quote":
            return (
              <blockquote
                key={idx}
                className="relative my-8 md:my-10 pl-5 md:pl-6 border-l-4 border-primary bg-primary/5 rounded-r-xl py-5 md:py-6 pr-5 md:pr-6 overflow-hidden"
              >
                <QuotesIcon size={48} weight="fill" className="absolute -top-2 -left-2 text-primary/10 -rotate-12" />
                <p className="text-lg md:text-2xl font-medium text-white/90 italic relative z-10">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.cite && (
                  <footer className="mt-3 text-sm text-primary font-semibold relative z-10">
                    — {block.cite}
                  </footer>
                )}
              </blockquote>
            );

          case "callout":
            return (
              <div key={idx} className="my-8 md:my-10 p-4 md:p-6 rounded-xl md:rounded-2xl border border-primary/20 bg-primary/8 flex gap-3 md:gap-4 items-start">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <LightbulbIcon size={18} weight="fill" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base">{block.title}</h4>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed">{block.text}</p>
                </div>
              </div>
            );

          case "code":
            return (
              <div key={idx} className="my-8 md:my-10 rounded-xl overflow-hidden border border-white/10 bg-black">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-tint-black-2">
                  <span className="text-xs font-mono text-white/50 uppercase">{block.language}</span>
                  <button className="text-white/40 hover:text-primary duration-200" aria-label="Copy code">
                    <CopyIcon size={15} />
                  </button>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm font-mono text-white/80 leading-relaxed whitespace-pre">
                    <code>{block.code}</code>
                  </pre>
                </div>
              </div>
            );

          case "image":
            return (
              <figure key={idx} className="my-8 md:my-12">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <Image src={block.src} alt={block.alt} fill className="object-cover" />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-center text-xs text-white/40">{block.caption}</figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default function BlogArticle({ blog }) {
  const headings = blog.content
    .filter((b) => b.type === "heading")
    .map((h) => ({ id: h.id, text: h.text }));

  return (
    <section className="bg-tint-black py-12 md:py-20 relative">
      <div className="container">
        <div className="lg:hidden mb-8">
          <BlogToc headings={headings} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8 min-w-0">
            {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
              <div className="mb-10 p-5 md:p-8 rounded-xl md:rounded-2xl border-l-4 border-l-primary border-y border-r border-white/8 bg-tint-black-2 shadow-lg">
                <h3 className="heading-h4 text-white mb-4 md:mb-5">Key Takeaways</h3>
                <ul className="space-y-3 md:space-y-4">
                  {blog.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircleIcon size={20} weight="fill" className="text-primary shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm md:text-base leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <BlogContent blocks={blog.content} />

            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10 space-y-8 md:space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-white/40 tracking-widest uppercase mr-1">Tags</span>
                  {blog.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="lg:hidden">
                  <ShareButtons title={blog.title} />
                </div>
              </div>

              <BlogAuthorCard blog={blog} />
            </div>
          </div>

          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <BlogToc headings={headings} />

              <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-6 text-center shadow-lg">
                <h4 className="heading-h5 text-white mb-3">Expert Guidance</h4>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Need help applying these concepts? Book a free strategy call with our engineering team.
                </p>
                <Link
                  href="/contact"
                  aria-label="Book a Strategy Call with our engineering team"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-b from-primary-start to-primary-end text-black text-sm font-bold hover:opacity-90 duration-200 shadow-lg shadow-primary/20"
                >
                  Book a Strategy Call
                  <ArrowRightIcon size={16} weight="bold" />
                </Link>
              </div>

              <ShareButtons title={blog.title} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
