import React, { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Main Navbar */}
      <motion.nav 
        className="glass backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/20 bg-black/80"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
          {/* Logo + Name */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer group relative overflow-hidden p-2"
            onClick={() => handleScroll("top")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Logo Orb */}
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-3xl shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-500/70 group-hover:rotate-12 transition-all duration-300 relative overflow-hidden"
              animate={{ 
                rotate: ["0deg", "360deg", "0deg"],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              {/* Inner Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl"
                animate={{ rotate: ["0deg", "-360deg", "0deg"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl animate-pulse" />
              <div className="w-6 h-6 bg-white/30 rounded-full absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
            </motion.div>
            
            {/* Name with 3D Effect */}
            <motion.div className="relative">
              <motion.span 
                className="text-xl md:text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight select-none"
                animate={{ 
                  scale: [1, 1.02, 1],
                  y: [0, -2, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Chethan D S
              </motion.span>
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 via-pink-400/30 to-purple-500/50 blur-xl -skew-x-6 opacity-75 animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="relative text-lg font-semibold text-white/80 hover:text-white px-3 py-2 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {/* Animated Underline */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full origin-center"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                {/* Hover Glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg -z-10 blur-sm opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-2xl text-white/90 hover:text-white p-2 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all"
            onClick={() => setOpen((p) => !p)}
            whileTap={{ scale: 0.9, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
          >
            {open ? "✕" : "☰"}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          className="md:hidden glass backdrop-blur-xl border-t border-white/10 shadow-2xl shadow-purple-500/10 bg-black/90"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-6xl mx-auto px-4 py-8 space-y-4">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="block w-full text-left py-4 px-6 text-xl font-bold text-white/95 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 rounded-2xl transition-all backdrop-blur-sm border border-white/10 hover:border-purple-500/30 shadow-lg hover:shadow-purple-500/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 15, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
