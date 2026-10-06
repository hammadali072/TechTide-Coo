import Image from "next/image";
import clsx from "clsx";

const items = [
  {
    label: "Our Mission",
    heading: "Crafting Digital Solutions That Create Real Impact",
    body: "Techtide Corporate LLP is committed to crafting exceptional digital solutions and reinvesting our growth where it matters — into the youth, into critical job creation, and into open access to education. We stand for progress with intent and partnerships that make a difference.",
    image: "/assets/Our Mission.webp",
    reverse: false,
  },
  {
    label: "Our Vision",
    heading: "Setting a Global Standard in Technological Excellence",
    body: "Techtide Corporate LLP is committed to setting a global standard in technological excellence. More than a software company, we serve as a trusted partner in innovation and meaningful impact — using advanced technology to uplift communities and build a future-ready world from Pakistan outward.",
    image: "/assets/Our Vision.webp",
    reverse: true,
  },
];

export default function AboutMissionVisionSec() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container">
        <div className="space-y-24">
          {items.map(({ label, heading, body, image, reverse }) => (
            <div
              key={label}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              <div
                className={clsx(
                  "relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60 group",
                  reverse ? "lg:order-2" : "lg:order-1"
                )}
              >
                <Image
                  src={image}
                  alt={label}
                  width={640}
                  height={440}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div
                className={clsx(
                  "space-y-5",
                  reverse ? "lg:order-1" : "lg:order-2"
                )}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
                  {label}
                </span>
                <h2 className="heading-h2 text-white">{heading}</h2>
                <div className="w-12 h-1 rounded-full bg-gradient-to-b from-primary to-primary/20" />
                <p className="text-base text-white/65 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
