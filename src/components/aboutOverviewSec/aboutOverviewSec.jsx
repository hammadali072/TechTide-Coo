export default function AboutOverviewSec() {
  return (
    <section className="py-24 bg-tint-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              Company Overview
            </span>
            <h2 className="heading-h2 text-white">
              Who We Are &{" "}
              <span className="text-gradient">What We Stand For</span>
            </h2>
            <div className="w-16 h-1 rounded-full bg-gradient-to-b from-primary to-primary/20" />
          </div>
          <div className="lg:col-span-8 space-y-6">
            {[
              "Founded with a vision to bridge the gap between technology and business growth, we partner with startups, SMEs, and enterprises to build scalable, secure, and results-driven digital products. From web and mobile applications to enterprise systems, digital marketing, and business automation, our goal is to create solutions that deliver measurable impact.",
              "At TechTide Corporate LLP, we are a team of innovators, developers, designers, marketers, and strategists committed to helping businesses transform ideas into powerful digital solutions.",
              "At TechTide Corporate LLP, we don't just build software, we build partnerships, empower businesses, and create digital experiences that drive growth worldwide.",
            ].map((para, idx) => (
              <p key={idx} className="text-base text-white/65 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
