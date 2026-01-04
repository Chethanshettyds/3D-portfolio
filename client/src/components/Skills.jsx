import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    { 
      category: "Frontend", 
      icon: "⚛️", 
      color: "from-cyan-400 to-blue-500",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "JavaScript"],
      progress: 95
    },
    { 
      category: "Backend", 
      icon: "⚡", 
      color: "from-emerald-400 to-teal-500",
      skills: ["Node.js", "Express", "Java", "REST APIs", "JWT Auth"],
      progress: 92
    },
    { 
      category: "Databases", 
      icon: "🗄️", 
      color: "from-indigo-400 to-purple-500",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Postman", "PgAdmin"],
      progress: 90
    },
    { 
      category: "DevOps", 
      icon: "🐳", 
      color: "from-sky-400 to-blue-500",
      skills: ["Docker", "Azure", "Git/VS Code", "GitHub Actions"],
      progress: 88
    },
    { 
      category: "AI/ML", 
      icon: "🤖", 
      color: "from-yellow-400 to-orange-500",
      skills: ["Python", "TensorFlow", "LLM Integration", "RAG Pipelines"],
      progress: 85
    }
  ];

  return (
    <section id="skills" className="py-24 space-y-16">
      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-xl mx-auto"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.2, stiffness: 400 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
          <span className="text-sm uppercase tracking-[0.3em] text-purple-300 font-semibold">Tech Mastery</span>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Skill Matrix
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Production-ready expertise across full-stack development, AI systems, and cloud infrastructure
        </motion.p>
      </motion.div>

      {/* 3D-Inspired Skill Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            className="glass rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 transition-all duration-500 group cursor-pointer relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.02 }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Stats Badge - Fixed positioning */}
            <motion.div 
              className="absolute top-6 right-6 bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              {category.progress}% Mastery
            </motion.div>
            
            {/* Icon */}
            <motion.div 
              className={`w-20 h-20 rounded-3xl ${category.color} text-4xl flex items-center justify-center font-black shadow-2xl mx-auto mb-6 shadow-[currentColor] group-hover:scale-110 transition-all duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {category.icon}
            </motion.div>
            
            {/* Category Title */}
            <h3 className="text-2xl font-black text-white text-center mb-2 group-hover:text-purple-300 transition-colors duration-300">
              {category.category}
            </h3>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/5 rounded-full h-3 mb-6 border border-white/20 overflow-hidden">
              <motion.div 
                className={`h-3 bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                initial={{ width: 0 }}
                whileInView={{ width: `${category.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </div>
            
            {/* Skills List */}
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + skillIndex * 0.08 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-white font-medium flex-1 min-w-0 truncate">{skill}</span>
                  <div className="w-16 h-4 bg-white/10 rounded-full overflow-hidden relative flex-shrink-0">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-md"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Dashboard */}
      <motion.div 
        className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4 pt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {[
          { label: "Projects", value: "25+", icon: "🚀", color: "from-purple-500 to-pink-500" },
          { label: "Commits", value: "10K+", icon: "💻", color: "from-emerald-500 to-teal-500" },
          { label: "Stars", value: "500+", icon: "⭐", color: "from-yellow-500 to-orange-500" },
          { label: "Forks", value: "100+", icon: "🍴", color: "from-indigo-500 to-purple-500" },
          { label: "PRs", value: "200+", icon: "🔧", color: "from-sky-500 to-blue-500" }
        ].map((stat, index) => {
          const textColor = stat.color.replace('from-', 'text-').replace('to-', ' ');
          return (
            <motion.div
              key={stat.label}
              className="group text-center p-8 rounded-3xl bg-gradient-to-b from-white/5 to-black/30 border border-white/10 backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div className={`text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 shadow-2xl ${textColor}`} style={{ textShadow: '0 0 20px currentColor' }}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-white/70 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
