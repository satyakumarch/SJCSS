
const StudentLife = () => {
  return (
    <section id="student-life" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Student Life
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience a vibrant campus life filled with activities, events, and
            opportunities for personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501286353178-1ec881814838"
              alt="Sports Activities"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Sports & Athletics
              </h3>
              <p className="text-gray-600">
                Develop teamwork and leadership skills through our comprehensive
                sports programs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Arts & Culture"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Arts & Culture
              </h3>
              <p className="text-gray-600">
                Express your creativity through music, drama, and visual arts
                programs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Club Activities"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Clubs & Organizations
              </h3>
              <p className="text-gray-600">
                Join diverse clubs and organizations to pursue your interests and
                make lasting friendships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
