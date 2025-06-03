import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

const languages = [
  {
    language: "Portuguese",
    level: "Native",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
  },
  {
    language: "English",
    level: "Fluent",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  },
  {
    language: "Spanish",
    level: "Intermediate",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
  }
];

export function LanguagesSection() {
  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Languages</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Communicating across cultures</p>
        </div>
        
        <Card className="hover-lift">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <Badge variant="secondary" className={`${lang.color} text-sm px-4 py-2 mb-2`}>
                    {lang.language}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}