import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AboutUs from "@/components/AboutUs";
import Teachers from "@/components/Teachers";
import SchoolLeadership from "@/components/SchoolLeadership";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <PageHero
        title="About Our School"
        subtitle="Learn about our history, mission, and the dedicated team that makes Shree Janchetana Community Secondary School a place of excellence."
        breadcrumb="About Us"
      />
      <AboutUs />
      <SchoolLeadership />
      <Teachers />
      <Footer />
    </div>
  );
};

export default AboutPage;
