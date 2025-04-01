
const Teachers = () => {
  const teachers = [
    {
      name: "Arjun Prasad Khanal",
      image: "Arjun.jpg",
      qualification: "Ph.D. in Education",
      degrees: ["B.Ed", "M.Ed", "Ph.D. (Education)"],
      subject: "Mathematics"
    },
    {
      name: "Devnand Thakur",
      image: "devnanad.jpg",
      qualification: "",
      degrees: [ "B.Ed in English", "M.A (English)",],
      subject: "English"
    },
    {
      name: "Dharampal Chaudhary",
      image: "dharampal.jpg",
      qualification: "Master in Nepali",
      degrees: ["B.A (English)", "M.A (Literature)", "Ph.D. (Literature)"],
      subject: "Nepali/Accountant"
    },
    {
      name: "Ram Prakash Chaudhary",
      image: "ramPrakash.jpg",
      qualification: "Engineering in Computer Science",
      degrees: ["bechelor in Electrical and Electronic Engineering"],
      subject: "Computer Programming"
    },
    {
      name: "Kaushal Kishor Chaudhary",
      image: "kaushal.jpg",
      qualification: "Masters in English/CETVT",
      degrees: ["B.Sc (Physics)", "M.Sc (Physics)", "B.Ed"],
      subject: "English/Computer"
    },
    {
      name: "Najraj Chaudhary",
      image: "kaka.jpg",
      qualification: "bachelor in Computer Application",
      degrees: ["B.Sc (Physics)", "M.Sc (Physics)", "B.Ed"],
      subject: "Computer Science"
    },
    {
      name: "Bishnu Sharma",
      image: "bishnujpg.jpg",
      qualification: "Bechelor in Computer Application",
      degrees: ["B.Sc (Physics)", "M.Sc (Physics)", "B.Ed"],
      subject: "Computer Science"
    },
    {
      name: "Mohamad Aslam",
      image: "aslam.jpg",
      qualification: "Masters in Physics",
      degrees: ["B.Sc (Physics)", "M.Sc (Physics)", "B.Ed"],
      subject: "Physics"
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Expert Faculty
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of educators committed to excellence in teaching and student development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">{teacher.name}</h3>
                <p className="text-accent font-medium mb-2">{teacher.subject}</p>
                <p className="text-gray-600 text-sm mb-3">{teacher.qualification}</p>
                <div className="space-y-1">
                  {teacher.degrees.map((degree, idx) => (
                    <p key={idx} className="text-xs text-gray-500">{degree}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
