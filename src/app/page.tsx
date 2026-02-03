'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Zap, Globe } from 'lucide-react';
import IntakeTerminal from '@/components/IntakeTerminal';

const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-clip-text text-transparent bg-[size:200%] animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ${className}`}>
    {children}
  </span>
);

const AURORA_COLORS = { blue: "#3b82f6", violet: "#6d28d9", cyan: "#06b6d4" };
const EASE_SMOOTH = [0.33, 1, 0.68, 1];
const EASE_BREATHE = [0.4, 0, 0.6, 1];

const FluidAuroraGradient = () => {
  const orbs = [
    { color: AURORA_COLORS.blue, size: 520, x: "12%", y: "15%", motionX: [0, 80, -40, 60, -20, 0], motionY: [0, -20, 50, -30, 20, 0], scale: [1, 1.12, 0.95, 1.08, 1], duration: 32, delay: 0 },
    { color: AURORA_COLORS.violet, size: 440, x: "72%", y: "58%", motionX: [0, -60, 30, 70, -40, 0], motionY: [0, 40, -50, 20, -10, 0], scale: [1, 0.96, 1.1, 0.98, 1], duration: 38, delay: 5 },
    { color: AURORA_COLORS.cyan, size: 400, x: "48%", y: "78%", motionX: [0, 40, -30, 20, 0], motionY: [0, -60, 30, -40, 0], scale: [1, 1.06, 0.98, 1.04, 1], duration: 28, delay: 10 },
    { color: AURORA_COLORS.violet, size: 340, x: "88%", y: "22%", motionX: [0, -50, 20, -30, 0], motionY: [0, 30, -40, 10, 0], scale: [1, 1.08, 0.94, 1.02, 1], duration: 42, delay: 15 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y, background: orb.color, filter: "blur(90px)", transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.94 }}
          animate={{ opacity: 0.4, x: orb.motionX, y: orb.motionY, scale: orb.scale }}
          transition={{
            opacity: { duration: 1.4, delay: 0.2 + i * 0.18, ease: EASE_SMOOTH },
            x: { duration: orb.duration, repeat: Infinity, ease: EASE_SMOOTH, delay: orb.delay },
            y: { duration: orb.duration, repeat: Infinity, ease: EASE_SMOOTH, delay: orb.delay },
            scale: { duration: orb.duration, repeat: Infinity, ease: EASE_BREATHE, delay: orb.delay },
          }}
        />
      ))}
    </div>
  );
};

type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  link: string;
  color: string;
  image: string;
  glowColor: string;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [imgError, setImgError] = React.useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.5 }} viewport={{ once: true }} className="group relative">
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ filter: "blur(32px)", background: project.glowColor, zIndex: 0 }} aria-hidden />
      <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative z-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-shadow duration-300" whileHover={{ scale: 1.02 }} style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05)" }}>
        <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)] z-10 pointer-events-none" />
          {!imgError ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" onError={() => setImgError(true)} />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505]/95 to-transparent pointer-events-none z-[1]" />
        </div>
        <div className="relative p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{project.category}</p>
              <h3 className="text-xl font-semibold text-white tracking-tight">{project.title}</h3>
            </div>
            <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ArrowUpRight size={18} />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">{project.description}</p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[10px] uppercase tracking-wider text-gray-500 border border-white/10 px-2 py-1 rounded-md">{tech}</span>
            ))}
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

const projects: Project[] = [
  { title: "Dineline Onboarding", category: "AUTOMATION INFRASTRUCTURE", description: "A specialized onboarding protocol that digitizes the entire employee intake flow. Replaces manual paperwork with a logic-driven interface.", stack: ["Next.js", "Postgres", "Tailwind"], link: "https://dineline-onboarding.vercel.app/", color: "from-blue-500 to-indigo-500", image: "/dineline.png", glowColor: "rgba(239, 68, 68, 0.4)" },
  { title: "Crave", category: "SAAS PRODUCT", description: "AI-powered ads for restaurants. Brand sync, layouts, and copy in seconds. Creative that converts.", stack: ["React", "Supabase", "Framer Motion"], link: "https://creavedapp.vercel.app/", color: "from-orange-500 to-pink-500", image: "/crave.png", glowColor: "rgba(34, 197, 94, 0.4)" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/30 overflow-x-hidden">
      <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <FluidAuroraGradient />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 max-w-4xl">
          <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono text-gray-300 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse" />
            NELSON LOGIC_ SYSTEM ONLINE
          </div>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-none">
            Fluid <br />
            <GradientText>Intelligence.</GradientText>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            I craft software that feels alive. <br />
            <span className="text-white">Vibe Coding</span> meets high-performance architecture.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#initialize-project" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <Zap size={18} />
              Start Project
            </a>
            <a href="#selected-deployments" className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/5 transition-colors text-white">
              View Work
            </a>
          </div>
        </motion.div>
      </header>

      <section id="selected-deployments" className="py-32 px-6 bg-[#050505] relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4">Selected Deployments</h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: <Layers />, title: "Rapid MVP", desc: "48-hour sprints to validate ideas." },
            { icon: <Cpu />, title: "AI Integration", desc: "Custom LLM agents & logic flows." },
            { icon: <Globe />, title: "SaaS Systems", desc: "Scalable full-stack architecture." },
          ].map((item, i) => (
            <div key={i} className="p-8 border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <IntakeTerminal />

      <footer className="py-12 text-center text-gray-600 text-sm font-mono border-t border-white/5">
        <p>NELSON LOGIC © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
