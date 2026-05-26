import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MorningPrayer from "@/components/MorningPrayer";
import Services from "@/components/Services";
import Academics from "@/components/Academics";
import StudentLife from "@/components/StudentLife";
import Alumni from "@/components/Alumni";
import SchoolLeadership from "@/components/SchoolLeadership";
import Teachers from "@/components/Teachers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <AboutUs />
      <MorningPrayer />
      <Services />
      <Academics />
      <StudentLife />
      <Alumni />
      <SchoolLeadership />
      <Teachers />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
