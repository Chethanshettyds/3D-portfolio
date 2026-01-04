import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="max-w-2xl w-full max-h-[90vh] overflow-y-auto glass rounded-3xl p-8 border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-black text-white">{project.title}</h3>
          <button 
            onClick={onClose}
            className="text-2xl text-white/70 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-2xl shadow-2xl"
          />
          
          <p className="text-lg text-white/80 leading-relaxed">{project.description}</p>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm border border-purple-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a
              href={project.liveLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-center rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
            >
              View Live
            </a>
            <a
              href={project.githubLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 border-2 border-white/20 backdrop-blur-xl rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto space-y-4 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent leading-tight"
            custom={1}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            custom={2}
          >
            Production-ready apps showcasing full-stack architecture, AI integration, and modern 3D experiences.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 bg-gradient-to-b from-slate-900/50 to-transparent backdrop-blur-xl cursor-pointer h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-44 md:h-52 lg:h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40 group-hover:from-purple-800/60 group-hover:to-pink-800/60 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-100 group-hover:brightness-110"
                />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/30 shadow-lg">
                    Click to explore →
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-all duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/75 mt-1.5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-xs md:text-sm text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">View Case Study</span>
                  <motion.div 
                    className="w-2.5 h-2.5 bg-purple-500 rounded-full group-hover:bg-purple-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
