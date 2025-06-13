// components/AnimatedItem.tsx
"use client";

import { useInView } from "@/lib/use-in-view";
import clsx from "clsx";

interface AnimatedItemProps {
  children: React.ReactNode;
}

export function AnimatedItem({ children }: AnimatedItemProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={clsx(
        "opacity-0 translate-y-10 transition-all duration-700 ease-out",
        inView && "opacity-100 translate-y-0"
      )}
    >
      {children}
    </div>
  );
}
