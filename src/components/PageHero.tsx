import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image?: string;
}

const PageHero = ({ title, subtitle, breadcrumb, image }: PageHeroProps) => {
  return (
    <div className="relative pt-16 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: image ? `url("${image}")` : 'url("janchetana.jpg")',
          filter: "brightness(0.35)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-navy-light/70" />

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors duration-200">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-accent font-medium">{breadcrumb || title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-up">
          {title}
        </h1>

        {/* Gold divider */}
        <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-5" />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed animate-fade-up delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
