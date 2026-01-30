import React, { useEffect, useRef } from "react";
import { testimonials } from "../data/mockData";

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);

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

    const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
    cards?.forEach((card, i) => {
      card.style.transitionDelay = `${i * 80}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Split testimonials into two columns for vertical scrolling
  // Column 1: indices 0, 2, 4 (Olivia, Ethan, Sofia)
  // Column 2: indices 1, 3, 5 (Marcus, Isabelle, Noah)
  const column1Testimonials = testimonials
    .filter((_, i) => i % 2 === 0)
    .slice(0, 3);
  const column2Testimonials = testimonials
    .filter((_, i) => i % 2 === 1)
    .slice(0, 3);

  // Duplicate for infinite scroll
  const column1Items = [...column1Testimonials, ...column1Testimonials];
  const column2Items = [...column2Testimonials, ...column2Testimonials];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative bg-transparent py-20 lg:py-28 overflow-hidden"
    >
      {/* CSS Animation Keyframes for vertical scroll */}
      <style>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .scroll-column-up {
          animation: scroll-up 30s linear infinite;
        }
        .scroll-column-down {
          animation: scroll-down 30s linear infinite;
        }
        .scroll-column-up:hover,
        .scroll-column-down:hover {
          animation-play-state: paused;
        }
        .testimonial-card.animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .testimonial-card.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Subtle orange ambient glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(255, 120, 50, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column - Header */}
          <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-24">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span
                className="font-medium"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Trusted by
              </span>
              <br />
              <span
                className="font-bold"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Forward Thinking
              </span>
              <br />
              <span
                className="font-medium"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Enterprises
              </span>
            </h2>
            <p
              className="text-gray-400 text-base leading-relaxed max-w-sm"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Real perspectives from enterprise teams building clarity and
              control into their workflows.
            </p>
          </div>

          {/* Right Column - 2-Column Testimonial Grid with Vertical Scroll */}
          <div className="lg:col-span-8 relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            <div className="h-[560px] overflow-hidden">
              <div className="grid grid-cols-2 gap-5 h-full">
                {/* Column 1 - Scrolls Up */}
                <div
                  ref={column1Ref}
                  className="scroll-column-up flex flex-col gap-5"
                >
                  {column1Items.map((testimonial, index) => (
                    <TestimonialCard
                      key={`col1-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                      variant={
                        index === 1 || index === 4 ? "highlight" : "default"
                      }
                    />
                  ))}
                </div>

                {/* Column 2 - Scrolls Down (offset start) */}
                <div
                  ref={column2Ref}
                  className="scroll-column-down flex flex-col gap-5 mt-12"
                >
                  {column2Items.map((testimonial, index) => (
                    <TestimonialCard
                      key={`col2-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                      variant={
                        index === 0 || index === 3 ? "highlight" : "default"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, variant = "default" }) => {
  const isHighlight = variant === "highlight";

  return (
    <div
      className="testimonial-card relative rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all duration-500 group backdrop-blur-md"
      style={{
        background:
          "linear-gradient(180deg, rgba(25, 25, 25, 0.95) 0%, rgba(15, 15, 15, 0.98) 100%)",
        boxShadow:
          "0 4px 24px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(255, 255, 255, 0.02) inset",
      }}
    >
      {/* Orange gradient at top of card */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-80"
        style={{
          background:
            "linear-gradient(90deg, #FF7B00 0%, #FF5500 50%, #FF8800 100%)",
        }}
      />

      {/* Subtle orange glow at top */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 100% 150% at 50% -50%, rgba(255, 120, 50, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Glass effect overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255, 120, 50, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Card Content */}
      <div className="relative p-5">
        {/* Header with user info */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10"
            style={{
              background: "linear-gradient(135deg, #FF7B00 0%, #FF5500 100%)",
              boxShadow: "0 2px 8px rgba(255, 85, 0, 0.3)",
            }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<span class="flex items-center justify-center w-full h-full text-white text-xs font-medium">${testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}</span>`;
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-white text-sm font-semibold truncate"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              {testimonial.name}
            </p>
            <p
              className="text-gray-500 text-xs truncate"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Content */}
        <p
          className="text-gray-300 text-sm leading-relaxed"
          style={{ fontFamily: "'Urbanist', sans-serif" }}
        >
          "{testimonial.content}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
