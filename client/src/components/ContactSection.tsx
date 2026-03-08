/**
 * Design: Midnight Glassmorphism + Flowing Paths
 * - Centered glass card with contact form
 * - Social links row below
 * - Indigo/cyan gradient accents
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
  { icon: Twitter, label: "Twitter / X", href: "#", color: "hover:text-sky-400" },
  { icon: Mail, label: "Email", href: "mailto:your@email.com", color: "hover:text-indigo-400" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: in a real app, send to an API
    toast.success("Message sent! I'll get back to you soon.");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050a14] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase">04 /</span>
          <span className="text-white font-bold text-3xl md:text-4xl" style={{ fontFamily: "'Syne', sans-serif" }}>
            Get In Touch
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Let's build something together
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm currently open to internship opportunities, freelance projects, and collaborations. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-4">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-slate-500 ${color} transition-colors duration-200 text-sm`}
                  whileHover={{ x: 3 }}
                  onClick={href === "#" ? (e) => { e.preventDefault(); toast.info(`${label} link coming soon!`); } : undefined}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </motion.a>
              ))}
            </div>

            {/* Direct email */}
            <div className="mt-10 p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
              <p className="text-slate-500 text-xs font-mono mb-1">Direct email</p>
              <a
                href="mailto:your@email.com"
                className="text-indigo-300 hover:text-indigo-200 transition-colors font-medium"
              >
                your@email.com
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs font-mono mb-2 tracking-wide uppercase">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-mono mb-2 tracking-wide uppercase">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-mono mb-2 tracking-wide uppercase">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-900/30 hover:shadow-indigo-500/30"
              >
                {sent ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
