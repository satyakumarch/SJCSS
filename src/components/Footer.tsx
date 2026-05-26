import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Academics", href: "/academics" },
    { title: "Admissions", href: "/admissions" },
    { title: "Student Life", href: "/student-life" },
    { title: "Alumni", href: "/alumni" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-navy-dark text-white">
      {/* Top CTA strip */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold text-sm">
              Ready to join our school community?
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm
                         px-5 py-2 rounded-lg hover:bg-white/90 transition-colors duration-200"
            >
              Apply for Admission <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">SJCSS</div>
                <div className="text-white/50 text-xs">Est. 2060</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Shree Janchetana Community Secondary School — committed to providing
              quality education and fostering a nurturing environment for every student
              in Kapilvastu, Nepal.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center
                           hover:bg-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center
                           hover:bg-accent transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200
                               flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Laxmanpur, Shivraj Municipality,<br />Kapilvastu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+9779807585951"
                  className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
                >
                  +977 9807585951
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:janchetanacsschool@gmail.com"
                  className="text-white/60 hover:text-accent text-sm transition-colors duration-200 break-all"
                >
                  janchetanacsschool@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">
              Newsletter
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Subscribe to receive school news, events, and important announcements.
            </p>
            {subscribed ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center">
                <p className="text-green-400 text-sm font-medium">
                  ✓ Subscribed successfully!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl
                             text-white placeholder-white/40 text-sm focus:outline-none
                             focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-accent text-white font-semibold text-sm
                             rounded-xl hover:bg-accent/90 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
            <p>
              &copy; {new Date().getFullYear()} Shree Janchetana Community Secondary School.
              All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/about" className="hover:text-white/70 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/about" className="hover:text-white/70 transition-colors duration-200">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
