import { MapPin, Laptop, Headset, Dumbbell, MusicIcon, BookIcon } from "lucide-react"
import React from "react";

import InfoCard from "@/components/common/infoCard";
import { AnimatedItem } from "@/components/common/AnimatedItem";
import Image from "next/image";

const metadata = {
    text: "I'm a Software Developer with a passion for building efficient and scalable applications. I have experience in various programming languages and frameworks, and I'm always eager to learn new technologies. My goal is to create software that not only meets the needs of users but also exceeds their expectations.",
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
        {/* About image as divider */}
        <div className="flex justify-center mt-8 mb-6">
          <Image
            src="/about.png"
            alt="About Picture"
            width={448}
            height={448}
            className="rounded-xl opacity-80 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] object-cover"
            loading="eager"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="text-base sm:text-lg text-muted-foreground text-justify mb-4 max-w-md mx-auto">
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
      {/* Mobile: stack, Desktop: grid */}
      <div className="block md:grid md:grid-cols-2 md:items-center md:gap-4 md:space-y-0 mb-8">
        <div className="w-full md:h-full md:flex md:flex-col md:justify-center md:px-8">
          <AnimatedItem>
            <div className="w-full md:max-w-xl">
              <AboutSection />
            </div>
          </AnimatedItem>
        </div>
        {/* About image only on desktop */}
        <div className="hidden md:flex w-full justify-center items-center md:px-8">
          <Image
            src="/about.png"
            alt="About Picture"
            width={448}
            height={448}
            className="rounded-xl opacity-80 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] object-cover"
            loading="eager"
            priority
          />
        </div>
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
        {/* Hobbies image as divider on mobile, always below cards */}
        <div className="flex justify-center items-center mt-10 md:mt-10">
          <Image
            src="/hobbies.png"
            alt="Hobbies Picture"
            width={448}
            height={448}
            className="rounded-xl opacity-80 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] object-cover"
            loading="eager"
            priority
          />
        </div>
      </div>
    </div>
  );
}
