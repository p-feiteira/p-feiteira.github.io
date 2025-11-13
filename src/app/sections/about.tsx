import { MapPin, Laptop, Headset, Dumbbell, MusicIcon, BookIcon } from "lucide-react"
import React from "react";

import InfoCard from "@/components/common/infoCard";
import { AnimatedItem } from "@/components/common/AnimatedItem";
import Image from "next/image";
import Experience from "./experience";

const metadata = {
    text: "I'm a Senior Full-Stack+AI Engineer passionate about building intelligent, scalable applications that solve real-world problems. With expertise in Python (FastAPI), React, Next.js, and modern AI technologies like LangChain and OpenAI, I specialize in architecting end-to-end solutions that combine full-stack development with generative AI capabilities. I'm experienced in building RAG pipelines, managing cloud infrastructure on AWS with Terraform, and implementing secure, observable systems. Whether working on AI-powered applications, optimizing data workflows, or automating infrastructure, I focus on creating software that drives measurable impact and exceptional user experiences.",
};

const hobbies = [
    { "title": "Gaming", "icon": Headset, "description": "One of my passions is video games. Ever since I was a child, I've always been fascinated by good stories, good storytelling and solving puzzles. The big reason I chose this area of work." },
    { "title": "Fitness", "icon": Dumbbell, "description": "Having a balance between mind and body is very important for dealing with everyday problems. So I always try to be as active as possible and eat as healthily as possible." },
    { "title": "Music", "icon": MusicIcon, "description": "I've always loved all styles of music. I really feel that each style of music has its own moment to be heard. It always ends up having an important impact on the moment of life we're living." },
    { "title": "Learning", "icon": BookIcon, "description": "Learning about everything has always fascinated me. I'm always looking for something new, different subjects to master, not just in professional way." }
];

function AboutSection() {
  return (
    <div className="w-full">
      <h1 className="text-3xl sm:text-5xl font-bold my-8 text-center">About Me</h1>
      <div className="block md:hidden">
        <p className="text-base sm:text-lg text-muted-foreground text-justify mb-4 px-4 max-w-md mx-auto">
          {metadata.text}
        </p>
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground" />
            <span className="text-md text-muted-foreground">Based in Portugal</span>
          </div>
          <div className="flex items-center gap-2">
            <Laptop className="text-muted-foreground" />
            <span className="text-md text-muted-foreground">Remote Ready</span>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="text-base sm:text-lg text-muted-foreground text-justify mb-4 max-w-3xl mx-auto">
          {metadata.text}
        </div>
        <div className="flex flex-col gap-2 mt-8 items-center text-center">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground" />
            <span className="text-md text-muted-foreground">Based in Portugal</span>
          </div>
          <div className="flex items-center gap-2">
            <Laptop className="text-muted-foreground" />
            <span className="text-md text-muted-foreground">Remote Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div id="about" className="section-spacing w-full flex flex-col gap-8 md:gap-12">
      {/* About Me Section */}
      <div className="w-full flex justify-center mb-8">
        <AnimatedItem>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
            <AboutSection />
          </div>
        </AnimatedItem>
      </div>
      {/* Experience Timeline */}
      <div className="w-full max-w-6xl mx-auto mt-20">
        <AnimatedItem>
          <Experience />
        </AnimatedItem>
      </div>
      {/* Hobbies title and cards */}
      <div className="w-full max-w-6xl mx-auto mt-20">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mx-4 sm:mx-8 my-6">Hobbies</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full px-4'>
          {hobbies.map((hobby, index) => {
            let iconProp = undefined;
            if (typeof hobby.icon === 'string') {
              iconProp = <Image src={`/icons/${hobby.icon}.svg`} alt={hobby.icon} width={24} height={24} className="dark:invert" />;
            } else if (hobby.icon) {
              iconProp = React.createElement(hobby.icon, { className: 'h-5 w-5 sm:h-6 sm:w-6 text-primary' });
            }
            return (
              <InfoCard key={index} Icon={iconProp} title={hobby.title}>{hobby.description}</InfoCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
