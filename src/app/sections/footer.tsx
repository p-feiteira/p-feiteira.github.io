"use client"

import SocialMediaSection from "@/components/common/socialMedia";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="muted-foreground-5 dark:text-white py-10 relative">
            {/* Scroll to top button - fixed position */}
            {showScrollTop && (
                <Button
                    onClick={scrollToTop}
                    size="icon"
                    className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-5 w-5" />
                </Button>
            )}
            
            <div className="flex justify-center mb-8">
                <Button 
                    onClick={scrollToTop}
                    variant="outline"
                    className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    aria-label="Back to top"
                >
                    <ArrowUp className="mr-2 h-4 w-4" />
                    Back to Top
                </Button>
            </div>
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Pedro Feiteira. All rights reserved.
                </p>
            </div>
            <div className="flex justify-center mt-4">
                <SocialMediaSection />
            </div>
        </footer>
    );
}