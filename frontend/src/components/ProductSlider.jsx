import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const ProductSlider = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24 border-t border-white/5 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Built for
            <br />
            <span className="font-light">Measurable Impact</span>
          </h2>
        </div>

        {/* Product Card */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Product Visual Card - RUVOX */}
          <div
            className="relative rounded-2xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-800 group"
            style={{ boxShadow: "0 20px 60px rgba(99, 102, 241, 0.3)" }}
          >
            {/* Animated background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="relative z-10 p-8">
              {/* Logo Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect
                      x="4"
                      y="4"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#818CF8"
                    />
                    <rect
                      x="18"
                      y="4"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#A5B4FC"
                    />
                    <rect
                      x="4"
                      y="18"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#A5B4FC"
                    />
                    <rect
                      x="18"
                      y="18"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#C7D2FE"
                    />
                  </svg>
                </div>
              </div>

              {/* Product Name */}
              <h3
                className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wider"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                RUVOX
              </h3>

              {/* Product Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/image (8).jpg"
                  alt="Ruvox Platform Interface"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="lg:pt-4">
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              One platform.
              <br />
              <span className="font-light">Seamless</span> enterprise
              <br />
              integrations.
            </h3>

            <button className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 mb-8 hover:scale-105">
              Explore Ruvox
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <p
              className="text-gray-400 text-sm leading-relaxed mb-8"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              "Ruvox brings structure and control to complex financial workflows
              by integrating seamlessly with your existing enterprise systems."
            </p>

            {/* Founder */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-sm font-medium">RS</span>
              </div>
              <div>
                <p
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
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

export default ProductSlider;
