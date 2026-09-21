import heroImage from "../../../assets/banner-img.webp";
import { Link } from "react-router-dom";

export function HeroSection() {
    return (
        <section className="relative min-h-dvh flex items-center justify-center text-center px-6 md:px-16 overflow-hidden bg-black">
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Technology background"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <h1 className="heading-h1 text-white mb-8">
                    <span className="block">We Help Businesses Generate</span>
                    <span className="block bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                        3 to 5x More Leads
                    </span>
                </h1>

                <p className="text-white/70 text-base max-w-5xl mx-auto leading-relaxed mb-10">
                    Through high-converting websites and digital systems. We transform your generic company profile into a high-performance sales asset that builds trust and generates qualified leads.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("open-audit-drawer"))}
                        className="w-full sm:w-auto px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-start to-primary-end hover:opacity-90 transition-opacity"
                    >
                        Get Free Website Audit
                    </button>
                    <Link
                        to="/contact#contact-form"
                        className="w-full sm:w-auto px-10 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors inline-block"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}