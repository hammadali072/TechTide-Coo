export default function AboutHeroSec() {
  return (
    <section className="relative pt-36 pb-24 bg-black overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
          About TechTide Corporate LLP
        </span>

        <h1 className="heading-h1 text-white">
          Bridging Technology &{" "}
          <span className="text-gradient">Business Growth</span>
        </h1>

        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
          We are a team of innovators, developers, designers, marketers, and
          strategists committed to helping businesses transform ideas into
          powerful digital solutions.
        </p>
      </div>
    </section>
  );
}
