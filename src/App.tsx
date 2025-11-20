import {Logo} from "./components/Logo";
import {Hero} from "./components/Hero";
import {WhatIsRardi} from "./components/WhatIsRardi";
import {FeatureGrid} from "./components/FeatureGrid";
import {WhyOnPrem} from "./components/WhyOnPrem";
import {HowItWorks} from "./components/HowItWorks";
import {CTASection} from "./components/CTASection";
import {Footer} from "./components/Footer";
import {Button} from "./components/ui/button";
import {Menu, X} from "lucide-react";
import {useState} from "react";


export default function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            const headerOffset = 100; // Offset for sticky header plus some padding
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f2f2f2]">
            {/* Header */}
            <header className="w-full bg-[#f2f2f2] border-b border-[#333333]/20 sticky top-0 z-50">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
                    <div className="flex items-center justify-between">
                        <Logo/>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                            <a
                                href="#features"
                                className="text-[#333333] hover:opacity-70 transition-opacity text-sm lg:text-base"
                                onClick={(e) => smoothScroll(e, '#features')}
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-[#333333] hover:opacity-70 transition-opacity text-sm lg:text-base"
                                onClick={(e) => smoothScroll(e, '#how-it-works')}
                            >
                                How It Works
                            </a>
                            <a
                                href="#security"
                                className="text-[#333333] hover:opacity-70 transition-opacity text-sm lg:text-base"
                                onClick={(e) => smoothScroll(e, '#security')}
                            >
                                Security
                            </a>
                            <Button
                                className="bg-[#333333] text-[#f2f2f2] hover:bg-[#1a1a1a] px-4 lg:px-6 py-3 lg:py-4 h-auto text-sm lg:text-base"
                                style={{borderRadius: 0}}
                                onClick={() => {
                                    window.location.href = "mailto:team@rardi.io";
                                }}
                            >
                                Reach out!
                            </Button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-[#333333]"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="md:hidden flex flex-col gap-4 mt-6 pb-4 border-t border-[#333333]/20 pt-4">
                            <a
                                href="#features"
                                className="text-[#333333] hover:opacity-70 transition-opacity"
                                onClick={(e) => smoothScroll(e, '#features')}
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-[#333333] hover:opacity-70 transition-opacity"
                                onClick={(e) => smoothScroll(e, '#how-it-works')}
                            >
                                How It Works
                            </a>
                            <a
                                href="#security"
                                className="text-[#333333] hover:opacity-70 transition-opacity"
                                onClick={(e) => smoothScroll(e, '#security')}
                            >
                                Security
                            </a>
                            <Button
                                className="bg-[#333333] text-[#f2f2f2] hover:bg-[#1a1a1a] px-6 py-4 h-auto w-full"
                                style={{borderRadius: 0}}
                                onClick={() => {
                                    window.location.href = "mailto:team@rardi.io";
                                }}
                            >
                                Reach out!
                            </Button>
                        </nav>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main>
                <Hero/>
                <WhatIsRardi/>
                <div id="features">
                    <FeatureGrid/>
                </div>
                <div id="security">
                    <WhyOnPrem/>
                </div>
                <div id="how-it-works">
                    <HowItWorks/>
                </div>
                <CTASection/>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}