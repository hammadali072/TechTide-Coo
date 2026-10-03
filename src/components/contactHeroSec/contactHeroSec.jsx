export default function ContactHeroSec() {
  return (
    <section className="relative pt-36 pb-20 bg-black overflow-hidden">
      {/* Blob decorations — same pattern as heroSec */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute top-20 -right-20 w-[380px] h-[380px] bg-primary-start/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
          Get In Touch with TechTide Corporate LLP
        </span>

        <h1 className="heading-h1">
          Let&rsquo;s Build Your Next{" "}
          <span className="text-gradient">Web or Software Project</span>
        </h1>

        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
          Have an idea for a website, ERP, CRM, or custom software? Contact us today, and our
          expert team will help bring your project to life quickly and efficiently.
        </p>
      </div>
    </section>
  );
}
