import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, TrendingUp, Settings } from "lucide-react";

const skillCategories = [
  {
    icon: Server,
    title: "Backend Development",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    skills: ["Python", "Django", "FastAPI", "Flask", "PostgreSQL", "MongoDB"]
  },
  {
    icon: TrendingUp,
    title: "Data & Analytics",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter", "SQL"]
  },
  {
    icon: Settings,
    title: "DevOps & Tools",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    skills: ["Git", "Docker", "Linux", "AWS", "CI/CD"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="text-3xl mb-4 text-primary">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className={category.color}
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
