
import Navigation from "@/components/Navigation";
import Academics from "@/components/Academics";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <div className="pt-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">Academic Programs</h1>
        </div>
      </div>
      <Academics />
      <Services />
      <Footer />
    </div>
  );
};

export default AcademicsPage;
