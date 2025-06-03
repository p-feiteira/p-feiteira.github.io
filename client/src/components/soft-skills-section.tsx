import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Lightbulb, Target, Clock, MessageSquare, Puzzle } from "lucide-react";

const softSkillsCategories = [
  {
    icon: Users,
    title: "Collaboration",
    skills: ["Team Leadership", "Cross-functional Communication", "Mentoring"]
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    skills: ["Critical Thinking", "Creative Solutions", "Analytical Approach"]
  },
  {
    icon: Target,
    title: "Project Management",
    skills: ["Goal Setting", "Time Management", "Resource Planning"]
  },
  {
    icon: MessageSquare,
    title: "Communication",
    skills: ["Technical Writing", "Client Consultation", "Presentation Skills"]
  }
];

export function SoftSkillsSection() {
  return (
    <section id="soft-skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 theme-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Beyond technical expertise</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="block w-full text-xs py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}