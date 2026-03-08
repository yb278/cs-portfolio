/**
 * Design: Midnight Glassmorphism + Flowing Paths
 * - 2-col project card grid with glass morphic cards
 * - Hover lift + glow effect
 * - Placeholder cards ready to be filled with real projects
 */

import { motion } from "framer-motion";
import { Github, ExternalLink, FolderOpen } from "lucide-react";
import { toast } from "sonner";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A full-stack web application built with modern technologies. Add your project description here — what problem it solves, what you learned, and the key features.",
    tags: ["React", "Node.js", "PostgreSQL"],
    featured: true,
    status: "completed",
  },
  {
    title: "Project Two",
    description: "Describe your second project here. Highlight the technical challenges you overcame and the impact of the solution.",
    tags: ["Python", "FastAPI", "Docker"],
    status: "completed",
  },
  {
    title: "Project Three",
    description: "Your third project goes here. What technologies did you use? What was the most interesting part of building it?",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    status: "in-progress",
  },
  {
    title: "Project Four",
    description: "Another project to showcase your skills. Feel free to replace all of these with your real projects when you're ready.",
    tags: ["C++", "Algorithms", "Data Structures"],
    status: "planned",
  },
];

const statusColors: Record<string, string> = {
  completed: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "in-progress": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  planned: "text-slate-400 bg-slate-400/10 border-slate-400/20",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#070d1a] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase">03 /</span>
          <span className="text-white font-bold text-3xl md:text-4xl" style={{ fontFamily: "'Syne', sans-serif" }}>
            Projects
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-500 text-sm mb-12 font-mono"
        >
          // Projects will be added soon — placeholders shown below
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => toast.info("GitHub profile link coming soon!")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200 text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const handleLink = (url?: string, label?: string) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      toast.info(`${label} link coming soon!`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl border bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-indigo-900/20 ${
        project.featured
          ? "border-indigo-500/30 hover:border-indigo-400/50"
          : "border-white/8 hover:border-white/15"
      }`}
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded-md">
            Featured
          </span>
        </div>
      )}

      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
          <FolderOpen className="w-5 h-5 text-indigo-400" />
        </div>
        <div className="flex items-center gap-2 mt-1">
          {project.github !== undefined || true ? (
            <button
              onClick={() => handleLink(project.github, "GitHub")}
              className="text-slate-500 hover:text-white transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </button>
          ) : null}
          <button
            onClick={() => handleLink(project.demo, "Demo")}
            className="text-slate-500 hover:text-white transition-colors p-1"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Title + status */}
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
          {project.title}
        </h3>
        {project.status && (
          <span className={`text-xs font-mono px-2 py-0.5 rounded-md border ${statusColors[project.status]}`}>
            {project.status}
          </span>
        )}
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-slate-400 bg-white/5 border border-white/8 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
