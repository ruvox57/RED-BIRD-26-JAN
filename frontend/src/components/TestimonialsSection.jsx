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
      className="relative bg-[#0a0a0a] py-24 overflow-hidden"
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
          animation: scroll-up 25s linear infinite;
        }
        .scroll-column-down {
          animation: scroll-down 25s linear infinite;
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Header */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h2
              className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span
                className="font-light"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Trusted by Forward
              </span>
              <br />
              <span
                className="font-light"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Thinking
              </span>{" "}
              Enterprises
            </h2>
            <p
              className="text-gray-500 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Real perspectives from enterprise teams building clarity and
              control into their workflows.
            </p>
          </div>

          {/* Right Column - 2-Column Testimonial Grid with Vertical Scroll */}
          <div className="lg:col-span-8 relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            <div className="h-[520px] overflow-hidden">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Column 1 - Scrolls Up */}
                <div
                  ref={column1Ref}
                  className="scroll-column-up flex flex-col gap-4"
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
                  className="scroll-column-down flex flex-col gap-4 mt-8"
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
      className={`testimonial-card rounded-xl p-5 border transition-all duration-300 ${
        isHighlight
          ? "bg-gradient-to-br from-[#1a1210] to-[#141010] border-orange-500/20 hover:border-orange-500/40"
          : "bg-[#111111] border-white/10 hover:border-white/20"
      }`}
    >
      {/* Header with user info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 flex-shrink-0">
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
            className="text-white text-sm font-medium truncate"
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
        className="text-gray-400 text-sm leading-relaxed"
        style={{ fontFamily: "'Urbanist', sans-serif" }}
      >
        {testimonial.content}
      </p>
    </div>
  );
};

export default TestimonialsSection;
