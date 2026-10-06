"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavbarServicesData, NavbarServicesMegaMenu, NavbarAboutData } from "@/Data";
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
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 duration-300 bg-tint-black-2",
        isScrolled ? "py-3 shadow-lg border-b border-white/10" : "py-5 border-b border-white/5"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
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

          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/"
                  className={clsx(
                    "xl:text-base text-sm font-medium duration-300 hover:text-primary",
                    pathname === "/" ? "text-primary" : "text-white/80"
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={clsx(
                    "xl:text-base text-sm font-medium duration-300 hover:text-primary",
                    pathname === "/about" ? "text-primary" : "text-white/80"
                  )}
                >
                  About
                </Link>
              </li>

              <li>
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={clsx(
                      "flex items-center gap-1.5 xl:text-base text-sm font-medium py-2 duration-200 hover:text-primary",
                      pathname.startsWith("/services") || activeDropdown === "services" ? "text-primary" : "text-white/80"
                    )}
                  >
                    Services
                    <CaretDownIcon
                      size={14}
                      className={clsx(
                        "duration-200",
                        activeDropdown === "services" && "rotate-180 text-primary"
                      )}
                    />
                  </button>

                  <div className={clsx("absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[900px] lg:w-[980px] xl:w-[1050px] duration-300", activeDropdown === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2")}>
                    <div className="bg-black/90 border border-white/10 rounded-2xl p-7 lg:p-8 shadow-2xl backdrop-blur-2xl">
                      <div className="grid grid-cols-4 gap-8">
                        {NavbarServicesMegaMenu.map((col, colIdx) => (
                          <div key={colIdx} className="space-y-6">
                            {col.groups.map((group) => (
                              <div key={group.category} className="space-y-3">
                                <h4 className="text-xs font-bold text-primary tracking-wider uppercase">
                                  {group.category}
                                </h4>
                                <ul className="space-y-2.5">
                                  {group.items.map((item) => (
                                    <li key={item.title}>
                                      <Link
                                        href={item.href}
                                        className="block text-sm text-white/70 hover:text-white duration-200 leading-snug"
                                      >
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/blog"
                  className={clsx(
                    "xl:text-base text-sm font-medium duration-200 hover:text-primary",
                    pathname.startsWith("/blog") ? "text-primary" : "text-white/80"
                  )}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={clsx(
                    "xl:text-base text-sm font-medium duration-200 hover:text-primary",
                    pathname === "/contact" ? "text-primary" : "text-white/80"
                  )}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-b from-primary-start to-primary-end text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:opacity-95 duration-200 hover:scale-[1.02]"
            >
              <SparkleIcon size={16} weight="fill" />
              <span>Get in Touch</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/15 border border-white/10 text-white hover:text-primary duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XIcon size={24} weight="bold" /> : <ListIcon size={24} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      <div className={clsx("lg:hidden fixed inset-x-0 top-[73px] rounded-xl bg-tint-black-2 border-b border-white/10 m-5 p-5 shadow-2xl max-h-[85vh] overflow-y-auto duration-300", mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")}>
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-base font-semibold text-white hover:text-primary duration-200 py-1"
          >
            Home
          </Link>

          <div className="pb-3">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={clsx("w-full flex items-center justify-between py-1 text-base font-semibold duration-300", mobileAboutOpen ? "text-primary" : "text-white")}
            >
              <span>About Us</span>
              <CaretDownIcon
                size={16}
                className={clsx(
                  "duration-200",
                  mobileAboutOpen && "rotate-180 text-primary"
                )}
              />
            </button>
            {mobileAboutOpen && (
              <div className="mt-2 pl-3 border-l-2 border-primary/15">
                <ul className="flex flex-col gap-2">
                  {NavbarAboutData.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 hover:text-primary py-1"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pb-3">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={clsx("w-full flex items-center justify-between py-1 text-base font-semibold duration-300", mobileServicesOpen ? "text-primary" : "text-white")}
            >
              <span>Services</span>
              <CaretDownIcon
                size={16}
                className={clsx(
                  "duration-200",
                  mobileServicesOpen && "rotate-180 text-primary"
                )}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 pl-3 border-l border-white/10 space-y-4">
                {NavbarServicesMegaMenu.map((col, colIdx) => (
                  <div key={colIdx} className="space-y-3">
                    {col.groups.map((group) => (
                      <div key={group.category} className="space-y-1.5">
                        <span className="text-[11px] font-bold text-primary tracking-wider uppercase block">
                          {group.category}
                        </span>
                        <ul className="flex flex-col gap-1.5 pl-2">
                          {group.items.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm text-white/70 hover:text-white block py-0.5 duration-200"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="text-base font-semibold text-white hover:text-primary duration-200 py-1"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-base font-semibold text-white hover:text-primary duration-200 py-1"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              className="w-full text-center py-3 rounded-xl bg-gradient-to-b from-primary-start to-primary-end text-white font-semibold shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
