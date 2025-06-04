import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@assets/profile.jpeg";
import resume from "@assets/CV_2025.pdf"; // Placeholder for resume file

export function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = resume; // In production, this would be a real resume file
    link.download = 'Pedro_Feiteira_Resume.pdf';
    
    // For demo purposes since we don't have an actual PDF
    //alert('Resume download would start here. In production, this would download an actual PDF file.');
    
    // Uncomment for actual download:
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Professional avatar */}
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-8">
            <img 
              src={profileImage} 
              alt="Pedro Feiteira - Python Developer" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
          Python Developer
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Crafting efficient solutions and scalable applications with clean, maintainable code
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={handleContactClick} size="lg" className="px-8">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button 
            onClick={handleDownloadResume} 
            variant="outline" 
            size="lg" 
            className="px-8"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
