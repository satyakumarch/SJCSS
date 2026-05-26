import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <PageHero
        title="Contact Us"
        subtitle="Have questions about admissions, academics, or anything else? We'd love to hear from you. Reach out and we'll respond promptly."
        breadcrumb="Contact"
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
