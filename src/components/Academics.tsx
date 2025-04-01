
const Academics = () => {
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
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Campus Tour"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-primary">Virtual Campus Tour</h3>
            <p className="text-gray-600">
              Experience our modern facilities and learning environments through our
              interactive virtual tour.
            </p>
          </div>
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Student Activities"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
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
