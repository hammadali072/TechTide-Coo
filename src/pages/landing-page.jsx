import { Navbar } from "../components/ui/navbar/navbar";
import { HeroSection } from "../components/landing/heroSection/heroSection";
import { Footer } from "../components/ui/footer/footer";

function LandingPage() {
    return (
        <div className="min-h-screen bg-tint-gray">
            <Navbar />
            <main>
                <HeroSection />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;
