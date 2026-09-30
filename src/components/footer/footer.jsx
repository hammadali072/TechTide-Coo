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
  ArrowRightIcon,
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

  return (
    <footer className="relative z-10 bg-tint-black-2 border-t border-white/10 pt-16 pb-8 text-white/80">
      <div className="container">
        <div className="bg-gradient-to-r from-tint-black-tint to-tint-black-2 border border-white/10 rounded-2xl p-8 lg:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                Stay Ahead of Tech Trends
              </span>
              <h3 className="heading-h3 text-white">Subscribe to TechTide Corporate Insights</h3>
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
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-start to-primary-end text-white text-sm font-semibold hover:opacity-95 transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <PaperPlaneTiltIcon size={16} weight="bold" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/brand-logo-light.svg"
                alt="TechTide Corporate LLP"
                width={180}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              TechTide Corporate LLP is a modern software development agency specializing in scalable web products, mobile applications, AI workflows, and cloud solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-primary hover:border-primary/50 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinLogoIcon size={20} weight="bold" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Twitter"
              >
                <TwitterLogoIcon size={20} weight="bold" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Instagram"
              >
                <InstagramLogoIcon size={20} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="heading-h6 text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/company-profile" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> Company Profile
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> Products
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> Tech Blog
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> Book Strategy Call
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="heading-h6 text-white font-semibold">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/web-development" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> Web Software
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/saas-engineering" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> SaaS Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-infrastructure" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services/seo-marketing" className="hover:text-primary duration-300 flex items-center gap-1.5">
                  <ArrowRightIcon size={12} className="text-primary" /> Growth Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="heading-h6 text-white font-semibold">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon size={18} className="text-primary shrink-0 mt-0.5" weight="bold" />
                <span className="text-white/70">Pan India & Global Remote Operations</span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimpleIcon size={18} className="text-primary shrink-0" weight="bold" />
                <Link href="mailto:contact@techtide.co" className="text-white/70 hover:text-primary duration-300">
                  contact@techtide.co
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={18} className="text-primary shrink-0" weight="bold" />
                <Link href="tel:+919876543210" className="text-white/70 hover:text-primary duration-300">
                  +91 (987) 654-3210
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} TechTide Corporate LLP. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary duration-300">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-primary duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
