import { motion } from "motion/react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import resumeData from "../data/resume.json";

export function ProjectsSection() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          PROJECTS
        </h2>
        <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#222] bg-[#111] p-8 transition-all hover:border-[#00E5FF]/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.05)]"
          >
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#222] text-[#00E5FF]">
                <FolderGit2 size={24} />
              </div>
              {project.links && project.links.length > 0 && (
                <div className="flex gap-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#888] transition-colors hover:text-[#00E5FF]"
                    >
                      <ExternalLink size={20} />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="mb-4 font-display text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
              {project.title}
            </h3>

            {/* Stack */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-md bg-[#222] px-2.5 py-1 font-mono text-xs text-[#aaa] transition-colors group-hover:bg-[#333]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="mt-auto space-y-3">
              {project.bullets.map((bullet, i) => {
                const highlightedBullet = bullet.replace(
                  /(\d+(?:\.\d+)?%?|\d+ days|\d+ hours|\d+\+)/g,
                  (match) => `<span class="text-[#00E5FF] font-mono font-bold">${match}</span>`
                );

                return (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#888]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00E5FF]/50" />
                    <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} className="leading-relaxed" />
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
