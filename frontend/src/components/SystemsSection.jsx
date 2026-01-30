import React, { useEffect, useRef } from "react";
import { systemFeatures } from "../data/mockData";

const SystemsSection = () => {
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
      { threshold: 0.1 },
    );

    const cards = sectionRef.current?.querySelectorAll(".system-card");
    cards?.forEach((card, i) => {
      card.style.transitionDelay = `${i * 80}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent py-20 lg:py-28 overflow-hidden"
    >
      {/* Stronger Orange Gradient Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 120, 50, 0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255, 85, 0, 0.12) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-20">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight tracking-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span
              className="font-medium"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Smarter
            </span>{" "}
            <span
              className="font-bold"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Systems.
            </span>
            <br />
            <span
              className="font-medium"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Stronger
            </span>{" "}
            <span
              className="font-bold"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Outcomes.
            </span>
          </h2>
        </div>

        {/* Feature Grid with Enhanced Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {systemFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="system-card animate-on-scroll relative rounded-2xl p-6 lg:p-7 border border-white/10 hover:border-orange-500/40 transition-all duration-500 group backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(180deg, rgba(30, 30, 30, 0.9) 0%, rgba(17, 17, 17, 0.95) 100%)",
                boxShadow:
                  "0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(255, 255, 255, 0.02) inset",
              }}
            >
              {/* Subtle inner glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(255, 120, 50, 0.08) 0%, transparent 60%)",
                }}
              />

              {/* Feature Number Badge - Enhanced Orange Gradient */}
              <div
                className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5 text-sm font-bold text-white shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #FF7B00 0%, #FF5500 50%, #E04500 100%)",
                  boxShadow:
                    "0 4px 12px rgba(255, 85, 0, 0.35), 0 0 20px rgba(255, 85, 0, 0.15)",
                }}
              >
                <span style={{ fontFamily: "'Urbanist', sans-serif" }}>
                  {feature.id}
                </span>
              </div>

              {/* Title - Better Typography */}
              <h3
                className="relative text-lg lg:text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {feature.title}
              </h3>

              {/* Description - Improved Readability */}
              <p
                className="relative text-gray-400 text-sm lg:text-base leading-relaxed"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
