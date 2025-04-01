
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
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000"
    },
    {
      title: "Electrical Lab",
      description: "The electrical engineering lab provides hands-on experience with circuits, microcontrollers, and electrical systems. Students can work on real-world projects under expert supervision.",
      icon: <Beaker className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
    },
    {
      title: "Science Labs",
      description: "Our fully equipped science laboratories support practical learning in physics, chemistry, and biology. Modern equipment and safety protocols ensure an optimal learning environment.",
      icon: <Microscope className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1532094349884-543019aff0ec?q=80&w=1000"
    },
    {
      title: "Sports Complex",
      description: "The sports complex includes indoor and outdoor facilities for basketball, football, swimming, tennis, and more. Professional coaching is available for all skill levels.",
      icon: <Trophy className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1000"
    },
    {
      title: "Student Clubs & Activities",
      description: "We offer a diverse range of clubs and extracurricular activities to enhance student life. From debate and robotics to music and arts, there's something for everyone to explore their interests.",
      icon: <Users className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000"
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
