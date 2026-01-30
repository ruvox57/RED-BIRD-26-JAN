import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalBackground from "./GlobalBackground";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Animation */}
      <GlobalBackground
        lineCount={4}
        dotCount={200}
        lineColors={[
          { start: "rgba(255, 77, 0, 0.18)", end: "rgba(255, 120, 50, 0.04)" },
          {
            start: "rgba(255, 100, 50, 0.14)",
            end: "rgba(255, 150, 80, 0.03)",
          },
          { start: "rgba(255, 60, 0, 0.12)", end: "rgba(255, 100, 40, 0.02)" },
          {
            start: "rgba(255, 90, 30, 0.10)",
            end: "rgba(255, 130, 60, 0.025)",
          },
        ]}
        dotColor="255, 255, 255"
        dotOpacityRange={[0.03, 0.12]}
        parallaxIntensity={0.25}
        motionSpeed={1.2}
      />

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Get in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Touch
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-lg leading-relaxed"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Ready to transform your financial workflows? Let's discuss how
                Equinio can bring clarity and control to your enterprise.
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="hello@equinio.com"
                href="mailto:hello@equinio.com"
              />
              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
              <ContactItem
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value="San Francisco, CA"
              />
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <p
                className="text-gray-500 text-sm mb-4"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Follow us
              </p>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-400 transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div variants={itemVariants}>
            <div
              className="relative p-8 rounded-3xl border border-white/10 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-gray-400"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <InputField
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                  <div>
                    <label
                      className="block text-gray-400 text-sm mb-2"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,100,0,0.4)] disabled:opacity-70"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div>
    <label
      className="block text-gray-400 text-sm mb-2"
      style={{ fontFamily: "'Urbanist', sans-serif" }}
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
      style={{ fontFamily: "'Urbanist', sans-serif" }}
    />
  </div>
);

const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-4 group">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <p
        className="text-gray-500 text-sm"
        style={{ fontFamily: "'Urbanist', sans-serif" }}
      >
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="text-white font-medium hover:text-orange-400 transition-colors duration-300"
          style={{ fontFamily: "'Urbanist', sans-serif" }}
        >
          {value}
        </a>
      ) : (
        <p
          className="text-white font-medium"
          style={{ fontFamily: "'Urbanist', sans-serif" }}
        >
          {value}
        </p>
      )}
    </div>
  </div>
);

export default ContactPage;
