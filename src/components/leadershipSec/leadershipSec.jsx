import Link from "next/link";
import Image from "next/image";
import { LeadershipData } from "@/Data";
import {
  LinkedinLogoIcon,
  TwitterLogoIcon,
  EnvelopeSimpleIcon,
  PlusIcon,
} from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

export default function LeadershipSec() {
  return (
    <section id="leadership" className="py-24 bg-black relative overflow-hidden">
      <div className="container relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            Leadership & Vision
          </span>
          <h2 className="heading-h2 text-white">
            Guided By <span className="text-gradient">Industry Veterans</span>
          </h2>
          <p className="text-base text-white/70">
            Our leadership team combines deep technical expertise with strategic business vision.
          </p>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:gap-10">
          {LeadershipData.map((leader) => (
            <div
              key={leader.id}
              className="duration-300 group hover:-translate-y-2.5"
            >
              <Link
                href={`/team/${leader.id}`}
                className="block relative w-full aspect-[4/5] rounded-xl overflow-hidden"
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <h3 className="heading-h6 text-white group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-medium text-white/60 mt-1.5">
                    {leader.role}
                  </p>
                </div>

                <div className="relative duration-300 group/share hover:scale-y-100 shrink-0">
                  <div className="flex justify-center items-center size-12 lg:size-14 bg-primary/10 rounded-lg cursor-pointer hover:bg-primary/20 transition-colors">
                    <PlusIcon className="text-primary" weight="bold" size={24} />
                  </div>

                  <div className="absolute bottom-0 left-0 origin-bottom scale-y-0 duration-300 group-hover/share:scale-y-100 z-10 w-full">
                    <ul className="overflow-hidden rounded-lg bg-primary">
                      <li className="border-b border-white/20">
                        <Link
                          href={leader.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center items-center size-12 lg:size-14 duration-300 hover:bg-black/20"
                        >
                          <LinkedinLogoIcon className="text-white" size={24} />
                        </Link>
                      </li>
                      <li className="border-b border-white/20">
                        <Link
                          href={leader.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center items-center size-12 lg:size-14 duration-300 hover:bg-black/20"
                        >
                          <TwitterLogoIcon className="text-white" size={24} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`mailto:${leader.email}`}
                          className="flex justify-center items-center size-12 lg:size-14 duration-300 hover:bg-black/20"
                        >
                          <EnvelopeSimpleIcon className="text-white" size={24} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
