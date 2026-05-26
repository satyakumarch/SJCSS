import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Alumni from "@/components/Alumni";
import Footer from "@/components/Footer";

const AlumniPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <PageHero
        title="Our Distinguished Alumni"
        subtitle="Meet our successful graduates who have gone on to achieve remarkable success in engineering, science, and public service across Nepal and beyond."
        breadcrumb="Alumni"
      />
      <Alumni />
      <Footer />
    </div>
  );
};

export default AlumniPage;
