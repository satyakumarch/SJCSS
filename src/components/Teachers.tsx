import { Phone, BookOpen } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "Arjun Prasad Khanal",
      image: "Arjun.jpg",
      qualification: "Ph.D. in Education",
      phone: "9847052183",
      subject: "Social Studies",
    },
    {
      name: "Devnand Thakur",
      image: "devnanad.jpg",
      qualification: "B.Ed in English",
      phone: "9807585951",
      subject: "English",
    },
    {
      name: "Dharampal Chaudhary",
      image: "dharampal.jpg",
      qualification: "Master in Nepali",
      phone: "9811545242",
      subject: "Nepali / Accountant",
    },
    {
      name: "Ram Prakash Chaudhary",
      image: "ramPrakash.jpg",
      qualification: "B.E. in Electrical & Electronics",
      phone: "9847167709",
      subject: "Computer Programming",
    },
    {
      name: "Kaushal Kishor Chaudhary",
      image: "kaushal.jpg",
      qualification: "Masters in English / CETVT",
      phone: "9844714007",
      subject: "English / Computer",
    },
    {
      name: "Najraj Chaudhary",
      image: "kaka.jpg",
      qualification: "Bachelor in Computer Application",
      phone: "—",
      subject: "Computer Science",
    },
    {
      name: "Bishnu Sharma",
      image: "bishnujpg.jpg",
      qualification: "Bachelor in Computer Application",
      phone: "9847190727",
      subject: "Computer Science",
    },
    {
      name: "Mohamad Aslam",
      image: "aslam.jpg",
      qualification: "B.Sc in Physics",
      phone: "9808705421",
      subject: "Physics",
    },
  ];

  // Subject color mapping
  const subjectColors: Record<string, string> = {
    "Social Studies": "bg-amber-100 text-amber-700",
    "English": "bg-blue-100 text-blue-700",
    "English / Computer": "bg-blue-100 text-blue-700",
    "Nepali / Accountant": "bg-green-100 text-green-700",
    "Computer Programming": "bg-purple-100 text-purple-700",
    "Computer Science": "bg-indigo-100 text-indigo-700",
    "Physics": "bg-rose-100 text-rose-700",
  };

  return (
    <section id="teachers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Meet the Team</span>
          <h2 className="section-title">Our Expert Faculty</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Meet our dedicated team of educators committed to excellence in teaching
            and the holistic development of every student.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden
                         shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top
                             group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subject badge on hover */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    subjectColors[teacher.subject] || "bg-gray-100 text-gray-700"
                  }`}>
                    <BookOpen className="w-3 h-3" />
                    {teacher.subject}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-primary text-base mb-1 leading-tight">
                  {teacher.name}
                </h3>
                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
                  subjectColors[teacher.subject] || "bg-gray-100 text-gray-700"
                }`}>
                  <BookOpen className="w-3 h-3" />
                  {teacher.subject}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">
                  {teacher.qualification}
                </p>
                {teacher.phone !== "—" && (
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Phone className="w-3 h-3" />
                    <span>{teacher.phone}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
