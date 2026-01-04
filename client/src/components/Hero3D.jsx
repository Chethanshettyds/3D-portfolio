import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function AnimatedSphere({ position }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial 
          metalness={0.8} 
          roughness={0.2}
          color="#915EFF"
          emissive="#32145a"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function TechRing() {
  return (
    <Float speed={0.8} rotationIntensity={0.5}>
      <mesh rotation={[0.5, 0, 0]} position={[0, -1.5, 0]}>
        <torusGeometry args={[2.5, 0.08, 16, 100]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0a0a1a"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#915EFF" />
      
      <Sparkles count={100} scale={8} size={2} speed={0.5} />
      
      <AnimatedSphere position={[-1.5, 0, 0]} />
      <AnimatedSphere position={[1.5, 0.5, -1]} />
      
      <TechRing />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

const Hero3D = () => {
  return (
    <section id="top" className="grid md:grid-cols-2 gap-12 items-center py-20">
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping" />
          <span className="text-xs uppercase tracking-wider text-purple-300 font-medium">Full-Stack / AI Engineer</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent whitespace-nowrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Chethan D S
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-white/80 max-w-lg leading-relaxed mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Building the future with code & AI
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed mt-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I’m a passionate Full Stack Developer skilled in building responsive, scalable web applications using modern front-end and back-end technologies. I enjoy turning ideas into clean, efficient solutions while continuously learning and improving my craft.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-semibold rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Featured Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-full group-hover:translate-y-0" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white/20 backdrop-blur-xl text-lg font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="h-[500px] md:h-[600px] glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center text-white/60">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-lg">Loading 3D Experience...</p>
            </div>
          </div>
        }>
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5] }}>
            <Scene />
          </Canvas>
        </Suspense>
      </motion.div>
    </section>
  );
};

export default Hero3D;
