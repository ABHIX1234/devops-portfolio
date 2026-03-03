import { motion } from "motion/react";
import { ArrowRight, Download, Terminal } from "lucide-react";
import resumeData from "../data/resume.json";

export function HeroSection() {
  const { basics } = resumeData;

  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 text-center lg:flex-row lg:text-left lg:gap-12 lg:px-12">
      <div className="mesh-bg" />
      
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 flex max-w-3xl flex-col items-center lg:items-start"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          SYSTEM_ONLINE
        </motion.div>

        {/* Name & Title */}
        <h1 className="mb-4 font-display text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl">
          {basics.name}
        </h1>
        <h2 className="gradient-text-primary mb-8 font-mono text-xl font-medium tracking-widest uppercase sm:text-2xl">
          {basics.title}
        </h2>

        {/* Summary */}
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#888] sm:text-xl">
          {basics.summary}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#experience"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-8 py-4 font-mono text-sm font-bold text-black transition-transform hover:scale-105"
          >
            <Terminal size={18} />
            <span>VIEW_EXPERIENCE</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1r-z95bZniuLJ3XbHjfquLL7Cb91IG2sO"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#222] bg-[#111] px-8 py-4 font-mono text-sm font-medium text-white transition-colors hover:border-primary/50 hover:bg-[#1a1a1a]"
          >
            <Download size={18} />
            <span>DOWNLOAD_RESUME</span>
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-16 lg:mt-0"
      >
        <div className="relative h-64 w-64 sm:h-80 sm:w-80">
          {/* Decorative Rings */}
          <div className="absolute -inset-4 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-primary/20" />
          <div className="absolute -inset-8 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-dashed border-primary/10" />
          
          {/* Image Container */}
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/30 bg-[#111] shadow-[0_0_50px_rgba(0,229,255,0.1)]">
            <img
              src="https://lh3.googleusercontent.com/d/1gbESjgedgm4DVYD_KBR550w82jt367cY"
              alt={basics.name}
              className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating Tech Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-10 rounded-lg border border-[#222] bg-[#111]/80 p-3 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-[10px] text-white">K8S_EXPERT</span>
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-8 bottom-20 rounded-lg border border-[#222] bg-[#111]/80 p-3 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-[10px] text-white">CI_CD_ARCHITECT</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444] lg:left-12 lg:translate-x-0"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <div className="h-12 w-px bg-linear-to-b from-[#444] to-transparent" />
      </motion.div>
    </section>
  );
}
