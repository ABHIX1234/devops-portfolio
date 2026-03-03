import { motion } from "motion/react";
import { Mail, Copy, Check, ExternalLink, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import resumeData from "../data/resume.json";

export function ContactSection() {
  const { basics } = resumeData;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(basics.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          CONTACT
        </h2>
        <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel relative overflow-hidden rounded-3xl border border-[#222] bg-[#111]/50 p-8 text-center sm:p-12"
      >
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[#00E5FF]/5 blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#0077FF]/5 blur-[100px]" />

        <div className="relative z-10">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[#222] text-[#00E5FF]">
            <Mail size={40} />
          </div>
          
          <h3 className="mb-4 font-display text-3xl font-bold text-white">Let's build something together</h3>
          <p className="mb-10 text-[#888]">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            {/* Primary Action: Email */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row w-full">
              <a
                href={`mailto:${basics.email}`}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#00E5FF] px-8 py-4 font-mono text-sm font-bold text-black transition-transform hover:scale-105 sm:w-auto"
              >
                <span>SEND_MESSAGE</span>
                <ExternalLink size={18} />
              </a>

              <button
                onClick={copyToClipboard}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#222] bg-[#1a1a1a] px-8 py-4 font-mono text-sm font-medium text-white transition-colors hover:border-[#00E5FF]/50 hover:bg-[#222] sm:w-auto"
              >
                {copied ? <Check size={18} className="text-[#00E5FF]" /> : <Copy size={18} />}
                <span>{copied ? "EMAIL_COPIED" : "COPY_EMAIL"}</span>
              </button>
            </div>

            {/* Secondary Action: Phone */}
            <a
              href={`tel:${basics.phone}`}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#222] bg-[#1a1a1a] px-8 py-4 font-mono text-sm font-medium text-white transition-colors hover:border-[#00E5FF]/50 hover:bg-[#222] sm:w-auto"
            >
              <Phone size={18} className="text-[#00E5FF]" />
              <span>{basics.phone}</span>
            </a>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-6">
              <a
                href={`https://${basics.links[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222] text-[#888] transition-all hover:bg-[#00E5FF] hover:text-black hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`https://${basics.links[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222] text-[#888] transition-all hover:bg-[#00E5FF] hover:text-black hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="mt-10 font-mono text-xs tracking-widest text-[#444] uppercase">
            {basics.email}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
