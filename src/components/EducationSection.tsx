import { motion } from "motion/react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import resumeData from "../data/resume.json";

export function EducationSection() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          EDUCATION & CERTS
        </h2>
        <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Education */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#222] text-[#00E5FF]">
              <GraduationCap size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-[#222] bg-[#111] p-6 transition-all hover:border-[#00E5FF]/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.05)]"
              >
                <h4 className="mb-2 font-display text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">{edu.degree}</h4>
                <div className="mb-4 flex flex-wrap items-center gap-4 font-mono text-sm text-[#888]">
                  <span>{edu.institution}</span>
                  <span className="text-[#00E5FF]">{edu.dates}</span>
                </div>
                <p className="text-sm leading-relaxed text-[#aaa]">
                  <strong className="text-white">Relevant Coursework:</strong> {edu.coursework}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#222] text-[#00E5FF]">
              <Award size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-[#222] bg-[#111] p-6 transition-all hover:border-[#00E5FF]/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.05)]"
              >
                <div>
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors">{cert.name}</h4>
                  <p className="font-mono text-sm text-[#888]">{cert.issuer}</p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#222] text-[#888] transition-colors hover:bg-[#00E5FF] hover:text-black"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
