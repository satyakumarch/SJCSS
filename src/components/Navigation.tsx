
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Academics", href: "/academics" },
    { title: "Student Life", href: "/student-life" },
    { title: "Alumni", href: "/alumni" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-primary font-bold text-xl tracking-tight"
              >
                SJCSS
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className={`transition-colors duration-200 font-medium ${
                    location.pathname === link.href 
                      ? "text-accent" 
                      : "text-gray-700 hover:text-accent"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => setShowAuthDialog(true)}
                >
                  <User size={18} />
                  Login
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-accent transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2 animate-fade-down">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    to={link.href}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      location.pathname === link.href 
                        ? "text-accent bg-accent/10" 
                        : "text-gray-700 hover:bg-accent/10 hover:text-accent"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="px-4 py-2 space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={() => {
                      setShowAuthDialog(true);
                      setIsOpen(false);
                    }}
                  >
                    <User size={18} />
                    Login
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Dialog */}
      {showAuthDialog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-fade-up">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">Login / Sign Up</h2>
              <button
                onClick={() => setShowAuthDialog(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-3 h-12"
                onClick={() => {
                  console.log("Google login clicked");
                  // Implement Google login
                }}
              >
                <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-3 h-12"
                onClick={() => {
                  console.log("Facebook login clicked");
                  // Implement Facebook login
                }}
              >
                <img src="https://www.facebook.com/favicon.ico" className="w-5 h-5" alt="Facebook" />
                Continue with Facebook
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  console.log("Email login clicked");
                  // Implement email login
                }}
              >
                Continue with Email
              </Button>
              <p className="text-center text-sm text-gray-500">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
