import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import resumeData from "../data/resume.json";
import { Trophy, Zap, Activity, Users } from "lucide-react";

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse number and suffix
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      setCount(value);
      return;
    }

    const numStr = match[1].replace(/,/g, "");
    const suffix = match[2];
    const endValue = parseFloat(numStr);

    if (isNaN(endValue)) {
      setCount(value);
      return;
    }

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * endValue);
      setCount(current.toLocaleString() + suffix);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value); // Ensure exact final value
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function AchievementsSection() {
  const { achievements } = resumeData;

  const icons = [Zap, Activity, Users, Trophy];

  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          IMPACT
        </h2>
        <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[#222] bg-[#111]/50 p-8 transition-all hover:border-[#00E5FF]/50 hover:bg-[#111]"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#00E5FF]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#222] text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-transform group-hover:scale-110">
                  <Icon size={32} />
                </div>
                <h3 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
                  <AnimatedCounter value={achievement.metric} />
                </h3>
                <p className="font-mono text-sm leading-relaxed text-[#888]">
                  {achievement.context}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
