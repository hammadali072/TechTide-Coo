"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavbarServicesData, NavbarAboutData } from "@/Data";
import {
  CaretDownIcon,
  ListIcon,
  XIcon,
  ArrowRightIcon,
  CodeIcon,
  DeviceMobileIcon,
  CpuIcon,
  CloudIcon,
  RocketLaunchIcon,
  TrendUpIcon,
  BuildingsIcon,
  UsersThreeIcon,
  TargetIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

const iconMap = {
  CodeIcon,
  DeviceMobileIcon,
  CpuIcon,
  CloudIcon,
  RocketLaunchIcon,
  TrendUpIcon,
  BuildingsIcon,
  UsersThreeIcon,
  TargetIcon,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled
          ? "py-3 shadow-lg border-b border-white/10"
          : "py-5 border-b border-white/5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/brand-logo-light.svg"
            alt="TechTide Corporate LLP"
            width={170}
            height={42}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-white/80"
            }`}
          >
            Home
          </Link>

          {/* About Us Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors hover:text-primary ${
                pathname.startsWith("/about") || pathname.startsWith("/company-profile")
                  ? "text-primary"
                  : "text-white/80"
              }`}
            >
              About Us
              <CaretDownIcon
                size={14}
                className={`transition-transform duration-200 ${
                  activeDropdown === "about" ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {activeDropdown === "about" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80">
                <div className="bg-tint-black-2 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-xl">
                  {NavbarAboutData.map((item) => {
                    const IconComp = iconMap[item.iconName] || BuildingsIcon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <IconComp size={18} weight="bold" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-white/60 line-clamp-1 mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Services Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors hover:text-primary ${
                pathname.startsWith("/services") ? "text-primary" : "text-white/80"
              }`}
            >
              Services
              <CaretDownIcon
                size={14}
                className={`transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {activeDropdown === "services" && (
              <div className="absolute top-full -left-20 pt-2 w-[540px]">
                <div className="bg-tint-black-2 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl grid grid-cols-2 gap-2">
                  {NavbarServicesData.map((item) => {
                    const IconComp = iconMap[item.iconName] || CodeIcon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                      >
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <IconComp size={20} weight="bold" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-white/60 line-clamp-2 mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 pt-2 border-t border-white/10 mt-1 flex items-center justify-between px-2">
                    <span className="text-xs text-white/60">Need a custom enterprise solution?</span>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      Talk to our engineers <ArrowRightIcon size={12} weight="bold" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/products"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/products" ? "text-primary" : "text-white/80"
            }`}
          >
            Products
          </Link>

          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname.startsWith("/blog") ? "text-primary" : "text-white/80"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/career"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname.startsWith("/career") ? "text-primary" : "text-white/80"
            }`}
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/contact" ? "text-primary" : "text-white/80"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/appointment"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:opacity-95 transition-all hover:scale-[1.02]"
          >
            <SparkleIcon size={16} weight="fill" />
            <span>Book Consultation</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon size={24} weight="bold" /> : <ListIcon size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-black border-b border-white/10 p-5 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-base font-semibold text-white hover:text-primary transition-colors py-1"
            >
              Home
            </Link>

            {/* Mobile About Accordion */}
            <div className="border-b border-white/10 pb-3">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-white py-1"
              >
                <span>About Us</span>
                <CaretDownIcon
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileAboutOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="mt-2 pl-3 flex flex-col gap-2 border-l border-white/10">
                  {NavbarAboutData.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-white/70 hover:text-primary py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services Accordion */}
            <div className="border-b border-white/10 pb-3">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-white py-1"
              >
                <span>Services</span>
                <CaretDownIcon
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 pl-3 flex flex-col gap-2 border-l border-white/10">
                  {NavbarServicesData.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-white/70 hover:text-primary py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="text-base font-semibold text-white hover:text-primary transition-colors py-1"
            >
              Products
            </Link>

            <Link
              href="/blog"
              className="text-base font-semibold text-white hover:text-primary transition-colors py-1"
            >
              Blog
            </Link>

            <Link
              href="/career"
              className="text-base font-semibold text-white hover:text-primary transition-colors py-1"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="text-base font-semibold text-white hover:text-primary transition-colors py-1"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/appointment"
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-semibold shadow-lg"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
