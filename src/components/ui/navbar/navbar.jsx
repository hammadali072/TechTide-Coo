import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListIcon, XIcon, CaretDownIcon, ArrowRightIcon } from "@phosphor-icons/react";

import logoDark from "../../../assets/brand-logo-dark.svg"

// Real nav structure from the source Navbar.tsx — do not invent new items.
const navItems = [
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact Us" },
];

const aboutLinks = [
    { href: "/about#overview", label: "Overview", description: "Learn about our story, mission, and values." },
    { href: "/about#leadership", label: "Leadership", description: "Meet the experts driving our success." },
    { href: "/company-profile", label: "Company Profile", description: "View our company details and registration." },
];

const serviceCategories = [
    {
        category: "Development",
        items: [
            { href: "/services/web-applications", label: "Web Application Development" },
            { href: "/services/mobile-applications", label: "Mobile App Development" },
            { href: "/services/saas-product-development", label: "SaaS Product Development" },
            { href: "/services/custom-software", label: "Custom Software Development" },
            { href: "/services/ecommerce-development", label: "E-Commerce Development" },
        ],
    },
    {
        category: "Design",
        items: [
            { href: "/services/ui-ux-design", label: "UI/UX Design" },
            { href: "/services/brand-identity", label: "Brand Identity" },
        ],
    },
    {
        category: "AI & Automation",
        items: [
            { href: "/services/ai-automation", label: "AI Automation" },
            { href: "/services/machine-learning", label: "Machine Learning" },
            { href: "/services/generative-ai", label: "Generative AI" },
            { href: "/services/api-integration", label: "API Integration & Workflow Automation" },
        ],
    },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();
    const isLandingPage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const transparent = isLandingPage && !isScrolled;

    const linkClasses = (active) =>
        `text-sm font-medium transition-colors ${active
            ? "text-primary"
            : transparent
                ? "text-white/80 hover:text-white"
                : "text-black/70 hover:text-black"
        }`;

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 h-20 transition-all duration-300 ${transparent ? "bg-transparent" : "bg-white/90 backdrop-blur-md shadow-sm"
                }`}
        >
            <Link to="/" className="text-xl font-semibold text-inherit">
                <img src={logoDark} alt="TechTide Co." />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
                <div
                    className="relative"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                >
                    <button className={`flex items-center gap-1 ${linkClasses(location.pathname.startsWith("/about"))}`}>
                        About Us
                        <CaretDownIcon size={14} className={`transition-transform ${isAboutOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isAboutOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                            <div className="w-[420px] bg-white rounded-2xl shadow-xl border border-black/5 p-6 grid grid-cols-1 gap-1">
                                {aboutLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        className="p-3 rounded-xl hover:bg-tint-gray transition-colors"
                                    >
                                        <p className="font-medium text-black">{item.label}</p>
                                        <p className="text-sm text-black/50">{item.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                >
                    <Link
                        to="/services"
                        className={`flex items-center gap-1 ${linkClasses(location.pathname.startsWith("/services"))}`}
                    >
                        Services
                        <CaretDownIcon size={14} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                    </Link>
                    {isServicesOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                            <div className="w-[640px] bg-white rounded-2xl shadow-xl border border-black/5 p-8 grid grid-cols-3 gap-8">
                                {serviceCategories.map((cat) => (
                                    <div key={cat.category}>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-3">
                                            {cat.category}
                                        </p>
                                        <div className="space-y-2">
                                            {cat.items.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    to={item.href}
                                                    className="block text-sm text-black/70 hover:text-primary transition-colors"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {navItems.map((item) => (
                    <Link key={item.href} to={item.href} className={linkClasses(location.pathname === item.href)}>
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-partner-drawer"))}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-white bg-black hover:bg-primary transition-colors"
                >
                    Partner with us
                    <ArrowRightIcon size={16} />
                </button>
            </div>

            {/* Mobile toggle */}
            <button
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? (
                    <XIcon size={24} className={transparent ? "text-white" : "text-black"} />
                ) : (
                    <ListIcon size={24} className={transparent ? "text-white" : "text-black"} />
                )}
            </button>

            {/* Mobile menu panel */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 overflow-y-auto p-6">
                    <div className="flex flex-col gap-1">
                        {[{ href: "/", label: "Home" }, ...navItems].map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="py-3 px-3 rounded-xl text-black font-medium hover:bg-tint-gray transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <hr className="my-3 border-black/10" />
                        <p className="text-xs font-semibold uppercase tracking-wider text-black/40 px-3 mb-1">About Us</p>
                        {aboutLinks.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="py-2.5 px-3 rounded-xl text-black/70 hover:bg-tint-gray transition-colors text-sm"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <hr className="my-3 border-black/10" />
                        <p className="text-xs font-semibold uppercase tracking-wider text-black/40 px-3 mb-1">Services</p>
                        {serviceCategories.flatMap((cat) => cat.items).map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="py-2.5 px-3 rounded-xl text-black/70 hover:bg-tint-gray transition-colors text-sm"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent("open-partner-drawer"))}
                            className="mt-4 w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-start to-primary-end"
                        >
                            Partner with us
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}