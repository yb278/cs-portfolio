/**
 * Design: Midnight Glassmorphism + Flowing Paths
 * - Skills grouped by category with glass cards
 * - Tag cloud style with hover glow
 * - Stagger reveal animation
 */

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    color: "indigo",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    color: "cyan",
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    title: "Backend",
    color: "violet",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Tools & DevOps",
    color: "emerald",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Figma", "Postman"],
  },
  {
    title: "CS Fundamentals",
    color: "amber",
    skills: ["Data Structures", "Algorithms", "OOP", "System Design", "Databases", "Networking"],
  },
];

const colorMap: Record<string, { tag: string; border: string; glow: string; label: string }> = {
  indigo: {
    tag: "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border-emerald-500/20 hover:border-emerald-400/40",
    border: "border-emerald-500/20",
    glow: "bg-emerald-500/5",
    label: "text-emerald-400",
  },
  cyan: {
    tag: "bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 border-teal-500/20 hover:border-teal-400/40",
    border: "border-teal-500/20",
    glow: "bg-teal-500/5",
    label: "text-teal-400",
  },
  violet: {
    tag: "bg-green-500/10 text-green-300 hover:bg-green-500/20 border-green-500/20 hover:border-green-400/40",
    border: "border-green-500/20",
    glow: "bg-green-500/5",
    label: "text-green-400",
  },
  emerald: {
    tag: "bg-lime-500/10 text-lime-300 hover:bg-lime-500/20 border-lime-500/20 hover:border-lime-400/40",
    border: "border-lime-500/20",
    glow: "bg-lime-500/5",
    label: "text-lime-400",
  },
  amber: {
    tag: "bg-yellow-600/10 text-yellow-300 hover:bg-yellow-600/20 border-yellow-600/20 hover:border-yellow-400/40",
    border: "border-yellow-600/20",
    glow: "bg-yellow-600/5",
    label: "text-yellow-400",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#050a14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase">02 /</span>
          <span className="text-white font-bold text-3xl md:text-4xl" style={{ fontFamily: "'Syne', sans-serif" }}>
            Skills
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`relative rounded-2xl border ${colors.border} bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-all duration-300 group`}
              >
                {/* Card glow on hover */}
                <div className={`absolute inset-0 rounded-2xl ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                <div className="relative">
                  <h3 className={`font-mono text-xs tracking-[0.25em] uppercase ${colors.label} mb-4`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.04 }}
                        className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200 cursor-default ${colors.tag}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
