import React from "react";

const Footer = () => {
  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "API", href: "#" },
  ];

  const companyLinks = [
    { name: "About", href: "#home" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "/contact" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "FAQ", href: "#faq" },
    { name: "Status", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050505]">
      {/* CSS for animations */}
      <style>{`
        .footer-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #a78bfa;
        }
      `}</style>

      {/* Large Brand Name Section */}
      <div className="relative py-20 lg:py-32 overflow-hidden">
        {/* Giant EQUINIO text */}
        <div className="flex items-center justify-center">
          <h2
            className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-bold tracking-tight select-none"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: "#1a1a2e",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            EQUINIO
          </h2>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div>
              <a href="#home" className="flex items-center gap-2.5 group mb-4">
                <img
                  src="/logo.jpg"
                  alt="Equinio Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                />
              </a>
              <p
                className="text-gray-500 text-sm"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Powered by Equinio Technologies
              </p>
            </div>

            {/* Product Column */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-6"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Product
              </h4>
              <ul className="space-y-4">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="footer-link text-gray-400 text-sm"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-6"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Company
              </h4>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="footer-link text-gray-400 text-sm"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-6"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Support
              </h4>
              <ul className="space-y-4">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="footer-link text-gray-400 text-sm"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              © 2026 Equinio. All rights reserved..
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
