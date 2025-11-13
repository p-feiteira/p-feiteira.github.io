"use client"
import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Header from "./sections/header";
import Footer from "./sections/footer";
import { AnimatedItem } from "./sections/components/common/AnimatedItem";

const sections = [Skills, Projects, Contact]


export default function Page() {


  return (
    <div>
      <Header />
      <main id="main-content">
        <AnimatedItem>
          <Hero />
        </AnimatedItem>
        
        <div className="space-y-10">
          <About/>
            {sections.map((Section, index) => (
              <AnimatedItem key={index}>
                <Section />
              </AnimatedItem>
            ))}
          <Footer />
        </div>
      </main>

    </div>
  );
}