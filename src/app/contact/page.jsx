import HeroSec2 from "@/components/heroSec/heroSec2";
import ContactFormSec from "@/components/contactFormSec/contactFormSec";
import Faq from "@/components/faq/faq";

export const metadata = {
  title: "Contact Us | FidayinCorporate",
  description: "Have an idea for a website, ERP, CRM, or custom software? Contact FidayinCorporate today, and our expert team will help bring your project to life quickly and efficiently.",
  alternates: { canonical: "/contact" },
};

const faqItems = [
  {
    question: "How quickly do you respond to inquiries?",
    answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling us directly at +44 20 4620 5555.",
  },
  {
    question: "What information should I include in my inquiry?",
    answer: "To help us understand your project better, please include a brief description of your project, your timeline, budget range (if any), and any specific requirements or features you need.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer a free initial discovery call to understand your project, discuss potential solutions, and determine if we're the right fit. There's no obligation to proceed afterward.",
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Absolutely. We frequently collaborate with in-house teams to augment their capabilities, provide specialized expertise, or take on specific project modules. We integrate smoothly with existing workflows.",
  },
  {
    question: "What is your project management process?",
    answer: "We follow an agile methodology with regular sprint cycles, daily stand-ups, and transparent progress reporting. You'll have a dedicated project manager and access to our project management tools to track progress in real time.",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSec2
        pill="Get In Touch with FidayinCorporate"
        title="Let's Build Your Next Web or Software Project"
        accentWord="Web or Software Project"
        description="Have an idea for a website, ERP, CRM, or custom software? Contact us today, and our expert team will help bring your project to life quickly and efficiently."
        pb="pb-20"
      />
      <ContactFormSec />
      <Faq
        tag="Contact FAQ"
        title="Getting in Touch"
        subtitle="Common questions about reaching us and how we work with clients."
        items={faqItems}
      />
    </>
  );
}
