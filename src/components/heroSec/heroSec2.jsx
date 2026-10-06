import clsx from "clsx";

/**
 * Reusable hero section for secondary pages (About, Contact, Blog, Services, Legal, etc.)
 *
 * Props:
 * - pill: string | ReactNode (e.g. "Our Services", "About TechTide Corporate LLP")
 * - pillIcon: ReactNode (optional icon to prefix pill text)
 * - title: string | ReactNode (can contain direct JSX or plain text)
 * - accentWord: string (optional word/phrase in title to apply gradient to)
 * - description: string | ReactNode (lead paragraph)
 * - children: ReactNode (optional inline facts, CTAs, tags, etc.)
 * - className: string (optional extra classes on section wrapper)
 * - pb: string (optional bottom padding override, e.g. "pb-24", "pb-20", "pb-16")
 */
export default function HeroSec2({
  pill,
  pillIcon,
  title,
  accentWord,
  description,
  desc,
  children,
  className,
  pb = "pb-20",
}) {
  const finalDesc = description || desc;

  const renderTitle = () => {
    if (!title) return null;
    if (typeof title !== "string" || !accentWord) {
      return title;
    }

    if (title.includes(accentWord)) {
      const parts = title.split(accentWord);
      return (
        <>
          {parts[0]}
          <span className="text-gradient">{accentWord}</span>
          {parts.slice(1).join(accentWord)}
        </>
      );
    }

    return title;
  };

  return (
    <section
      className={clsx(
        "relative pt-36 bg-black overflow-hidden print:pt-10 print:pb-10",
        pb,
        className
      )}
    >
      {/* Decorative blurred background blobs */}
      <div className="absolute inset-0 pointer-events-none print:hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {pill && (
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest print:hidden">
                {pillIcon}
                <span>{pill}</span>
              </span>
            </div>
          )}

          {title && (
            <h1 className="heading-h1 text-white">
              {renderTitle()}
            </h1>
          )}

          {finalDesc && (
            <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              {finalDesc}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
