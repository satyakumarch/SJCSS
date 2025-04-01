
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SchoolLeadership = () => {
  const leaders = [
    {
      name: "Dr. James Wilson",
      position: "Chancellor",
      bio: "Dr. Wilson has over 30 years of experience in education and has led our institution to numerous accolades and recognitions.",
      image: "satya12.jpg",
    },
    {
      name: "Mr.Devnand Thakur ",
      position: "Principal",
      bio: "Under Mr. Devnand Thakur  leadership, our school has expanded its facilities and educational programs to provide the best learning environment.",
      image: "devnanad.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the visionary leaders behind our institution who guide our mission and values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>{leader.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">
                      {leader.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{leader.bio}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolLeadership;
