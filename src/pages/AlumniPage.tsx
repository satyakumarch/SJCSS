
import Navigation from "@/components/Navigation";
import Alumni from "@/components/Alumni";
import Footer from "@/components/Footer";

const AlumniPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <div className="pt-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">Our Alumni</h1>
        </div>
      </div>
      <Alumni />
      <Footer />
    </div>
  );
};

export default AlumniPage;
