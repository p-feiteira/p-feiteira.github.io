"use client"
import Hero from "./sections/hero";
import Services from "./sections/services";
import Contact from "./sections/contact";
import Header from "./sections/header";
import Footer from "./sections/footer";
import { AnimatedItem } from "./sections/components/common/AnimatedItem";

export default function Page() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <div className="pb-24" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-fluid-section)" }}>
          <AnimatedItem>
            <Hero />
          </AnimatedItem>
          <AnimatedItem>
            <Services />
          </AnimatedItem>
          <AnimatedItem>
            <Contact />
          </AnimatedItem>
          <Footer />
        </div>
      </main>
    </div>
  );
}
