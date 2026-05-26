import { Code2, TestTube, Building2, Pill, Shield, GraduationCap, MapPin, Briefcase } from "lucide-react";

const Alumni = () => {
  const alumni = [
    {
      name: "Ram Prasad Chaudhary",
      year: "2022",
      degree: "Computer Science & Engineering",
      university: "RK University",
      icon: <Code2 className="w-5 h-5" />,
      image: "ram.jpg",
      color: "bg-blue-50 border-blue-100",
      iconColor: "bg-blue-100 text-blue-600",
    },
    {
      name: "Predeep Mauriya",
      year: "2022",
      degree: "Computer Science & Engineering",
      university: "RK University",
      icon: <Code2 className="w-5 h-5" />,
      image: "predeep.jpg",
      color: "bg-indigo-50 border-indigo-100",
      iconColor: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Omkar Chauhan",
      year: "2023",
      degree: "Chemical Engineering",
      university: "Tribhuvan University",
      icon: <TestTube className="w-5 h-5" />,
      image: "omkar.jpg",
      color: "bg-green-50 border-green-100",
      iconColor: "bg-green-100 text-green-600",
    },
    {
      name: "Dinesh Kumar Chaudhary",
      year: "2021",
      degree: "Computer Science & Engineering",
      currentRole: "Computer Operator, Nepal Police",
      icon: <Shield className="w-5 h-5" />,
      image: "dinesh.jpg",
      color: "bg-slate-50 border-slate-100",
      iconColor: "bg-slate-100 text-slate-600",
    },
    {
      name: "Pankaj Kumar Chaudhary",
      year: "2023",
      degree: "Computer Science & Engineering",
      university: "Kalinga University",
      icon: <Code2 className="w-5 h-5" />,
      image: "pankaj.jpg",
      color: "bg-purple-50 border-purple-100",
      iconColor: "bg-purple-100 text-purple-600",
    },
    {
      name: "Bipin Kumar Gupta",
      year: "2023",
      degree: "Computer Science & Engineering",
      university: "Rungta College, Bhilai",
      icon: <Code2 className="w-5 h-5" />,
      image: "bipin.jpg",
      color: "bg-cyan-50 border-cyan-100",
      iconColor: "bg-cyan-100 text-cyan-600",
    },
    {
      name: "Surender Kumar Chaudhary",
      year: "2022",
      degree: "Computer Science & Engineering",
      university: "Lovely Professional University",
      icon: <Code2 className="w-5 h-5" />,
      image: "surendra.jpg",
      color: "bg-orange-50 border-orange-100",
      iconColor: "bg-orange-100 text-orange-600",
    },
    {
      name: "Pashupati Pashwan",
      year: "2023",
      degree: "Pharmacy",
      icon: <Pill className="w-5 h-5" />,
      image: "pashupati.jpg",
      color: "bg-pink-50 border-pink-100",
      iconColor: "bg-pink-100 text-pink-600",
    },
    {
      name: "Dipendra Kumar Pandey",
      year: "2023",
      degree: "Civil Engineering",
      university: "Pokhara University",
      icon: <Building2 className="w-5 h-5" />,
      image: "dipendra.jpg",
      color: "bg-teal-50 border-teal-100",
      iconColor: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <section id="alumni" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Our Success Stories</span>
          <h2 className="section-title">Distinguished Alumni</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Meet our successful graduates who have gone on to achieve remarkable success
            in engineering, science, and public service across Nepal and beyond.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alum, index) => (
            <div
              key={index}
              className={`group relative border rounded-2xl p-5 hover:shadow-card-hover
                          transition-all duration-300 hover:-translate-y-1 ${alum.color}`}
            >
              {/* Year badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-white border border-gray-200 text-primary text-xs font-bold
                                 px-2.5 py-1 rounded-full shadow-sm">
                  {alum.year}
                </span>
              </div>

              <div className="flex items-start gap-4">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-24 rounded-xl overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={alum.image}
                      alt={alum.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xl font-bold">${alum.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}</div>`;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 pr-8">
                  <h3 className="font-bold text-primary text-sm leading-tight mb-1 truncate">
                    {alum.name}
                  </h3>
                  <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium mb-2 ${alum.iconColor}`}>
                    {alum.icon}
                    <span className="truncate">{alum.degree}</span>
                  </div>

                  {alum.university && (
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <GraduationCap className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{alum.university}</span>
                    </div>
                  )}
                  {alum.currentRole && (
                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-0.5">
                      <Briefcase className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{alum.currentRole}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-primary rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "100+", label: "Alumni Worldwide" },
              { number: "15+", label: "Universities" },
              { number: "8+", label: "Fields of Study" },
              { number: "95%", label: "Employment Rate" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
