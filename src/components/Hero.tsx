
import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      heroRef.current.style.opacity = `${1 - scrolled / 700}`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToAdmission = () => {
    navigate('/admissions');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("janchetana.jpg")',
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/70" />
      
      {/* Content */}
      <div
        ref={heroRef}
        className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-up">
          <div className="space-y-4">
            <h2 className="text-sm sm:text-base text-white font-semibold tracking-wide uppercase">
              Welcome to Shree Janchetana Community Secondary School
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Empowering Students for a{" "}
              <span className="text-accent">Brighter Future</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Join us in creating a world of opportunities through excellence in
              education and innovative learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-200"
              onClick={navigateToAdmission}
            >
              Apply for Admission
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <Link 
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Explore Our School
            </Link>
          </div>

          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "95%", text: "Intermediate Success Rate" },
              { number: "30+", text: "Years of Excellence" },
              { number: "40+", text: "Expert Faculty" },
              { number: "500+", text: "Happy Students" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  animation: `fade-up 0.5s ease-out ${index * 0.1 + 0.5}s both`,
                }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 mt-1">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 rounded-full bg-accent/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[slide-down_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
