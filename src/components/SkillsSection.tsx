import { motion } from "motion/react";
import resumeData from "../data/resume.json";
import { Terminal, Box, Cloud, Code, Activity, Layers } from "lucide-react";

export function SkillsSection() {
  const { skills } = resumeData;

  const categoryIcons: Record<string, any> = {
    "CI/CD & Automation": Terminal,
    "Containers & Orchestration": Box,
    "Cloud & Infrastructure": Cloud,
    "Scripting & Programming": Code,
    "Monitoring & Testing": Activity,
    "Methodologies": Layers,
  };

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          SKILLS
        </h2>
        <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items], index) => {
          const Icon = categoryIcons[category] || Terminal;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[#222] bg-[#111] p-6 transition-all hover:border-[#00E5FF]/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.05)]"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#222] text-[#00E5FF] transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-[#333] bg-[#1a1a1a] px-3 py-1.5 font-mono text-xs text-[#aaa] transition-colors group-hover:border-[#00E5FF]/30 group-hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
