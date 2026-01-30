import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const ProductSlider = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  // Color schemes for each product
  const colorSchemes = {
    blue: {
      gradient: "from-indigo-600 via-blue-700 to-purple-800",
      glow: "rgba(99, 102, 241, 0.3)",
      button: "bg-indigo-600 hover:bg-indigo-700",
      accent: "#818CF8",
    },
    purple: {
      gradient: "from-purple-600 via-purple-700 to-indigo-800",
      glow: "rgba(147, 51, 234, 0.3)",
      button: "bg-purple-600 hover:bg-purple-700",
      accent: "#A78BFA",
    },
    teal: {
      gradient: "from-teal-600 via-cyan-700 to-blue-800",
      glow: "rgba(20, 184, 166, 0.3)",
      button: "bg-teal-600 hover:bg-teal-700",
      accent: "#2DD4BF",
    },
    green: {
      gradient: "from-emerald-600 via-green-700 to-teal-800",
      glow: "rgba(16, 185, 129, 0.3)",
      button: "bg-emerald-600 hover:bg-emerald-700",
      accent: "#34D399",
    },
  };

  const currentProduct = products[currentIndex];
  const colors = colorSchemes[currentProduct.color] || colorSchemes.blue;

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

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning],
  );

  const goToPrevious = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === products.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative bg-transparent py-20 lg:py-28 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="font-bold">Built</span> for
            <br />
            <span className="font-medium">Measurable Impact</span>
          </h2>
        </div>

        {/* Product Card Container */}
        <div className="relative">
          {/* Arrow Controls */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Product Card */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-8 lg:px-16">
            {/* Left - Product Visual (NO background) */}
            <div
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 group min-h-[350px] lg:min-h-[450px] flex flex-col justify-center p-8 lg:p-10 ${
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Logo Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center border border-white/20"
                  style={{ backgroundColor: `${colors.accent}20` }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect
                      x="4"
                      y="4"
                      width="10"
                      height="10"
                      rx="2"
                      fill={colors.accent}
                    />
                    <rect
                      x="18"
                      y="4"
                      width="10"
                      height="10"
                      rx="2"
                      fill={colors.accent}
                      opacity="0.7"
                    />
                    <rect
                      x="4"
                      y="18"
                      width="10"
                      height="10"
                      rx="2"
                      fill={colors.accent}
                      opacity="0.7"
                    />
                    <rect
                      x="18"
                      y="18"
                      width="10"
                      height="10"
                      rx="2"
                      fill={colors.accent}
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Product Name */}
              <h3
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 tracking-wider"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {currentProduct.name.toUpperCase()}
              </h3>

              {/* Coming Soon Badge */}
              {currentProduct.comingSoon && (
                <span
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold mb-6 w-fit"
                  style={{
                    backgroundColor: `${colors.accent}30`,
                    color: colors.accent,
                    border: `1px solid ${colors.accent}50`,
                  }}
                >
                  Coming Soon
                </span>
              )}

              {/* Product Image or Placeholder */}
              {currentProduct.image ? (
                <div className="rounded-xl overflow-hidden mt-4">
                  <img
                    src={currentProduct.image}
                    alt={`${currentProduct.name} Platform Interface`}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div
                  className="rounded-xl h-48 flex items-center justify-center mt-4"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent}20 0%, ${colors.accent}05 100%)`,
                    border: `1px dashed ${colors.accent}40`,
                  }}
                >
                  <span
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    Product preview coming soon
                  </span>
                </div>
              )}
            </div>

            {/* Right - Product Description */}
            <div
              className={`lg:pt-4 transition-all duration-500 ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <h3
                className="text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {currentProduct.tagline.split(".").map((part, i) =>
                  i === 0 ? (
                    <span key={i}>
                      <span className="font-bold">{part.trim()}</span>.
                      <br />
                    </span>
                  ) : part.trim() ? (
                    <span key={i} className="font-medium">
                      {part.trim()}.
                    </span>
                  ) : null,
                )}
              </h3>

              {currentProduct.comingSoon ? (
                <button
                  type="button"
                  onClick={() => navigate("/finzura-notify")}
                  className={`group inline-flex items-center gap-3 ${colors.button} text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 mb-8 hover:scale-105`}
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              ) : (
                <a
                  href={currentProduct.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-3 ${colors.button} text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 mb-8 hover:scale-105`}
                >
                  {`Explore ${currentProduct.name}`}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              )}

              <p
                className="text-gray-400 text-base leading-relaxed mb-8"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                "{currentProduct.description}"
              </p>

              {/* Founder */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accent}80 100%)`,
                  }}
                >
                  {currentProduct.founderImage ? (
                    <img
                      src={currentProduct.founderImage}
                      alt={currentProduct.founder}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-sm font-medium">
                      {currentProduct.founder
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div>
                  <p
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    {currentProduct.founder}, {currentProduct.founderRole}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  index === currentIndex
                    ? "bg-orange-500 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
