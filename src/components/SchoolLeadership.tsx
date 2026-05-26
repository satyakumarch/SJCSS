import { Quote } from "lucide-react";

const SchoolLeadership = () => {
  const leaders = [
    {
      name: "Arjun Prasad Khanal",
      position: "Chancellor",
      bio: "With over 30 years of experience in education, Mr. Khanal has led our institution to numerous accolades and recognitions. His visionary leadership has shaped the school's commitment to academic excellence and community development.",
      image: "arjunpra.jpg",
      quote: "Education is the most powerful tool we can use to change the world.",
    },
    {
      name: "Mr. Devnand Thakur",
      position: "Principal",
      bio: "Under Mr. Devnand Thakur's leadership, our school has expanded its facilities and educational programs to provide the best learning environment. He is dedicated to nurturing every student's potential and fostering a culture of excellence.",
      image: "devnanad.jpg",
      quote: "Every student has the potential to achieve greatness with the right guidance.",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Guiding Our School</span>
          <h2 className="section-title">Our Leadership</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Meet the visionary leaders who guide our institution's mission, values,
            and commitment to educational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="sm:w-2/5 relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 sm:h-full object-cover object-top
                               group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent sm:bg-gradient-to-r" />

                  {/* Position badge */}
                  <div className="absolute bottom-4 left-4 sm:hidden">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      {leader.position}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="hidden sm:inline-block bg-accent/10 text-accent text-xs font-bold
                                    tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                      {leader.position}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{leader.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{leader.bio}</p>
                  </div>

                  {/* Quote */}
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <div className="flex items-start gap-2">
                      <Quote className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm italic leading-relaxed">
                        "{leader.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolLeadership;
