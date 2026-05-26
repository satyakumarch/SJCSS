import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Academics from "@/components/Academics";
import Footer from "@/components/Footer";

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <PageHero
        title="Academic Programs"
        subtitle="Discover our comprehensive curriculum, modern facilities, and the learning environment that prepares students for higher education and beyond."
        breadcrumb="Academics"
      />
      <Academics />
      <Footer />
    </div>
  );
};

export default AcademicsPage;
