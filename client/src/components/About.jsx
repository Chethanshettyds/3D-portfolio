import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        className="text-center max-w-5xl mx-auto mb-20 space-y-8 pt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-700/20 rounded-3xl border border-purple-500/40 backdrop-blur-xl mx-auto shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div 
            className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-lg uppercase tracking-[0.2em] text-purple-300 font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            About the Architect
          </span>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent leading-[0.9] tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 300 }}
        >
          Chethan D S
        </motion.h2>
        
        <motion.div className="max-w-3xl mx-auto space-y-6">
          <motion.p 
            className="text-xl md:text-2xl text-white/80 leading-relaxed bg-gradient-to-r from-white/20 to-transparent bg-clip-text px-8 py-6 rounded-3xl backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Full-stack developer and AI/ML engineer crafting production-grade systems at the intersection of modern web, generative AI, and cloud-native architecture.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Journey Timeline */}
      <motion.div 
        className="max-w-6xl mx-auto relative mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 shadow-lg" />

        {/* Timeline Items */}
        <div className="space-y-20">
          {[
            {
              year: "2025",
              title: "Dotch Endeavours",
              role: "Full Stack Web Developer",
              icon: "🤝",
              color: "from-emerald-500 to-teal-500",
              details: [
                "Architecting enterprise-grade web platforms with React, Node.js, and MongoDB stacks",
                "Cross-functional collaboration across India delivering production systems"
              ]
            },
            {
              year: "2021-2025",
              title: "Full Stack Projects",
              role: "Independent Architect",
              icon: "🚀",
              color: "from-purple-500 to-pink-500",
              details: [
                "Built HR management platforms with Django + PostgreSQL + Docker deployment",
                "Created immersive 3D Portfolio experiences with React Three Fiber.",
                "Developed Aistreamhub which offers cheap subscriptions + AI purchase simplification."
              ]
            },
            
          ].map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className={`flex ${index % 2 === 0 ? 'flex-row-reverse lg:flex-row' : 'flex-row-reverse'} items-center gap-12 group`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Icon */}
              <motion.div
                className={`flex-shrink-0 w-24 h-24 rounded-3xl ${milestone.color} text-3xl font-black flex items-center justify-center shadow-2xl shadow-[currentColor]/50 group-hover:shadow-[currentColor]/70 relative z-10`}
                style={{ 
                  transform: 'translateZ(0)',  // GPU layer
                  willChange: 'transform'
                }}
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ 
                  type: "spring",
                  rotate: { 
                    duration: 0.6,
                    bounce: 0  // Linear smooth
                  },
                  scale: 1.1
                }}
              >
                {milestone.icon}
              </motion.div>

              {/* Content Card */}
              <div className="flex-1 lg:max-w-lg glass backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-baseline gap-4 mb-4">
                  <motion.span 
                    className="text-3xl font-black bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, delay: 0.3 }}
                  >
                    {milestone.year}
                  </motion.span>
                  <div className={`h-1 flex-1 bg-gradient-to-r ${milestone.color} rounded-full shadow-md`} />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-purple-300 transition-all duration-500">
                  {milestone.title}
                </h3>
                
                <p className="text-lg font-semibold text-purple-300 mb-6">
                  {milestone.role}
                </p>
                
                <ul className="space-y-3 text-white/80">
                  {milestone.details.map((detail, detailIndex) => (
                    <motion.li 
                      key={detailIndex}
                      className="flex items-start gap-3 pl-6 relative font-medium hover:text-white transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + detailIndex * 0.1 }}
                    >
                      <motion.span 
                        className="absolute left-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full top-2 mt-1"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Radar */}
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {[
            { label: "Code Efficiency", value: "98%", icon: "⚡" },
            { label: "Architecture", value: "95%", icon: "🏛️" },
            { label: "AI Systems", value: "92%", icon: "🧠" }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-black/50 border border-white/10 backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {metric.icon}
              </motion.div>
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-lg text-white/70 uppercase tracking-wide font-semibold">
                {metric.label}
              </div>
              {/* Progress Ring */}
              <div className="w-full h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
                <motion.div 
                  className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${parseInt(metric.value)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
