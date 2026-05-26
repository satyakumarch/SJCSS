import { useEffect, useRef } from "react";
import { ChevronRight, ArrowDown, Award, Users, BookOpen, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      heroRef.current.style.opacity = `${1 - scrolled / 800}`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "95%", text: "Pass Rate", icon: <Award className="w-5 h-5" /> },
    { number: "30+", text: "Years of Excellence", icon: <Star className="w-5 h-5" /> },
    { number: "40+", text: "Expert Faculty", icon: <BookOpen className="w-5 h-5" /> },
    { number: "500+", text: "Happy Students", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("janchetana.jpg")' }}
      />
      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-primary/80 to-navy-light/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      {/* Content */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-32"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                          text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8
                          animate-fade-down">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Welcome to Shree Janchetana Community Secondary School
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
            Empowering Students
            <br />
            <span className="text-accent">for a Brighter Future</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-100">
            Nurturing young minds with quality education, strong values, and a commitment
            to excellence since 2060 — in the heart of Kapilvastu, Nepal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up delay-200">
            <button
              onClick={() => navigate("/admissions")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white
                         font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200
                         shadow-gold hover:shadow-lg hover:-translate-y-0.5 text-base"
            >
              Apply for Admission
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10
                         backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl
                         hover:bg-white/20 transition-all duration-200 text-base"
            >
              Explore Our School
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-up delay-300">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4
                           hover:bg-white/15 transition-all duration-200"
              >
                <div className="flex items-center justify-center gap-1.5 text-accent mb-1">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-white/70 mt-0.5">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Hero;
