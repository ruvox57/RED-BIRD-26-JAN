import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/mockData";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active link based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* CSS for animations */}
      <style>{`
        @keyframes navGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 100, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.02); }
          50% { box-shadow: 0 0 30px rgba(255, 100, 0, 0.15), inset 0 0 30px rgba(255, 255, 255, 0.03); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(255, 100, 0, 0.2); }
          50% { border-color: rgba(255, 100, 0, 0.4); }
        }
        .nav-glass {
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }
        .nav-glass-scrolled {
          background: linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%);
          backdrop-filter: blur(25px) saturate(200%);
          -webkit-backdrop-filter: blur(25px) saturate(200%);
          animation: navGlow 4s ease-in-out infinite;
        }
        .nav-link-active {
          color: #ff6b35 !important;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #ff6b35 25%, #fff 50%, #ff6b35 75%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .logo-glow:hover {
          filter: drop-shadow(0 0 8px rgba(255, 100, 0, 0.6));
        }
      `}</style>

      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full border ${
          isScrolled || isMobileMenuOpen
            ? "nav-glass-scrolled border-orange-500/20 shadow-2xl"
            : "nav-glass border-white/10"
        }`}
        style={{
          width: "min(95%, 1200px)",
        }}
      >
        {/* Animated border gradient */}
        <div
          className="absolute inset-0 rounded-full opacity-50 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255, 100, 0, 0.1), transparent)",
            animation: isScrolled
              ? "pulse-border 3s ease-in-out infinite"
              : "none",
          }}
        />

        <div className="relative px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo with glow effect */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/logo.jpg"
                  alt="Equinio Logo"
                  className="relative w-9 h-9 rounded-full object-cover border-2 border-white/10 group-hover:border-orange-500/50 transition-all duration-300 logo-glow"
                />
              </div>
              <span
                className="text-white font-bold text-lg tracking-wider group-hover:shimmer-text transition-all duration-300"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                EQUINIO
              </span>
            </a>

            {/* Desktop Navigation with pill indicators */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeLink === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {/* Active indicator background */}
                  {activeLink === link.href && (
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full border border-orange-500/30"
                      style={{
                        boxShadow: "0 0 15px rgba(255, 100, 0, 0.2)",
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* CTA Button with enhanced effects */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,100,0,0.5)] hover:scale-105"
              >
                {/* Shimmer overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button with animation */}
            <button
              className="lg:hidden relative text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div
                className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : ""}`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown with glass effect */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div
            className="nav-glass-scrolled border border-white/10 rounded-2xl p-4"
            style={{
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-gray-300 hover:text-white text-base font-medium px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeLink === link.href
                      ? "bg-orange-500/10 text-white border-l-2 border-orange-500"
                      : "hover:bg-white/5"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveLink(link.href);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold px-5 py-3 rounded-full flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(255,100,0,0.4)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="relative z-10 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
