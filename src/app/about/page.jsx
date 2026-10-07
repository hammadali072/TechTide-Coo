import HeroSec2 from "@/components/heroSec/heroSec2";
import AboutOverviewSec from "@/components/aboutOverviewSec/aboutOverviewSec";
import AboutMissionVisionSec from "@/components/aboutMissionVisionSec/aboutMissionVisionSec";
import LeadershipSec from "@/components/leadershipSec/leadershipSec";
import AboutCoreValuesSec from "@/components/aboutCoreValuesSec/aboutCoreValuesSec";
import Faq from "@/components/faq/faq";

export const metadata = {
  title: "About Us | FidayinCorporate",
  description: "FidayinCorporate is a full-service digital agency and software development company. We partner with startups, SMEs, and enterprises to build scalable, secure, and results-driven digital products that deliver measurable impact.",
  alternates: { canonical: "/about" },
};

const faqItems = [
  {
    question: "What is FidayinCorporate?",
    answer:
      "FidayinCorporate is a full-service digital agency and software development company based in Lahore, Pakistan. We specialize in building high-converting websites, custom web applications, ERP/CRM systems, mobile apps, and digital growth solutions for businesses worldwide.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with startups, SMEs, and enterprises across various industries including e-commerce, healthcare, finance, education, real estate, logistics, and professional services. Our solutions are tailored to each industry's specific needs.",
  },
  {
    question: "Where is TechTide located?",
    answer:
      "Our office is located at G3 Heaven Mall, Zaraar Shaheed Road, Lahore, Pakistan. We operate with a remote-first culture, serving clients globally with team members working across different time zones.",
  },
  {
    question: "What makes TechTide different from other agencies?",
    answer:
      "We combine technical excellence with a deep focus on business outcomes. Our approach is consultative — we don't just build what you ask for; we help you define the right strategy, choose the best technology, and create solutions that drive measurable growth.",
  },
  {
    question: "How big is your team?",
    answer:
      "Our team comprises experienced developers, UI/UX designers, project managers, and digital strategists. We maintain a lean, agile structure that allows us to deliver high-quality work efficiently while keeping communication direct and transparent.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSec2
        pill="About FidayinCorporate"
        title="Bridging Technology & Business Growth"
        accentWord="Business Growth"
        description="We are a team of innovators, developers, designers, marketers, and strategists committed to helping businesses transform ideas into powerful digital solutions."
        pb="pb-24"
      />
      <AboutOverviewSec />
      <AboutMissionVisionSec />
      <LeadershipSec />
      <AboutCoreValuesSec />
      <Faq
        tag="About TechTide"
        title="Frequently Asked Questions"
        subtitle="Get to know who we are, what we stand for and why businesses trust us."
        items={faqItems}
      />
    </>
  );
}
