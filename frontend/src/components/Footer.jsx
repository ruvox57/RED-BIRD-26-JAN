import React from "react";
import { navLinks } from "../data/mockData";
import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src="/logo.jpg"
              alt="Equinio Logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-white font-bold text-lg tracking-wider">
              EQUINIO
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-white text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs">
            © 2025 Equinio Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
