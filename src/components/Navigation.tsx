import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Academics", href: "/academics" },
    { title: "Services", href: "/services" },
    { title: "Student Life", href: "/student-life" },
    { title: "Alumni", href: "/alumni" },
    { title: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-white shadow-md py-0"
          : "bg-transparent py-2"
      }`}
    >
      {/* Top accent bar */}
      {!isScrolled && (
        <div className="bg-primary/80 text-white text-xs py-1.5 px-4 text-center hidden md:block">
          <span className="opacity-80">Shree Janchetana Community Secondary School</span>
          <span className="mx-3 opacity-40">|</span>
          <span className="opacity-80">Laxmanpur, Kapilvastu, Nepal</span>
          <span className="mx-3 opacity-40">|</span>
          <span className="opacity-80">📞 +977 9807585951</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <GraduationCap className={`w-6 h-6 ${isScrolled ? "text-accent" : "text-white"}`} />
            </div>
            <div>
              <div className={`font-bold text-lg leading-tight transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}>
                SJCSS
              </div>
              <div className={`text-xs leading-tight transition-colors duration-300 ${
                isScrolled ? "text-gray-500" : "text-white/70"
              }`}>
                Est. 2060
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive(link.href)
                    ? isScrolled
                      ? "text-accent bg-accent/10"
                      : "text-accent bg-white/10"
                    : isScrolled
                    ? "text-gray-700 hover:text-primary hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.title}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="ml-3 px-5 py-2 bg-accent text-white text-sm font-semibold rounded-lg
                         hover:bg-accent/90 transition-all duration-200 shadow-sm hover:shadow-gold"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? "text-primary hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-accent bg-accent/10 font-semibold"
                  : "text-gray-700 hover:bg-gray-50 hover:text-primary"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <Link
              to="/admissions"
              className="flex items-center justify-center w-full px-4 py-3 bg-accent text-white
                         font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
