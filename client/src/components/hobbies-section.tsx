import { Card, CardContent } from "@/components/ui/card";
import { Camera, Gamepad2, Mountain, Music, Book, Dumbbell } from "lucide-react";

const hobbies = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and exploring composition"
  },
  {
    icon: Mountain,
    title: "Hiking",
    description: "Exploring nature and staying active outdoors"
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Strategy games and problem-solving challenges"
  },
  {
    icon: Book,
    title: "Reading",
    description: "Tech books, sci-fi, and continuous learning"
  },
  {
    icon: Music,
    title: "Music",
    description: "Listening to various genres and discovering artists"
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Maintaining physical and mental well-being"
  }
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Personal Interests</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">What I enjoy outside of coding</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-muted-foreground text-sm">{hobby.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}