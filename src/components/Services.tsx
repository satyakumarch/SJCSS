
import { 
  Beaker, 
  Computer, 
  Trophy, 
  Users, 
  Microscope 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Student Computer Lab",
      description: "Our state-of-the-art computer labs are equipped with the latest technology and software to support your learning needs. Students have access to high-speed internet and specialized programs for various courses.",
      icon: <Computer className="h-8 w-8 text-primary" />,
      image: "computer.jpg"
    },
    {
      title: "Electrical Lab",
      description: "The electrical engineering lab provides hands-on experience with circuits, microcontrollers, and electrical systems. Students can work on real-world projects under expert supervision.",
      icon: <Beaker className="h-8 w-8 text-primary" />,
      image: "electrical.jpg"
    },
    {
      title: "Science Labs",
      description: "Our fully equipped science laboratories support practical learning in physics, chemistry, and biology. Modern equipment and safety protocols ensure an optimal learning environment.",
      icon: <Microscope className="h-8 w-8 text-primary" />,
      image: "phylab.jpg"
    },
    {
      title: "Physics Lab",
      description: "The physics lab is designed for experiments and demonstrations that enhance theoretical knowledge. Students can explore concepts through practical applications.",
      icon: <Trophy className="h-8 w-8 text-primary" />,
      image: "phylab1.jpg"
    },
    {
      title: "Student Clubs & Activities",
      description: "We offer a diverse range of clubs and extracurricular activities to enhance student life. From debate and robotics to music and arts, there's something for everyone to explore their interests.",
      icon: <Users className="h-8 w-8 text-primary" />,
      image: "Activityg.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the wide range of facilities and services we offer to enhance your academic experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <CardHeader className="flex flex-row items-center gap-4 pt-6">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
