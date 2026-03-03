import { motion } from "motion/react";
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { useState } from "react";
import resumeData from "../data/resume.json";
import { cn } from "../lib/utils";

export function ExperienceSection() {
  const { experience } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          EXPERIENCE
        </h2>
        <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-[#222] to-transparent" />
      </motion.div>

      <div className="relative border-l border-[#222] pl-8 sm:pl-12">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-10.25 top-1.5 h-4 w-4 rounded-full border-2 border-background bg-[#00E5FF] sm:-left-14.25" />

            {/* Card */}
            <div
              className={cn(
                "glass-panel cursor-pointer overflow-hidden rounded-xl border border-[#222] bg-[#111]/80 transition-all hover:border-primary/30",
                expandedIndex === index ? "border-primary/50 shadow-[0_0_20px_rgba(0,229,255,0.1)]" : ""
              )}
              onClick={() => toggleExpand(index)}
            >
              {/* Header */}
              <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{job.role}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 font-mono text-sm text-[#888]">
                    <span className="flex items-center gap-1 text-[#43c5d4]">
                      <Briefcase size={14} />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {job.dates}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#222] text-[#888] transition-colors hover:bg-[#333] hover:text-white">
                  {expandedIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-[#222] p-6 pt-4">
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, i) => {
                      // Highlight numbers and percentages
                      const highlightedBullet = bullet.replace(
                        /(\d+(?:\.\d+)?%?|\d+ days|\d+ hours|\d+\+)/g,
                        (match) => `<span class="text-[#00E5FF] font-mono font-bold">${match}</span>`
                      );

                      return (
                        <li key={i} className="flex items-start gap-3 text-[#aaa]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00E5FF]/50" />
                          <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} className="leading-relaxed" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
