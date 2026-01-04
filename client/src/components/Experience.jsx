import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4">
      {/* Header */}
      <motion.div 
        className="text-center max-w-5xl mx-auto mb-24 space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-3xl border border-indigo-500/40 backdrop-blur-xl mx-auto shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="w-4 h-4 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-ping shadow-lg" />
          <span className="text-lg uppercase tracking-[0.2em] text-indigo-300 font-bold bg-gradient-to-r from-indigo-200 to-blue-200 bg-clip-text text-transparent">
            Professional Journey
          </span>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-indigo-100 to-blue-200 bg-clip-text text-transparent leading-[0.9] tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Career Matrix
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/80 leading-relaxed bg-gradient-to-r from-white/20 to-transparent bg-clip-text px-8 py-6 rounded-3xl backdrop-blur-xl border border-white/10 shadow-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Strategic deployments across enterprise software, AI research systems, and global development operations
        </motion.p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative max-w-7xl mx-auto">
        {/* Animated Timeline Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-blue-500/5 rounded-3xl blur-xl -z-10" />
        
        {/* Timeline Items */}
        <div className="space-y-20">
          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              className={`relative flex ${index % 2 === 0 ? 'flex-row-reverse lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 group`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }} // Reduced delay for better flow
            >
              {/* Company Visual */}
              <motion.div 
                className="flex-shrink-0 w-72 h-72 rounded-3xl glass backdrop-blur-xl border-2 border-white/20 shadow-2xl shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-700 relative overflow-hidden"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Company Logo Area */}
                <div className="absolute top-8 left-8 right-8 h-20 bg-gradient-to-r from-white/10 to-transparent rounded-2xl backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-lg">
                  <div className={`w-16 h-16 rounded-2xl ${
                    index === 0 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 shadow-blue-500/50' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500/50'
                  } flex items-center justify-center text-3xl font-black shadow-2xl`}>
                    {index === 0 ? '🏢' : '💻'}
                  </div>
                </div>

                {/* Role Badge */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-bold px-6 py-2 rounded-2xl shadow-2xl shadow-indigo-500/50 backdrop-blur-sm border border-indigo-400/50">
                  {item.role}
                </div>

                {/* Timeline Connector */}
                <div className={`absolute -top-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-lg shadow-indigo-500/50 border-4 border-black`} />
              </motion.div>

              {/* Content Panel */}
              <div className="flex-1 max-w-lg lg:max-w-xl">
                <div className="space-y-6 p-8 rounded-3xl glass backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/25 transition-all group-hover:scale-[1.02] duration-500">
                  {/* Date & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-4">
                      <motion.span 
                        className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        {item.period}
                      </motion.span>
                      <div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-blue-500" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:text-indigo-200 transition-colors duration-300">
                      {item.company}
                    </h3>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    {item.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-start gap-4 pl-12 relative group/item hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + detailIndex * 0.05 }} // Reduced stagger for smoother flow
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Animated Achievement Icon */}
                        <motion.div 
                          className="absolute left-0 top-2 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg shadow-indigo-500/50 flex-shrink-0"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.4, type: "spring" }}
                        >
                          <span className="text-white text-sm font-bold">✓</span>
                        </motion.div>
                        
                        <div className="flex-1 pt-1 pr-4">
                          <p className="text-lg leading-relaxed font-medium">{detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Stats */}
      <motion.div 
        className="max-w-6xl mx-auto mt-32 grid md:grid-cols-4 gap-8 px-4 pt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[
          { label: "Years Experience", value: "4+", icon: "⏳", color: "from-indigo-500 to-blue-500" },
          { label: "Production Apps", value: "12+", icon: "🚀", color: "from-emerald-500 to-teal-500" },
          { label: "Teams Led", value: "3+", icon: "👥", color: "from-purple-500 to-pink-500" },
          { label: "Tech Stack", value: "25+", icon: "🔧", color: "from-yellow-500 to-orange-500" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`group p-10 rounded-3xl text-center backdrop-blur-xl border border-white/10 hover:shadow-2xl hover:shadow-[currentColor]/30 transition-all cursor-pointer relative overflow-hidden ${stat.color.replace('from-', '')}`}
            whileHover={{ scale: 1.1, y: -15 }}
            transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br opacity-20 blur-xl" />
            
            <div className={`text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 shadow-2xl shadow-[currentColor]/50 ${stat.color.replace('from-', 'text-')}`}>
              {stat.icon}
            </div>
            <div className="text-4xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-3">
              {stat.value}
            </div>
            <div className="text-xl font-semibold text-white/90 uppercase tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
