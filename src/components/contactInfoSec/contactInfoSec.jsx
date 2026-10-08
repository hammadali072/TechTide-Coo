import Link from "next/link";
import {
  PhoneIcon,
  MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import CopyEmailButton from "./copyEmailButton";

const cards = [
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: "+44 20 4620 5555",
    href: "tel:+442046205555",
  },
  {
    icon: MapPinIcon,
    label: "Visit Us",
    value: "G3 Heaven Mall, Zaraar Shaheed Road, Lahore",
    href: "https://www.google.com/maps/search/?api=1&query=G3+Heaven+Mall+Zaraar+Shaheed+Road+Lahore",
  },
];

export default function ContactInfoSec() {
  return (
    <section className="relative z-10 py-16 bg-tint-black-2 border-y border-white/8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CopyEmailButton />

          {cards.map(({ icon: Icon, label, value, href }) => (
            <Link
              key={label}
              href={href}
              aria-label={label === "Call Us" ? "Call us at +44 20 4620 5555" : ""}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="bg-black border border-white/8 rounded-2xl p-6 space-y-4 hover:border-primary/30 duration-300 group block"
            >
              <div className="size-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center duration-300 group-hover:bg-primary group-hover:border-primary">
                <Icon size={22} weight="bold" className="text-primary group-hover:text-black duration-200" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-1">{label}</p>
                <p className="text-sm text-white/80 leading-relaxed">{value}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
