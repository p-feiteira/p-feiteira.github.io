"use client"
import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Showcase from "./sections/showcase";
import Contact from "./sections/contact";
import Header from "./sections/header";
import Footer from "./sections/footer";
import { AnimatedItem } from "./sections/components/common/AnimatedItem";

export default function Page() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <AnimatedItem>
          <Hero />
        </AnimatedItem>

        <div className="pb-24" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-fluid-section)" }}>
          <About />
          <AnimatedItem>
            <Skills />
          </AnimatedItem>
          <AnimatedItem>
            <Showcase />
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
