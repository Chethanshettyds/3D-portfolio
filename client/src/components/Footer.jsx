import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-emerald-500/20 bg-gradient-to-r from-black/70 via-slate-950/90 to-black/70 backdrop-blur-xl shadow-xl shadow-emerald-500/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-xs lg:text-sm">
          
          {/* Left - Copyright */}
          <motion.div 
            className="font-mono tracking-[0.1em] uppercase text-emerald-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Chethan D S
          </motion.div>

          {/* Center - Tech Stack */}
          <motion.div 
            className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm shadow-lg shadow-emerald-500/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="font-mono uppercase tracking-wider text-emerald-400 text-xs mr-3">Built with</span>
            <div className="flex gap-2">
              {/* React - Link to Official Site */}
              <motion.a 
                href="https://react.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-125 hover:text-blue-400 cursor-pointer"
                whileHover={{ rotate: 360 }} 
                title="React"
              >
                <span className="text-lg">⚛️</span>
              </motion.a>
              
              {/* Node.js - Link to Official Site */}
              <motion.a 
                href="https://nodejs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-125 cursor-pointer"
                whileHover={{ rotate: 360 }} 
                title="Node.js"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#68D391">
                  <polygon points="12,2 21,9 21,15 12,22 3,15 3,9"/>
                </svg>
              </motion.a>
              
              {/* Tailwind CSS - Link to Official Site */}
              <motion.a 
                href="https://tailwindcss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-125 cursor-pointer"
                whileHover={{ rotate: 360 }} 
                title="Tailwind CSS"
              >
                <svg width="28" height="28" viewBox="0 0 109 40" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M56.7812 30.575L81.0938 0H71.125L50.5625 25.0625L30 0H20.0312L44.3438 30.575L20.0312 40H30L50.5625 14.9375L71.125 40H81.0938L56.7812 30.575Z" fill="#06B6D4"/>
                </svg>
              </motion.a>
              
              {/* Framer Motion - Link to Official Site */}
              <motion.a 
                href="https://www.framer.com/motion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-125 hover:text-purple-400 cursor-pointer"
                whileHover={{ rotate: -360 }} 
                title="Framer Motion"
              >
                <span className="text-lg">⚡</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Status */}
          <motion.div 
            className="flex items-center gap-2 text-emerald-400 font-mono uppercase tracking-wider text-xs"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            Neural Link Active • v2.0
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
