import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import StudentLife from "@/components/StudentLife";
import Footer from "@/components/Footer";

const StudentLifePage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <PageHero
        title="Student Life"
        subtitle="Experience a vibrant campus life filled with sports, arts, clubs, and events that shape well-rounded individuals ready for the world."
        breadcrumb="Student Life"
      />
      <StudentLife />
      <Footer />
    </div>
  );
};

export default StudentLifePage;
