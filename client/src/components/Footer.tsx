/**
 * Design: Midnight Glassmorphism + Flowing Paths
 * - Minimal dark footer with gradient divider
 */

import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050a14] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center">
              <Code2 className="w-3 h-3 text-white" />
            </div>
            <span className="text-slate-500 text-sm font-mono">dev.portfolio</span>
          </div>

          <motion.p
            className="text-slate-600 text-xs flex items-center gap-1.5 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Built with <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" /> using React & Framer Motion
          </motion.p>

          <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
