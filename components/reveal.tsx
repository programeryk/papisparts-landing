"use client";

import { motion } from "motion/react";

type RevealProps = {
  as?: "div" | "li";
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({ as = "div", delay = 0, ...props }: RevealProps) {
  const Component = as === "li" ? motion.li : motion.div;
  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      {...props}
    />
  );
}
