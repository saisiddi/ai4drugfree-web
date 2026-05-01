"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function SectionReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
    >
      {children}
    </motion.div>
  );
}
