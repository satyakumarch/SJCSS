import React, { useState, useEffect } from 'react';

const Academics = () => {
  // First slideshow state
  const [currentImage1, setCurrentImage1] = useState(0);
  const campusImages = [
    "janakpur.jpg",
    "kaka.jpg",
    "kaushal.jpg", 
    "omkar.jpg"
  ];

  // Second slideshow state
  const [currentImage2, setCurrentImage2] = useState(0);
  const activityImages = [
    "swarshati.jpg",
    "activity2.jpg",
    "activity3.jpg",
    "activity4.jpg"
  ];

  // Effect for first slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage1((prev) => (prev + 1) % campusImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Effect for second slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage2((prev) => (prev + 1) % activityImages.length);
    }, 4000); // Slightly different timing for variation
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Academic Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive academic programs and state-of-the-art facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* First Image Slideshow */}
            <div className="relative rounded-lg shadow-lg w-full h-64 overflow-hidden">
              {campusImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Campus Tour ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-64 object-cover transition-opacity duration-1000 ${
                    index === currentImage1 ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Slideshow indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                {campusImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage1(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImage1 ? 'bg-white' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-primary">Virtual Campus Tour</h3>
            <p className="text-gray-600">
              Experience our modern facilities and learning environments through our
              interactive virtual tour.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Second Image Slideshow */}
            <div className="relative rounded-lg shadow-lg w-full h-64 overflow-hidden">
              {activityImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Student Activities ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-64 object-cover transition-opacity duration-1000 ${
                    index === currentImage2 ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Slideshow indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                {activityImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage2(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImage2 ? 'bg-white' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-primary">Student Activities</h3>
            <p className="text-gray-600">
              Engage in hands-on learning experiences and collaborative projects that
              enhance your academic journey.
            </p>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {[
            {
              title: "Innovative Curriculum",
              description:
                "Our curriculum is designed to foster critical thinking and creativity.",
            },
            {
              title: "Experienced Faculty",
              description:
                "Learn from industry experts and passionate educators.",
            },
            {
              title: "Modern Facilities",
              description:
                "Access to state-of-the-art laboratories and learning resources.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-secondary rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;