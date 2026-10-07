import { LegalPagesData } from "@/lib/legal";
import LegalPageLayout from "@/components/legalPageLayout/legalPageLayout";

export const metadata = {
  title: "Cookie Policy | FidayinCorporate",
  description: "Understand how FidayinCorporate uses cookies and tracking technologies to improve user experience.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  const pageData = LegalPagesData["cookie-policy"];
  return <LegalPageLayout page={pageData} />;
}
