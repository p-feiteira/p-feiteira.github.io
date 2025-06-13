"use client"
import Hero from "@/hero";
import About from "@/about";
import Skills from "@/skills";
import Projects from "@/projects";
import Contact from "@/contact";
import Header from "@/header";
import Footer from "@/footer";
import { AnimatedItem } from "@/components/common/AnimatedItem";

const sections = [Skills, Projects, Contact]


export default function Page() {


  return (
    <div>
      <Header />
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

    </div>
  );
}