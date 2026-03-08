/**
 * Design: Midnight Glassmorphism + Flowing Paths
 * - Glass card with subtle border and backdrop blur
 * - Avatar illustration on the right, text on the left
 * - Stagger reveal on scroll via framer-motion
 */

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Coffee, Sparkles } from "lucide-react";

const AVATAR_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414112000/WUqPBPULMDeNrwceZH5ywc/avatar-placeholder-JZrk8ero4C4DNsRpNMeker.webp";

const stats = [
  { value: "3rd", label: "Year CS Student" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Languages Known" },
  { value: "∞", label: "Cups of Coffee" },
];

const highlights = [
  { icon: GraduationCap, text: "Computer Science, University" },
  { icon: MapPin, text: "Open to Remote & Relocation" },
  { icon: Coffee, text: "Fuelled by caffeine & curiosity" },
  { icon: Sparkles, text: "Passionate about clean code" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#070d1a] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase">01 /</span>
          <span className="text-white font-bold text-3xl md:text-4xl" style={{ fontFamily: "'Syne', sans-serif" }}>
            About Me
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={itemVariants} className="text-slate-300 text-lg leading-relaxed mb-6">
              Hey there! I'm a passionate Computer Science student with a love for building things that live on the internet. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-400 text-base leading-relaxed mb-8">
              When I'm not writing code, you'll find me exploring new technologies, contributing to open-source projects, or diving deep into algorithms and data structures. I believe in writing clean, maintainable code and continuously learning from the community.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-200 mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {value}
                  </div>
                  <div className="text-slate-500 text-xs leading-tight">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 blur-xl" />
              {/* Card */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-indigo-900/30">
                <img
                  src={AVATAR_URL}
                  alt="CS Student coding at desk"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-[#0d1629] border border-emerald-500/30 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white text-sm font-medium">Open to Work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
