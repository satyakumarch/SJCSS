
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, Code2, TestTube } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Alumni = () => {
  const alumni = [
    {
      name: "Sarah Johnson",
      year: "2020",
      degree: "Computer Science and Engineering",
      university: "MIT",
      currentRole: "Software Engineer at Google",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
    },
    {
      name: "Michael Chen",
      year: "2019",
      degree: "Civil Engineering",
      university: "Stanford University",
      currentRole: "Structural Engineer at AECOM",
      icon: <Building2 className="w-8 h-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      year: "2021",
      degree: "Chemical Engineering",
      university: "UC Berkeley",
      currentRole: "Process Engineer at Shell",
      icon: <TestTube className="w-8 h-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop",
    },
    {
      name: "David Kim",
      year: "2020",
      degree: "Computer Science and Engineering",
      university: "Georgia Tech",
      currentRole: "ML Engineer at Microsoft",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop",
    },
    {
      name: "Jessica Patel",
      year: "2019",
      degree: "Civil Engineering",
      university: "University of Michigan",
      currentRole: "Project Manager at Turner Construction",
      icon: <Building2 className="w-8 h-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
    },
    {
      name: "Alexander Wright",
      year: "2021",
      degree: "Chemical Engineering",
      university: "Purdue University",
      currentRole: "Research Engineer at Dow Chemical",
      icon: <TestTube className="w-8 h-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop",
    },
  ];

  return (
    <section id="alumni" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Distinguished Alumni
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our successful graduates who have gone on to achieve remarkable success in various engineering disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alum, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-between w-full">
                  {alum.icon}
                  <Badge variant="outline">{alum.year}</Badge>
                </div>
                <div className="flex items-start gap-4 w-full">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={alum.image} alt={alum.name} />
                    <AvatarFallback>{alum.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{alum.name}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{alum.degree}</p>
                    <p className="text-muted-foreground text-sm mb-2">{alum.university}</p>
                    <p className="text-sm font-medium text-accent">{alum.currentRole}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
