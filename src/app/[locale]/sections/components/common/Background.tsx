"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Background() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  if (!mounted) {
    return <div className="fixed inset-0 -z-50 bg-background" />;
  }

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background pointer-events-none">

      {/* Moving gradient meshes */}
      <div className="absolute inset-0 blur-[100px] saturate-150">
        <motion.div
          style={{ y: y1 }}
          animate={{
            x: ["0%", "15%", "-15%", "0%"],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-500 opacity-20 dark:opacity-[0.15]"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{
            x: ["0%", "-20%", "20%", "0%"],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-orange-500 opacity-20 dark:opacity-[0.15]"
        />
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["0%", "20%", "0%"],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-amber-500 opacity-20 dark:opacity-[0.15]"
        />
      </div>

      {/* Dotted Grid Pattern with Fade-Out at edges */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05] mix-blend-normal"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, white 20%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, white 20%, transparent 90%)',
        }}
      />
    </div>
  );
}
