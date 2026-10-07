import { LegalPagesData } from "@/lib/legal";
import LegalPageLayout from "@/components/legalPageLayout/legalPageLayout";

export const metadata = {
  title: "Privacy Policy | FidayinCorporate",
  description: "Learn how we collect, use, and protect your personal information when you interact with our website and services.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const pageData = LegalPagesData["privacy-policy"];
  return <LegalPageLayout page={pageData} />;
}
