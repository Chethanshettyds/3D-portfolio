import React, { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaGlobeAmericas,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const initialForm = { name: "", email: "", message: "" };

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setStatus({ loading: false, error: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    // Validation
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    setStatus({ 
      loading: false, 
      error: "⚠️ Please fill in all fields", 
      success: "" 
    });
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    setStatus({ 
      loading: false, 
      error: "⚠️ Please enter a valid email address", 
      success: "" 
    });
    return;
  }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://formspree.io/f/xgovvzze", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus({ loading: false, error: "", success: "✅ Message sent successfully!" });
        setForm(initialForm);
      } else {
        const data = await response.json();
        if (data.errors) {
          const errorMsg = data.errors.map(err => err.message).join(", ");
          throw new Error(errorMsg);
        }
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message || "⚠️ Failed to send. Try direct channels.",
        success: "",
      });
    }
  };

  const neuralNodes = [
    {
      id: "email",
      href: "mailto:chethanshettyds@gmail.com",
      bg: "from-emerald-500 to-teal-500",
      ring: "ring-emerald-400/60",
      Icon: HiMail,
      label: "Email",
    },
    {
      id: "phone",
      href: "tel:+918088255256",
      bg: "from-purple-500 to-pink-500",
      ring: "ring-purple-400/60",
      Icon: FaPhoneAlt,
      label: "Phone",
    },
    {
      id: "linkedin",
      href: "https://linkedin.com/in/chethanshettyds",
      bg: "from-sky-600 to-blue-500",
      ring: "ring-sky-400/60",
      Icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      id: "github",
      href: "https://github.com/chethanshettyds",
      bg: "from-slate-900 to-slate-700",
      ring: "ring-slate-300/70",
      Icon: FaGithub,
      label: "GitHub",
    },
    {
      id: "twitter",
      href: "https://twitter.com/chethanshettyds",
      bg: "from-sky-500 to-cyan-400",
      ring: "ring-sky-300/70",
      Icon: FaTwitter,
      label: "Twitter",
    },
    {
      id: "website",
      href: "https://chethan-resume.netlify.app",
      bg: "from-amber-500 to-orange-500",
      ring: "ring-amber-300/70",
      Icon: FaGlobeAmericas,
      label: "Website",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-4 bg-gradient-to-br from-black via-slate-950 to-black relative overflow-hidden"
    >
      {/* subtle background grid / glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.3),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)]" />
      </div>

      {/* Header */}
      <motion.div
        className="text-center max-w-4xl mx-auto space-y-6 mb-24 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: prefersReducedMotion ? 0 : 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600/25 to-teal-600/25 rounded-2xl border border-emerald-500/40 backdrop-blur-xl mx-auto shadow-lg shadow-emerald-500/40"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping" aria-hidden="true" />
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-emerald-300 font-semibold">
            Neural Network Access
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent leading-[0.85]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Start a project, discuss opportunities, or establish a persistent link. Response protocols are always active.
        </motion.p>
      </motion.div>

      {/* Main Contact Container */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - 3D Communication Visual */}
        <motion.div 
          className="relative h-[500px] lg:h-[600px] rounded-3xl glass border-2 border-white/10 shadow-2xl shadow-emerald-500/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-teal-900/30" />
          
          {/* Floating Communication Orbs */}
          <div className="absolute top-12 left-12 w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl shadow-2xl shadow-emerald-500/50 animate-bounce" />
          <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl shadow-purple-500/40 animate-pulse delay-500" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg shadow-yellow-500/50 animate-ping" />
          
          {/* Central Terminal */}
          <div className="relative">
            <div className="w-72 h-72 border-4 border-emerald-500/60 rounded-3xl backdrop-blur-2xl animate-pulse shadow-2xl shadow-emerald-500/60" />
            <div className="absolute inset-2 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl backdrop-blur-xl animate-pulse-slow" />
            <div className="absolute inset-6 bg-black/95 rounded-xl backdrop-blur-xl shadow-inner" />
            
            {/* Terminal Screen - PERFECTLY ALIGNED */}
            <div className="absolute inset-12 bg-black/90 rounded-2xl border-2 border-emerald-400/60 backdrop-blur-xl p-8 text-center shadow-2xl shadow-emerald-500/30">
              <div className="text-emerald-400 text-lg font-mono uppercase tracking-widest mb-6 animate-pulse border-b border-emerald-400/50 pb-3">
                TRANSMISSION READY
              </div>
              <div className="space-y-4 text-left text-sm font-mono text-white/90 leading-relaxed max-w-sm mx-auto">
                <div className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-400/30 hover:bg-emerald-500/20 transition-all">
                  <span className="text-emerald-400 text-xl flex-shrink-0">📡</span>
                  <span className="flex-1">Neural Link Active</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-teal-500/10 rounded-xl border border-teal-400/30 hover:bg-teal-500/20 transition-all">
                  <span className="text-teal-400 text-xl flex-shrink-0">⚡</span>
                  <span className="flex-1">Data Stream: 100Gbps</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-xl border border-purple-400/30 hover:bg-purple-500/20 transition-all">
                  <span className="text-purple-400 text-xl flex-shrink-0">🔒</span>
                  <span className="flex-1">Encryption: AES-512</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-400/30 text-xs text-emerald-300 font-mono tracking-wider">
                STATUS: OPERATIONAL | RESPONSE: &lt;24h
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="absolute top-6 right-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/90 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/70">
              <span className="w-2 h-2 rounded-full bg-emerald-900 animate-ping" />
              <span>ONLINE</span>
            </div>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          className="space-y-8 lg:max-w-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-white">
              Get In Touch
            </h2>
            <p className="text-white/70">
              Transmit your message through the primary encrypted channel. A response is typically dispatched within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            {/* Name */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full h-14 md:h-16 px-6 bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl text-lg md:text-xl font-semibold text-white placeholder-white/50 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all group-hover:border-white/40 shadow-xl hover:shadow-emerald-500/20"
                placeholder="Your Name"
                required
                aria-required="true"
                autoComplete="name"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full h-14 md:h-16 px-6 bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl text-lg md:text-xl font-semibold text-white placeholder-white/50 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all group-hover:border-white/40 shadow-xl hover:shadow-emerald-500/20"
                placeholder="Email Address"
                required
                aria-required="true"
                autoComplete="email"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl text-lg font-semibold text-white placeholder-white/50 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none transition-all group-hover:border-white/40 shadow-xl hover:shadow-emerald-500/20"
                placeholder="Your Message..."
                required
                aria-required="true"
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={status.loading}
              className="w-full h-14 md:h-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-lg md:text-xl font-black rounded-2xl shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
              whileHover={{ scale: status.loading ? 1 : 1.02 }}
              whileTap={{ scale: status.loading ? 1 : 0.97 }}
              aria-live="polite"
            >
              <span className="relative z-10">
                {status.loading ? (
                  <>
                    <span className="sr-only">Sending message...</span>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block mr-2" aria-hidden="true" />
                    TRANSMITTING...
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 -skew-x-12 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-40" aria-hidden="true" />
            </motion.button>
          </div>

          {/* Status Messages */}
          {status.error && (
            <motion.div
              role="alert"
              aria-live="assertive"
              className="text-red-400 text-center text-sm md:text-base font-semibold p-4 bg-red-500/10 border border-red-500/40 rounded-2xl backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {status.error}
            </motion.div>
          )}

          {status.success && (
            <motion.div
              role="status"
              aria-live="polite"
              className="text-emerald-400 text-center text-sm md:text-base font-semibold p-4 bg-emerald-500/10 border border-emerald-500/40 rounded-2xl backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {status.success}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Neural Network Access – Icon-only professional grid */}
      <motion.div
        className="max-w-5xl mx-auto mt-28 px-4 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1 }}
      >
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent mb-3">
            Neural Network Access
          </h2>
          <p className="text-sm md:text-base text-white/60">
            Pure symbol interface. Tap any node to route the transmission.
          </p>
        </motion.div>

        <nav aria-label="Social media links">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            {neuralNodes.map(({ id, href, bg, ring, Icon, label }) => (
              <motion.li
                key={id}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -6,
                  scale: 1.08,
                  boxShadow: "0 24px 60px rgba(15, 23, 42, 0.9)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block"
                >
                  {/* outer glow ring */}
                  <div
                    className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${bg}`}
                    aria-hidden="true"
                  />

                  {/* 3D icon button */}
                  <div
                    className={`
                      group relative w-14 h-14 md:w-16 md:h-16 
                      rounded-full bg-slate-950/80 
                      border border-white/15 
                      shadow-[0_12px_35px_rgba(15,23,42,0.9)]
                      flex items-center justify-center
                      transition-all duration-300
                      hover:border-white/40
                      hover:bg-slate-900
                      ring-2 ${ring}
                      focus-within:ring-4 focus-within:ring-emerald-500/50
                    `}
                  >
                    {/* gradient inner circle */}
                    <div
                      className={`absolute inset-[2px] rounded-full bg-gradient-to-br ${bg} opacity-80`}
                      aria-hidden="true"
                    />

                    {/* center icon */}
                    <motion.div
                      className="relative text-xl md:text-2xl text-white"
                      whileHover={{ scale: 1.15, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      aria-hidden="true"
                    >
                      <Icon />
                    </motion.div>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* footer strip */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-500/40 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl text-xs md:text-sm text-emerald-200 tracking-[0.18em] uppercase" role="status" aria-live="polite">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            All channels active.
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;