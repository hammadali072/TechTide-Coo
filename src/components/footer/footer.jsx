"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LinkedinLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
  CheckCircleIcon,
  ArrowUpIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 bg-tint-black-2 border-t border-white/10 text-white/80">
      <div className="container">
        {/* <div className="bg-gradient-to-b from-tint-black-tint to-tint-black-2 border border-white/10 rounded-2xl p-8 lg:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                Stay Ahead of Tech Trends
              </span>
              <h3 className="heading-h3 text-white">Subscribe to FidayinCorporate Insights</h3>
              <p className="text-sm text-white/70 mt-2 max-w-xl">
                Get monthly deep dives on AI automation, SaaS architecture, web performance, and software growth strategies delivered straight to your inbox.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <CheckCircleIcon size={24} weight="fill" />
                  <div>
                    <div className="text-sm font-semibold">Thank you for subscribing!</div>
                    <div className="text-xs text-emerald-400/80">Check your inbox for our latest edition.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-1 focus:ring-primary text-sm duration-200"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-b from-primary-start to-primary-end text-white text-sm font-semibold hover:opacity-95 duration-200 shadow-lg shadow-primary/20 whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <PaperPlaneTiltIcon size={16} weight="bold" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/brand-logo-light.svg"
                alt="FidayinCorporate"
                width={180}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm lg:text-base text-white/70 leading-relaxed max-w-sm">
              FidayinCorporate is a modern software development agency specializing in scalable web products, mobile applications, AI workflows, and cloud solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-primary hover:border-primary/50 duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinLogoIcon size={20} weight="bold" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-primary hover:border-primary/50 duration-200"
                aria-label="Twitter"
              >
                <TwitterLogoIcon size={20} weight="bold" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-primary hover:border-primary/50 duration-200"
                aria-label="Instagram"
              >
                <InstagramLogoIcon size={20} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="heading-h6 text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2.5 lg:text-base text-sm">
              <li>
                <Link href="/about" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/company-profile" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> Company Profile
                </Link>
              </li>
              <li>
                <Link href="/products" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> Products
                </Link>
              </li>
              <li>
                <Link href="/career" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> Tech Blog
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> Book Strategy Call
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="heading-h6 text-white font-semibold">Our Services</h4>
            <ul className="space-y-2.5 lg:text-base text-sm">
              <li>
                <Link href="/services/web-development" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> Web Software
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/saas-engineering" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> SaaS Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-infrastructure" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services/seo-marketing" className="group/link hover:text-primary duration-300 flex items-center gap-2">
                  <span className="size-1.5 bg-primary outline outline-primary outline-offset-2 rounded-full shrink-0 group-hover/link:bg-primary group-hover/link:border-primary duration-200" /> Growth Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-white/60 font-semibold tracking-widest uppercase text-sm">Direct Contact</h4>
              <Link href="mailto:info@fidayincorporate.io" className="text-white hover:text-primary duration-300 block text-sm lg:text-base">
                info@fidayincorporate.io
              </Link>
            </div>

            <div className="space-y-4">
              <h4 className="text-white/60 font-semibold tracking-widest uppercase text-sm">Global Lines</h4>
              <ul className="space-y-5 lg:text-base text-sm">
                <li className="flex flex-col gap-1">
                  <span className="text-white/60 flex items-center gap-3 text-sm"><Image src="/assets/flags/gb.svg" alt="UK Flag" width={28} height={28} className="object-cover shrink-0" /> UK (London)</span>
                  <Link href="tel:+442046205555" className="text-white hover:text-primary duration-300 ml-10">
                    +44 20 4620 5555
                  </Link>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white/60 flex items-center gap-3 text-sm"><Image src="/assets/flags/ca.svg" alt="Canada Flag" width={28} height={28} className="object-cover shrink-0" /> CA (Montréal)</span>
                  <Link href="tel:+14388030005" className="text-white hover:text-primary duration-300 ml-10">
                    +1 438 803 0005
                  </Link>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white/60 flex items-center gap-3 text-sm"><Image src="/assets/flags/us.svg" alt="USA Flag" width={28} height={28} className="object-cover shrink-0" /> USA (Toll-Free)</span>
                  <Link href="tel:+18888850688" className="text-white hover:text-primary duration-300 ml-10">
                    +1 888 885 0688
                  </Link>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white/60 flex items-center gap-3 text-sm"><Image src="/assets/flags/nl.svg" alt="Netherlands Flag" width={28} height={28} className="object-cover shrink-0" /> NL (EU Portal)</span>
                  <Link href="tel:+3197010280805" className="text-white hover:text-primary duration-300 ml-10">
                    +31 970 102 80805
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <section className="relative bg-primary py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
            <div>
              © {new Date().getFullYear()} FidayinCorporate. All rights reserved. A trading name of <b>AL RAYAH GLOBAL GROUP LTD</b>.
            </div>

            <div className="static md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-10 order-first md:order-none">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="size-11 sm:size-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-black duration-300 shadow-lg shadow-primary/30 border-4 border-white cursor-pointer focus:outline-none"
              >
                <ArrowUpIcon size={20} weight="bold" />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="relative text-white text-sm font-medium after:content-[''] after:absolute after:w-0 after:h-px after:bg-white after:bottom-0 after:left-0 after:duration-500 hover:after:w-full">Privacy Policy</Link>
              <Link href="/terms-of-service" className="relative text-white text-sm font-medium after:content-[''] after:absolute after:w-0 after:h-px after:bg-white after:bottom-0 after:left-0 after:duration-500 hover:after:w-full">Terms of Service</Link>
              <Link href="/cookie-policy" className="relative text-white text-sm font-medium after:content-[''] after:absolute after:w-0 after:h-px after:bg-white after:bottom-0 after:left-0 after:duration-500 hover:after:w-full">Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
