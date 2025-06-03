import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { SoftSkillsSection } from "@/components/soft-skills-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { LanguagesSection } from "@/components/languages-section";
import { HobbiesSection } from "@/components/hobbies-section";
import { ContactSection } from "@/components/contact-section";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <SoftSkillsSection />
      <PortfolioSection />
      <LanguagesSection />
      <HobbiesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-background border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            &copy; 2025 Pedro Feiteira. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/p-feiteira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/pedro-feiteira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:pedro.feiteira@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/pedrofeiteira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/pedro.feiteira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
