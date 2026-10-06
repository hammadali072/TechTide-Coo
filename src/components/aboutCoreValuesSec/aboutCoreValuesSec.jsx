import {
  LightbulbIcon,
  TrophyIcon,
  EyeIcon,
  TargetIcon,
  TrendUpIcon,
  GlobeIcon,
} from "@phosphor-icons/react/dist/ssr";

const values = [
  {
    icon: LightbulbIcon,
    title: "Client Success First",
    desc: "Our clients are at the center of everything we do. We measure our success by the value, growth, and results we help our clients achieve through technology, strategy, and innovation.",
  },
  {
    icon: TrophyIcon,
    title: "Innovation with Purpose",
    desc: "We don't adopt technology for the sake of trends. We leverage modern tools, frameworks, and strategies to create practical solutions that solve real business challenges and drive measurable outcomes.",
  },
  {
    icon: EyeIcon,
    title: "Trust & Transparency",
    desc: "Strong partnerships are built on honesty, accountability, and clear communication. We maintain complete transparency throughout every project, ensuring our clients are informed, involved, and confident at every stage.",
  },
  {
    icon: TargetIcon,
    title: "Excellence in Execution",
    desc: "From concept to deployment, we are committed to delivering high-quality solutions that are secure, scalable, reliable, and aligned with our clients' business objectives.",
  },
  {
    icon: TrendUpIcon,
    title: "Continuous Growth",
    desc: "Technology evolves rapidly, and so do we. We embrace learning, innovation, and process optimization to ensure our clients always benefit from the latest industry best practices.",
  },
  {
    icon: GlobeIcon,
    title: "Global Perspective, Local Commitment",
    desc: "We work with businesses across diverse industries and markets, bringing a global mindset while understanding the unique needs of every client and project.",
  },
];

export default function AboutCoreValuesSec() {
  return (
    <section className="py-24 bg-tint-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[120px]" />
      </div>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Our Core Values
          </span>
          <h2 className="heading-h2 text-white">
            What We <span className="text-gradient">Stand For</span>
          </h2>
          <p className="text-base text-white/60 leading-relaxed">
            These principles guide everything we do, from how we collaborate with clients to how we build our products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-tint-black-2 even:bg-tint-black border border-white/8 rounded-2xl p-6 hover:border-primary/40 duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-white duration-300">
                <Icon size={24} weight="bold" />
              </div>
              <h3 className="heading-h5 text-white mb-2">{title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
