import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Target,
  Users,
  Settings,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Banking & IT Expertise",
    description:
      "Deep expertise in niche and complex technology environments, particularly within the banking and financial services sector. We source professionals across the complete Temenos Suite, core banking platforms, digital transformation initiatives, and enterprise IT systems.",
    color: "#ff5500",
    number: "01",
    features: [
      "Temenos Suite Specialists",
      "Core Banking Experts",
      "Digital Transformation",
    ],
  },
  {
    icon: Users,
    title: "Wide-Ranging Skill Coverage",
    description:
      "Whether your requirement is for a single specialist or an entire project team, we support a broad spectrum of roles including core banking consultants, payments experts with SWIFT MT/MX knowledge, mobile developers, middleware professionals, QA, DevOps, and cloud specialists.",
    color: "#00d4ff",
    number: "02",
    features: [
      "Payments & SWIFT Experts",
      "Mobile & Integration Devs",
      "QA, DevOps & Cloud",
    ],
  },
  {
    icon: Target,
    title: "Precision Matching Process",
    description:
      "We don't believe in sending volumes of profiles—we believe in sending the right profiles. Our selection includes detailed requirement analysis, technical screening by subject experts, culture fit assessment, and verification of project experience and references.",
    color: "#ffd700",
    number: "03",
    features: [
      "Technical Screening",
      "Culture Fit Assessment",
      "Reference Verification",
    ],
  },
  {
    icon: Settings,
    title: "Flexible Engagement Models",
    description:
      "We support multiple staffing models to suit your business needs: contract and contract-to-hire staffing, permanent recruitment, project-based team ramp-ups, and short-term specialist engagements. Scale resources up or down without administrative burden.",
    color: "#a855f7",
    number: "04",
    features: [
      "Contract & Permanent",
      "Project-Based Teams",
      "Flexible Scaling",
    ],
  },
  {
    icon: Clock,
    title: "Reduced Time-to-Hire",
    description:
      "Stop losing time and resources to lengthy hiring cycles. Our streamlined process and pre-vetted talent pool ensures you get access to niche and senior professionals quickly, with a quality-assured candidate pipeline and transparent communication.",
    color: "#22c55e",
    number: "05",
    features: [
      "Pre-Vetted Talent Pool",
      "Quality-Assured Pipeline",
      "Fast Turnaround",
    ],
  },
  {
    icon: CheckCircle,
    title: "The Talentra Advantage",
    description:
      "We act as an extension of your recruitment team, focused on delivering outcomes—not just resumes. Our long-term partnership approach ensures access to niche talent pools with transparent communication throughout the hiring process.",
    color: "#f43f5e",
    number: "06",
    features: [
      "Partnership Approach",
      "Outcome-Focused",
      "Transparent Process",
    ],
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-transparent py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${services[activeIndex].color}20 0%, transparent 70%)`,
            transition: "background 0.8s ease",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="font-bold">Why Partner</span>{" "}
            <span className="font-medium">with Talentra?</span>
          </h2>
          <p
            className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            Strategic IT & Banking Staffing Solutions. We connect you with
            highly skilled, pre-vetted experts who fit your technical needs,
            culture, and project timelines.
          </p>
        </motion.div>

        {/* Main Content - Accordion Style */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left - Service List */}
          <div className="space-y-2">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeIndex === index;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Active/Hover Background */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                      isActive
                        ? "opacity-100"
                        : isHovered
                          ? "opacity-50"
                          : "opacity-0"
                    }`}
                    style={{
                      background: `linear-gradient(90deg, ${service.color}15 0%, transparent 100%)`,
                      borderLeft: `3px solid ${service.color}`,
                    }}
                  />

                  <div className="relative flex items-center gap-4 p-4 lg:p-5">
                    {/* Number */}
                    <span
                      className={`text-sm font-mono transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                      style={{ color: isActive ? service.color : undefined }}
                    >
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive ? "scale-110" : ""
                      }`}
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${service.color}30 0%, ${service.color}10 100%)`
                          : "rgba(255,255,255,0.05)",
                        border: `1px solid ${isActive ? service.color + "50" : "rgba(255,255,255,0.1)"}`,
                      }}
                    >
                      <IconComponent
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: isActive ? service.color : "#666" }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 flex-1 ${
                        isActive ? "text-white" : "text-gray-500"
                      }`}
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      {service.title}
                    </h3>

                    {/* Arrow */}
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }`}
                      style={{ color: service.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right - Active Service Detail */}
          <div className="relative lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Card */}
                <div
                  className="relative p-8 lg:p-10 rounded-3xl border backdrop-blur-sm overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    borderColor: `${services[activeIndex].color}30`,
                  }}
                >
                  {/* Glow Effect */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30"
                    style={{ background: services[activeIndex].color }}
                  />

                  {/* Large Number Background */}
                  <div
                    className="absolute -right-4 -top-4 text-[150px] font-bold opacity-5 select-none"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: services[activeIndex].color,
                    }}
                  >
                    {services[activeIndex].number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: `linear-gradient(135deg, ${services[activeIndex].color}30 0%, ${services[activeIndex].color}10 100%)`,
                        border: `1px solid ${services[activeIndex].color}50`,
                        boxShadow: `0 0 30px ${services[activeIndex].color}30`,
                      }}
                    >
                      {React.createElement(services[activeIndex].icon, {
                        className: "w-8 h-8",
                        style: { color: services[activeIndex].color },
                      })}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl lg:text-3xl font-bold text-white mb-4"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      {services[activeIndex].title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      {services[activeIndex].description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {services[activeIndex].features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: services[activeIndex].color,
                            }}
                          />
                          <span
                            className="text-gray-300 text-sm"
                            style={{ fontFamily: "'Urbanist', sans-serif" }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className="group flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${services[activeIndex].color} 0%, ${services[activeIndex].color}cc 100%)`,
                        boxShadow: `0 0 30px ${services[activeIndex].color}40`,
                      }}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div
                  className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full blur-2xl opacity-20"
                  style={{ background: services[activeIndex].color }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                  style={{
                    width: activeIndex === index ? "40px" : "16px",
                    background:
                      activeIndex === index
                        ? service.color
                        : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
