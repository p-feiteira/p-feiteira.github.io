"use client";

import { motion } from "framer-motion";

type Direction = "up" | "left" | "right" | "none";

interface AnimatedItemProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

const OFFSET = 64;

const dirMap: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,        y: OFFSET },
  left:  { x: -OFFSET,  y: 0      },
  right: { x: OFFSET,   y: 0      },
  none:  { x: 0,        y: 0      },
};

export function AnimatedItem({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimatedItemProps) {
  const { x, y } = dirMap[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale: 0.97, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{
        opacity: { duration: 0.5, ease: "easeOut",   delay },
        x:       { type: "spring", stiffness: 65, damping: 18, delay },
        y:       { type: "spring", stiffness: 65, damping: 18, delay },
        scale:   { type: "spring", stiffness: 65, damping: 18, delay },
        filter:  { duration: 0.65, ease: "easeOut",  delay },
      }}
    >
      {children}
    </motion.div>
  );
}
