import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Laptop, Code, Rocket } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 theme-transition">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Python developer with experience in building robust web applications, 
              data analysis tools, and automation solutions. I love solving complex problems with 
              clean, efficient code.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Currently transitioning into freelancing to help businesses achieve their goals 
              through custom software solutions and technical consulting.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Location Flexible</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Laptop className="h-4 w-4 mr-2 text-primary" />
                <span>Remote Ready</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Code className="h-4 w-4 mr-2 text-primary" />
                  Clean Code Advocate
                </h3>
                <p className="text-muted-foreground">
                  Writing maintainable, well-documented code following industry best practices
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Rocket className="h-4 w-4 mr-2 text-primary" />
                  Performance Focused
                </h3>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, scalability, and user experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
