import { Link } from "react-router-dom";
import { LinkedinLogo, InstagramLogo, EnvelopeSimple, Phone, MapPin, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";

// Real link groups from the source Footer.tsx — do not invent new sections.
const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
    { label: "Company Profile", href: "/company-profile" },
];

const serviceLinks = [
    { label: "Web Application Development", href: "/services/web-applications" },
    { label: "Mobile App Development", href: "/services/mobile-applications" },
    { label: "SaaS Product Development", href: "/services/saas-product-development" },
    { label: "Custom Software Development", href: "/services/custom-software" },
    { label: "E-Commerce Development", href: "/services/ecommerce-development" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    // No backend: fake success on submit, per GUIDELINES.md §8.
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setEmail("");
        }, 600);
    };

    return (
        <footer className="bg-black text-white pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    <div className="lg:col-span-2">
                        <p className="text-xl font-semibold mb-4">
                            TechTide<span className="text-primary">.</span>
                        </p>
                        <p className="text-white/60 text-sm max-w-md leading-relaxed">
                            Based in Pakistan, serving the world. We build high performance web, mobile, and
                            SaaS solutions for businesses everywhere.
                        </p>
                        <div className="flex gap-3 mt-6">
                            <a
                                href="mailto:info@techtidecorporate.com"
                                aria-label="Email us"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
                            >
                                <EnvelopeSimple size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on LinkedIn"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
                            >
                                <LinkedinLogo size={16} />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Instagram"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
                            >
                                <InstagramLogo size={16} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h6 className="text-white mb-5">Quick Links</h6>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-white/60 text-sm hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-white mb-5">Services</h6>
                        <ul className="space-y-3 mb-5">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-white/60 text-sm hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-white/10 text-sm hover:bg-white/5 transition-colors"
                        >
                            Explore More
                            <ArrowRight size={14} className="text-primary" />
                        </Link>
                    </div>

                    <div>
                        <h6 className="text-white mb-5">Contact</h6>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 text-white/60">
                                <EnvelopeSimple size={16} className="text-primary mt-0.5 shrink-0" />
                                info@techtidecorporate.com
                            </li>
                            <li className="flex items-start gap-3 text-white/60">
                                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                                +92 324 7991484
                            </li>
                            <li className="flex items-start gap-3 text-white/60">
                                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                                G3 Heaven Mall, Zaraar Shaheed Road, Lahore
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                        <h6 className="text-white mb-1">Subscribe to our Newsletter</h6>
                        <p className="text-white/50 text-sm">Stay updated with our latest news and offers.</p>
                    </div>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-primary-start to-primary-end hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
                        >
                            {loading ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">© {new Date().getFullYear()} TechTide. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {legalLinks.map((link) => (
                            <li key={link.href}>
                                <Link to={link.href} className="text-white/50 text-xs hover:text-white transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}