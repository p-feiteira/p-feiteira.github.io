import { MapPin, Laptop, Headset, Dumbbell, MusicIcon, BookIcon } from "lucide-react"

import InfoCard from "@/components/common/infoCard";
import { AnimatedItem } from "@/components/common/AnimatedItem";
import Image from "next/image";

export default function About() {
    return <div id='about' className="grid grid-cols-2 gap-4 space-y-30">
        <div className="col-start-2 row-start-1">
            <AnimatedItem><AboutSection /></AnimatedItem>
        </div>
        <div className="col-start-1 row-start-1">
            <AnimatedItem>
              <div className="flex justify-center items-center ml-30">
                <Image
                  src="/about.png"
                  alt="About Picture"
                  width={500}
                  height={500}
                  className="rounded-xl opacity-80"
                  loading="eager"
                  priority
              />
              </div>
              </AnimatedItem>
        </div>
        <div className="col-start-1 row-start-2">
          <div className="flex justify-center items-center">
            <AnimatedItem><FreeTime /></AnimatedItem>
          </div>
        </div>
        <div className="col-start-2 row-start-2">
            <AnimatedItem>
              <div className="flex justify-center items-center my-40">
                <Image
                  src="/hobbies.png"
                  alt="Hobbies Picture"
                  width={400}
                  height={400}
                  className="rounded-xl opacity-80"
                  loading="eager"
                  priority
              />
              </div>
              </AnimatedItem>
        </div>
    </div>
}

const metadata = {
    text: "I'm a Software Developer with a passion for building efficient and scalable applications. I have experience in various programming languages and frameworks, and I'm always eager to learn new technologies. My goal is to create software that not only meets the needs of users but also exceeds their expectations.",
}

function AboutSection() {
  return (
    <div className="text-center px-4 ">
      <h1 className="text-5xl font-bold my-8">About Me</h1>

      <div className="max-w-xl mx-auto">
        {metadata.text.split('\n').map((line, index) => (
          <p
            key={index}
            className="text-lg text-muted-foreground text-justify mb-4"
          >
            {line}
          </p>
        ))}

        <div className="flex flex-col sm:flex-row sm:justify-center items-start sm:items-center gap-4 mt-8">
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


const hobbies = [
    { "title": "Gaming", "icon": Headset, "description": "One of my passions is video games. Ever since I was a child, I've always been fascinated by good stories, good storytelling and solving puzzles. The big reason I chose this area of work." },
    { "title": "Fitness", "icon": Dumbbell, "description": "Having a balance between mind and body is very important for dealing with everyday problems. So I always try to be as active as possible and eat as healthily as possible." },
    { "title": "Music", "icon": MusicIcon, "description": "I've always loved all styles of music. I really feel that each style of music has its own moment to be heard. It always ends up having an important impact on the moment of life we're living." },
    { "title": "Learning", "icon": BookIcon, "description": "Learning about everything has always fascinated me. I'm always looking for something new, different subjects to master, not just in professional way." }
]

function FreeTime() {
    return (
        <div className="w-xl">
            <h1 className="text-5xl font-bold text-end mx-8 my-6">Hobbies</h1>
                <div className='grid grid-cols-2 mb-4 gap-4 justify-between w-4xl'>
                    {
                        hobbies.map((hobby, index) => (
                            <InfoCard key={index} title={hobby.title} Icon={hobby.icon}>{hobby.description}</InfoCard>
                        ))
                    }
                </div>
        </div>
    );
}
