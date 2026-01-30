import React, { useEffect, useRef } from "react";

// Company names from reference website
const companies = [
  "Wealthro",
  "Finyon",
  "Aegra",
  "Portivio",
  "Vaultic",
  "Altoris",
  "Quantora",
  "Fundara",
];

const TrustedSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone items for infinite scroll effect
    const scrollContent = scrollContainer.querySelector(".scroll-content");
    if (scrollContent) {
      const clone = scrollContent.cloneNode(true);
      scrollContainer.appendChild(clone);
    }
  }, []);

  return (
    <section className="relative bg-transparent py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-10">
          <p
            className="text-gray-400 text-sm flex items-center justify-center gap-2"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            <span className="text-orange-500 text-base">✦</span>
            Trusted by top innovative teams
          </p>
        </div>
      </div>

      {/* Infinite Scroll Logos */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <div ref={scrollRef} className="flex overflow-hidden">
          <div className="scroll-content flex items-center gap-12 animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap px-2"
              >
                <div
                  className="w-5 h-5 rounded flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255, 77, 0, 0.2)" }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: "#ff4d00" }}
                  >
                    {company[0]}
                  </span>
                </div>
                <span
                  className="text-sm font-medium tracking-wide"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
