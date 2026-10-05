import Link from "next/link";
import { CalendarBlankIcon, CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import LegalContent from "./legalContent";
import LegalToc from "./legalToc";
import LegalSwitcher from "./legalSwitcher";
import BackToTop from "./backToTop";
import { COMPANY } from "@/lib/legal";

export default function LegalPageLayout({ page }) {
  const headings = page.sections.map((s) => ({ id: s.id, text: s.title }));

  const titleParts = page.title.split(page.accentWord);
  const hasAccent = page.title.includes(page.accentWord);

  return (
    <>
      <BackToTop />

      <main>

        <section className="relative pt-36 pb-16 bg-black overflow-hidden print:pt-10 print:pb-10">
          <div className="absolute inset-0 pointer-events-none print:hidden">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
          </div>

          <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest print:hidden">
              {page.pill}
            </span>

            <h1 className="heading-h1 text-white">
              {hasAccent ? (
                <>
                  {titleParts[0]}
                  <span className="text-gradient">{page.accentWord}</span>
                  {titleParts[1]}
                </>
              ) : (
                page.title
              )}
            </h1>

            <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">{page.intro}</p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/60">
                <CalendarBlankIcon size={18} weight="bold" className="text-primary/70" />
                <time className="text-sm font-medium" dateTime={new Date(page.lastUpdated).toISOString()}>
                  Last updated: {page.lastUpdated}
                </time>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tint-black py-20 relative">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-8 order-2 lg:order-1">
                <LegalToc headings={headings} />
                <LegalSwitcher currentSlug={page.slug} />

                <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-6 shadow-lg print:hidden">
                  <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-2">Questions?</h4>
                  <p className="text-sm text-white/60 mb-4">Reach out to our team if you need clarification on any of these terms.</p>
                  <Link href={`mailto:${COMPANY.email}`} className="text-primary hover:text-primary-start font-semibold text-sm underline underline-offset-4">
                    {COMPANY.email}
                  </Link>
                </div>
              </aside>

              <div className="lg:col-span-8 order-1 lg:order-2 min-w-0">

                {page.summary && page.summary.length > 0 && (
                  <div className="mb-12 p-6 md:p-8 rounded-2xl border border-primary/20 bg-primary/5 shadow-lg">
                    <h3 className="heading-h5 text-white mb-5">At a glance</h3>
                    <ul className="space-y-4">
                      {page.summary.map((point, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <CheckCircleIcon size={24} weight="fill" className="text-primary shrink-0 mt-0.5" />
                          <span className="text-white/80 leading-relaxed text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <LegalContent sections={page.sections} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
