
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, Code2, TestTube } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Alumni = () => {
  const alumni = [
    {
      name: "Ram Prasad Chaudhary",
      year: "2022",
      degree: "Computer Science and Engineering",
      university: "RK University",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "ram.jpg",
    },
    {
      name: "Predeep Mauriya",
      year: "2022",
      degree: "Computer Science and Engineering",
      university: "RK University",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "predeep.jpg",
    },
    {
      name: "Omkar chauhan",
      year: "2023",
      degree: "Chemical Engineering",
      university: "Tribhuvan university",
      icon: <TestTube className="w-8 h-8 text-accent" />,
      image: "omkar.jpg",
    },
    {
      name: "Dinesh Kumar Chaudhary",
      year: "2021",
      degree: "Computer Science and Engineering",
      currentRole: "Computer Operator at Nepal Police",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "dinesh.jpg",
    },
    {
      name: "Pankaj Kumar Chaudhary",
      year: "2023",
      degree: "Computer Science and Engineering",
      university: "Kaling University",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "pankaj.jpg",
    },
    {
      name: "Bipin Kumar Gupta",
      year: "2023",
      degree: "Computer Science and Engineering",
      university:"Rungta College Bhilai",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "bipin.jpg",
    },
    {
      name:"Surender Kumar Chaudhary",
      year: "2022",
      degree: "Computer Science and Engineering",
      university:"Lovely Professional University",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "surendra.jpg",
    },
    {
      name:"Pashupati Pashwan",
      year: "2023",
      degree: "Pharmacy",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "pashupati.jpg",
    },
    {
      name:"Dipendra kumar pandey",
      year: "2023",
      degree: "Civil Engineering",
      university:"Pokhara University",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      image: "dipendra.jpg",
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
