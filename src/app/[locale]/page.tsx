"use client"
import Hero from "./sections/hero";
import Services from "./sections/services";
import Contact from "./sections/contact";
import Header from "./sections/header";
import Footer from "./sections/footer";
import { AnimatedItem } from "./sections/components/common/AnimatedItem";
import { ScrollProgressBar } from "./sections/components/common/ScrollProgressBar";

export default function Page() {
  return (
    <div>
      <ScrollProgressBar />
      <Header />
      <main id="main-content">
        <div className="pb-24" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-fluid-section)" }}>
          {/* Hero manages its own staggered entry — no outer wrapper needed */}
          <Hero />
          <AnimatedItem>
            <Services />
          </AnimatedItem>
          <AnimatedItem delay={0.05}>
            <Contact />
          </AnimatedItem>
          <AnimatedItem direction="none" delay={0.1}>
            <Footer />
          </AnimatedItem>
        </div>
      </main>
    </div>
  );
}
