import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <PageHero
        title="Our Facilities & Services"
        subtitle="Explore the world-class facilities and services we offer to enhance your academic experience and support holistic student development."
        breadcrumb="Services"
      />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
