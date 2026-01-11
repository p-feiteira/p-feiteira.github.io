"use client";

import { motion } from "framer-motion";

interface AnimatedItemProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedItem({ children, delay = 0 }: AnimatedItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay * 0.1,
        type: "spring",
        bounce: 0.2
      }}
    >
      {children}
    </motion.div>
  );
}
