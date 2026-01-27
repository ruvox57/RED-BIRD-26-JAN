import React from "react";
import { ArrowRight } from "lucide-react";

const ProductSection = () => {
  return (
    <section
      id="products"
      className="relative bg-[#0C0C0C] py-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built for
            <br />
            <span className="font-light">Measurable Impact</span>
          </h2>
        </div>

        {/* Product Card */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* RUVOX Card */}
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 rounded-2xl p-8 relative overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Logo */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 8H16V16H8V8Z" fill="#6366F1" />
                    <path d="M16 8H24V16H16V8Z" fill="#818CF8" />
                    <path d="M8 16H16V24H8V16Z" fill="#A5B4FC" />
                    <path d="M16 16H24V24H16V16Z" fill="#C7D2FE" />
                  </svg>
                </div>
              </div>

              {/* Brand Name */}
              <h3 className="text-4xl font-bold text-white mb-8 tracking-wider">
                RUVOX
              </h3>

              {/* Placeholder content area */}
              <div className="h-32 rounded-lg bg-white/5 flex items-center justify-center">
                <span className="text-white/30 text-sm">Platform Preview</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="lg:pt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              One platform.
              <br />
              <span className="font-light">Seamless</span> enterprise
              <br />
              integrations.
            </h3>

            <button className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 mb-8">
              Explore Ruvox
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ruvox brings structure and control to complex financial workflows
              by integrating seamlessly with your existing enterprise systems.
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-sm font-medium">RS</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  Ronni Smith, Product Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
