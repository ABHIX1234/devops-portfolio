/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { motion, AnimatePresence } from "motion/react";
import resumeData from "./data/resume.json";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen selection:bg-primary/30 selection:text-white"
        >
          {/* Background Mesh */}
          <div className="mesh-bg" />

          {/* Navigation */}
          <nav className="fixed top-0 z-40 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <div className="font-display text-xl font-bold tracking-tighter">
                <span className="text-white">A</span>
                <span className="text-primary">R</span>
              </div>
              <div className="hidden items-center gap-8 font-mono text-xs tracking-widest text-[#888] sm:flex">
                <a href="#experience" className="transition-colors hover:text-white">EXPERIENCE</a>
                <a href="#achievements" className="transition-colors hover:text-white">IMPACT</a>
                <a href="#projects" className="transition-colors hover:text-white">PROJECTS</a>
                <a href="#skills" className="transition-colors hover:text-white">SKILLS</a>
                <a href="#contact" className="transition-colors hover:text-white">CONTACT</a>
              </div>
              <div className="flex items-center gap-4">
                <a href={`mailto:${resumeData.basics.email}`} className="text-[#888] transition-colors hover:text-primary">
                  <Mail size={18} />
                </a>
                <a href={`https://${resumeData.basics.links[0]}`} target="_blank" rel="noopener noreferrer" className="text-[#888] transition-colors hover:text-primary">
                  <Linkedin size={18} />
                </a>
                <a href={`https://${resumeData.basics.links[1]}`} target="_blank" rel="noopener noreferrer" className="text-[#888] transition-colors hover:text-primary">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="pt-20">
            <HeroSection />
            <AchievementsSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <footer className="border-t border-[#222] bg-background py-12 text-center">
            <p className="font-mono text-xs text-[#888]">
              © {new Date().getFullYear()} {resumeData.basics.name}. ALL_SYSTEMS_OPERATIONAL.
            </p>
          </footer>
        </motion.div>
      )}
    </>
  );
}
