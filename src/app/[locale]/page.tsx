"use client"
import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
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

        <div className="space-y-10">
          <About />
          <AnimatedItem>
            <Skills />
          </AnimatedItem>
          <AnimatedItem>
            <Projects />
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
