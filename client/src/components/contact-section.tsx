import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pedro.feiteira@example.com",
    href: "mailto:pedro.feiteira@example.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pedro-feiteira",
    href: "https://linkedin.com/in/pedro-feiteira"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/p-feiteira",
    href: "https://github.com/p-feiteira"
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@pedrofeiteira",
    href: "https://twitter.com/pedrofeiteira"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@pedro.feiteira",
    href: "https://instagram.com/pedro.feiteira"
  }
];

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground">
            Ready to start your next project? Let's discuss how I can help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <a 
                        href={contact.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 min-h-[120px] resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
