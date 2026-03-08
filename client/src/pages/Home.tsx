/**
 * Design: Midnight Glassmorphism + Flowing Paths
 * - Dark navy-black (#050a14) base
 * - Electric indigo (#6366f1) primary, soft cyan (#22d3ee) secondary
 * - Syne display font, Inter body
 * - BackgroundPaths animated hero from 21st.dev
 */

import Navbar from "@/components/Navbar";
import { BackgroundPaths } from "@/components/ui/background-paths";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050a14]">
      <Navbar />

      {/* Hero — BackgroundPaths from 21st.dev */}
      <BackgroundPaths
        title="Your Name"
        subtitle="I build elegant, performant web applications and love diving deep into algorithms, systems, and everything in between."
        ctaLabel="View My Projects"
        onCta={scrollToProjects}
      />

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
