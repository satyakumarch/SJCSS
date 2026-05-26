import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, Users, FlaskConical } from "lucide-react";

const Academics = () => {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  const campusImages = [
    "janakpur.jpg",
    "butwal.jpg",
    "tour1.jpg",
    "tour2.jpg",
    "tour3jpg.jpg",
    "tour4.jpg",
    "child.jpg",
    "computer1.jpg",
  ];

  const activityImages = [
    "swarshati.jpg",
    "Activityg.jpg",
    "class.jpg",
    "exam.jpg",
    "exam4.jpg",
    "exam2.jpg",
    "prize.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage1((prev) => (prev + 1) % campusImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage2((prev) => (prev + 1) % activityImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const Slideshow = ({
    images,
    current,
    setCurrent,
    label,
    sublabel,
  }: {
    images: string[];
    current: number;
    setCurrent: (i: number) => void;
    label: string;
    sublabel: string;
  }) => (
    <div className="group">
      <div className="relative rounded-2xl overflow-hidden shadow-card-hover h-72">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${label} ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

        {/* Navigation arrows */}
        <button
          onClick={() => setCurrent((current - 1 + images.length) % images.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm
                     rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100
                     transition-opacity duration-200 hover:bg-white/40"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setCurrent((current + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm
                     rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100
                     transition-opacity duration-200 hover:bg-white/40"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                index === current ? "w-5 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-white/50"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs
                        px-2 py-1 rounded-full">
          {current + 1} / {images.length}
        </div>
      </div>

      <div className="mt-4 px-1">
        <h3 className="text-lg font-bold text-primary">{label}</h3>
        <p className="text-gray-500 text-sm mt-1">{sublabel}</p>
      </div>
    </div>
  );

  const features = [
    {
      icon: <Lightbulb className="w-6 h-6 text-accent" />,
      title: "Innovative Curriculum",
      description: "Our curriculum fosters critical thinking, creativity, and problem-solving skills aligned with national standards.",
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Experienced Faculty",
      description: "Learn from passionate educators with deep subject expertise and a commitment to student success.",
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-accent" />,
      title: "Modern Facilities",
      description: "Access state-of-the-art laboratories, computer labs, and learning resources for hands-on education.",
    },
  ];

  return (
    <section id="academics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Learning & Growth</span>
          <h2 className="section-title">Academic Excellence</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Discover our comprehensive academic programs, modern facilities, and
            the vibrant learning environment that sets our students up for success.
          </p>
        </div>

        {/* Slideshows */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <Slideshow
            images={campusImages}
            current={currentImage1}
            setCurrent={setCurrentImage1}
            label="Virtual Campus Tour"
            sublabel="Explore our modern facilities and beautiful campus environment."
          />
          <Slideshow
            images={activityImages}
            current={currentImage2}
            setCurrent={setCurrentImage2}
            label="Student Activities"
            sublabel="Engage in hands-on learning, events, and collaborative projects."
          />
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-secondary rounded-2xl border border-gray-100
                         hover:border-accent/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4
                              group-hover:bg-accent/20 transition-colors duration-200">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
