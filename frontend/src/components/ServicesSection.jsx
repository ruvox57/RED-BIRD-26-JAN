import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  BarChart3,
  Zap,
  Users,
  Lock,
  TrendingUp,
  Database,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Compliance First",
    description:
      "Built-in regulatory compliance for financial operations with automated audit trails and reporting.",
    color: "#ff5500",
    number: "01",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Live dashboards and insights for informed decisions with predictive modeling.",
    color: "#00d4ff",
    number: "02",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Streamline workflows with intelligent automation and AI-powered processes.",
    color: "#ffd700",
    number: "03",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Seamless collaboration across departments with real-time sync and permissions.",
    color: "#a855f7",
    number: "04",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade security for your sensitive data with end-to-end encryption.",
    color: "#22c55e",
    number: "05",
  },
  {
    icon: TrendingUp,
    title: "Growth Insights",
    description:
      "Predictive analytics to drive business growth and identify opportunities.",
    color: "#f43f5e",
    number: "06",
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
            <span className="font-bold">Our</span>{" "}
            <span className="font-medium">Services</span>
          </h2>
          <p
            className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            Comprehensive solutions designed to transform your financial
            operations
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
                      {["Enterprise Ready", "24/7 Support", "API Access"].map(
                        (feature, i) => (
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
                        ),
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      className="group flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${services[activeIndex].color} 0%, ${services[activeIndex].color}cc 100%)`,
                        boxShadow: `0 0 30px ${services[activeIndex].color}40`,
                      }}
                    >
                      Learn More
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
