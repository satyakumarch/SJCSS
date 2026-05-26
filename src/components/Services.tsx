import { Beaker, Computer, Trophy, Users, Microscope, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Computer Lab",
      description:
        "State-of-the-art computer labs equipped with the latest technology, high-speed internet, and specialized software to support modern learning needs.",
      icon: <Computer className="h-6 w-6" />,
      image: "computer.jpg",
      color: "from-blue-500/20 to-blue-600/10",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      title: "Electrical Lab",
      description:
        "Hands-on experience with circuits, microcontrollers, and electrical systems. Students work on real-world projects under expert supervision.",
      icon: <Beaker className="h-6 w-6" />,
      image: "electrical.jpg",
      color: "from-yellow-500/20 to-yellow-600/10",
      iconBg: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Science Labs",
      description:
        "Fully equipped laboratories for physics, chemistry, and biology. Modern equipment and safety protocols ensure an optimal learning environment.",
      icon: <Microscope className="h-6 w-6" />,
      image: "lab.jpg",
      color: "from-green-500/20 to-green-600/10",
      iconBg: "bg-green-100 text-green-600",
    },
    {
      title: "Physics Lab",
      description:
        "Dedicated physics lab for experiments and demonstrations that bridge theoretical knowledge with practical applications.",
      icon: <Trophy className="h-6 w-6" />,
      image: "phylab1.jpg",
      color: "from-purple-500/20 to-purple-600/10",
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      title: "Student Clubs & Activities",
      description:
        "A diverse range of clubs and extracurricular activities — from debate and robotics to music and arts — for every student to explore their interests.",
      icon: <Users className="h-6 w-6" />,
      image: "Activityg.jpg",
      color: "from-rose-500/20 to-rose-600/10",
      iconBg: "bg-rose-100 text-rose-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Facilities & Services</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Discover the wide range of world-class facilities and services we offer
            to enhance your academic experience and personal growth.
          </p>
        </div>

        {/* Featured first card (full width) */}
        <div className="mb-8">
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover
                          transition-all duration-300 hover:-translate-y-1">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${services[0].iconBg}`}>
                  {services[0].icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{services[0].title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{services[0].description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm
                             hover:gap-3 transition-all duration-200"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(1).map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color}`} />
              </div>
              <div className="p-5">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="btn-primary"
          >
            View All Facilities
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
