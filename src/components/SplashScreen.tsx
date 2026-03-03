import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400); // Wait a bit after 100% before completing
          return 100;
        }
        return p + 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex flex-col items-center">
        {/* Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-6xl font-bold tracking-tighter"
          style={{ fontFamily: "Space Grotesk" }}
        >
          <span className="text-white">A</span>
          <span className="text-[#00E5FF]">R</span>
        </motion.div>

        {/* Loading Bar */}
        <div className="h-1 w-48 overflow-hidden rounded-full bg-[#222]">
          <motion.div
            className="h-full bg-[#00E5FF]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.05 }}
          />
        </div>

        {/* System Status Text */}
        <motion.div
          className="mt-4 font-mono text-xs text-[#888]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {progress < 30 && "INITIALIZING_SYSTEM..."}
          {progress >= 30 && progress < 70 && "LOADING_INFRASTRUCTURE..."}
          {progress >= 70 && progress < 100 && "DEPLOYING_CONTAINERS..."}
          {progress === 100 && "SYSTEM_ONLINE"}
        </motion.div>
      </div>
    </motion.div>
  );
}
