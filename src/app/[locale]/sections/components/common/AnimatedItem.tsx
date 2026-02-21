"use client";

import { motion } from "framer-motion";

interface AnimatedItemProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedItem({ children, delay = 0 }: AnimatedItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.9,
        delay: delay * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
