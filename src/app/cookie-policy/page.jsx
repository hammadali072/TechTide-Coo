import { LegalPagesData } from "@/lib/legal";
import LegalPageLayout from "@/components/legalPageLayout/legalPageLayout";

export const metadata = {
  title: "Cookie Policy | TechTide Corporate LLP",
  description: "Understand how TechTide Corporate uses cookies and tracking technologies to improve user experience.",
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  const pageData = LegalPagesData["cookie-policy"];
  return <LegalPageLayout page={pageData} />;
}
