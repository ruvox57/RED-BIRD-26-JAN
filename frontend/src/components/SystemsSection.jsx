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
      className="relative bg-[#0a0a0a] py-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="font-light">Smarter</span> Systems.
            <br />
            <span className="font-light">Stronger</span> Outcomes.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {systemFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="system-card animate-on-scroll bg-[#111111] rounded-xl p-6 border border-white/5 hover:border-orange-500/30 transition-all duration-500 group"
            >
              {/* Feature Number Badge */}
              <div
                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-5 text-sm font-bold text-white ${
                  index < 3
                    ? "bg-gradient-to-br from-orange-500 to-orange-600"
                    : "bg-gradient-to-br from-red-500 to-red-600"
                } shadow-lg`}
              >
                {feature.id}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
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
