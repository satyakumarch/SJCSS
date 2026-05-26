import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <PageHero
        title="Admissions"
        subtitle="Join the Shree Janchetana family. Complete the form below to begin your admission process and take the first step toward a brighter future."
        breadcrumb="Admissions"
      />
      <AdmissionForm />
      <Footer />
    </div>
  );
};

export default AdmissionsPage;
