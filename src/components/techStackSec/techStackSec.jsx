import Image from "next/image";
import { TechStackData } from "@/Data";

export default function TechStackSec() {
  return (
    <section className="py-20 bg-tint-black-2 border-y border-white/10 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Modern Technology Stack
          </span>
          <h2 className="heading-h2 text-white">
            Built With <span className="text-gradient">Industry-Leading</span> Technologies
          </h2>
          <p className="text-base text-white/70">
            We leverage proven, high-performance tools and modern frameworks to ensure speed, resilience, and easy scalability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {TechStackData.map((item, idx) => (
            <div
              key={idx}
              className="bg-black border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-3 hover:border-primary/50 transition-all group"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-white group-hover:text-primary transition-colors">
                  {item.name}
                </div>
                <div className="text-[10px] text-white/50 mt-0.5">{item.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
