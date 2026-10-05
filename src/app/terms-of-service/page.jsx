import { LegalPagesData } from "@/lib/legal";
import LegalPageLayout from "@/components/legalPageLayout/legalPageLayout";

export const metadata = {
  title: "Terms of Service | TechTide Corporate LLP",
  description: "Read the legal terms, conditions, and guidelines governing your use of TechTide Corporate website and services.",
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  const pageData = LegalPagesData["terms-of-service"];
  return <LegalPageLayout page={pageData} />;
}
