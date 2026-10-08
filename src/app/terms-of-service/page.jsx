import { LegalPagesData } from "@/lib/legal";
import LegalPageLayout from "@/components/legalPageLayout/legalPageLayout";

export const metadata = {
  title: "Terms of Service | FidayinCorporate",
  description: "Read the legal terms, conditions, and guidelines governing your use of FidayinCorporate website and services.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  const pageData = LegalPagesData["terms-of-service"];
  return <LegalPageLayout page={pageData} />;
}
