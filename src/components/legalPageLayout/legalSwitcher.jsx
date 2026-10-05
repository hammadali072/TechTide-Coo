import Link from "next/link";
import { ShieldCheckIcon, FileTextIcon, CookieIcon, CaretRightIcon } from "@phosphor-icons/react/dist/ssr";

const POLICIES = [
  { name: "Privacy Policy", slug: "privacy-policy", icon: ShieldCheckIcon },
  { name: "Terms of Service", slug: "terms-of-service", icon: FileTextIcon },
  { name: "Cookie Policy", slug: "cookie-policy", icon: CookieIcon },
];

export default function LegalSwitcher({ currentSlug }) {
  const otherPolicies = POLICIES.filter((p) => p.slug !== currentSlug);

  return (
    <div className="bg-tint-black-2 border border-white/8 rounded-2xl p-6 shadow-lg print:hidden">
      <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">Other Policies</h4>
      <div className="space-y-2">
        {otherPolicies.map((policy) => {
          const Icon = policy.icon;
          return (
            <Link
              key={policy.slug}
              href={`/${policy.slug}`}
              className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Icon size={20} className="text-primary" />
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {policy.name}
                </span>
              </div>
              <CaretRightIcon size={16} className="text-white/30 group-hover:text-primary transition-colors" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
