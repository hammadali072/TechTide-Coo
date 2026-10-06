import Link from "next/link";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";

const EMAIL = "info@techtidecorporate.com";

export default function CopyEmailButton() {
  return (
    <Link href={`mailto:${EMAIL}`} className="bg-black border border-white/8 rounded-2xl p-6 space-y-4 hover:border-primary/30 duration-300 group block">
      <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary duration-300">
        <EnvelopeSimpleIcon
          size={22}
          weight="bold"
          className="text-primary group-hover:text-black duration-200"
        />
      </div>
      <div>
        <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-1">
          Email Us
        </p>
        <p className="text-sm text-white/80 leading-relaxed break-all">{EMAIL}</p>
      </div>
    </Link>
  );
}
