import { ArrowRight, Trophy, Palette, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const StudentLife = () => {
  const activities = [
    {
      title: "Sports & Athletics",
      description:
        "Develop teamwork, discipline, and leadership skills through our comprehensive sports programs. From football to athletics, we nurture champions.",
      image: "janche.jpg",
      icon: <Trophy className="w-5 h-5" />,
      color: "from-blue-600/80 to-blue-800/80",
      tag: "Physical Development",
    },
    {
      title: "Arts & Culture",
      description:
        "Express your creativity through music, drama, dance, and visual arts. Our cultural programs celebrate Nepal's rich heritage and traditions.",
      image: "cloths.jpg",
      icon: <Palette className="w-5 h-5" />,
      color: "from-rose-600/80 to-rose-800/80",
      tag: "Creative Expression",
    },
    {
      title: "Clubs & Organizations",
      description:
        "Join diverse clubs and organizations to pursue your interests, develop new skills, and build lasting friendships with like-minded peers.",
      image: "quize.jpg",
      icon: <Users2 className="w-5 h-5" />,
      color: "from-emerald-600/80 to-emerald-800/80",
      tag: "Community & Leadership",
    },
  ];

  return (
    <section id="student-life" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Beyond the Classroom</span>
          <h2 className="section-title">Student Life</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Experience a vibrant campus life filled with activities, events, and
            opportunities for personal growth and lifelong memories.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover
                         transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold
                                   px-3 py-1 rounded-full">
                    {activity.tag}
                  </span>
                </div>

                {/* Icon overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    {activity.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {activity.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary">{activity.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link to="/student-life" className="btn-primary">
            Explore Student Life
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
