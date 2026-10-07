import clsx from "clsx";
import Image from "next/image";
import circleShape from "../../../public/assets/circle-shape.png";
import circleShape2 from "../../../public/assets/circle-shape-2.png";

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
      <div className="absolute inset-0 pointer-events-none print:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

        <Image src={circleShape2} alt="circle shape" className="absolute bottom-0 left-0 max-w-[200px] md:max-w-[300px] opacity-40 object-contain" />
        <Image src={circleShape} alt="circle shape 2" className="absolute bottom-0 right-0 max-w-[200px] md:max-w-[300px] opacity-40 object-contain" />
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
