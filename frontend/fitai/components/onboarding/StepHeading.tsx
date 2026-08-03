"use client";

import { motion } from "framer-motion";

interface StepHeadingProps {
  title: string;
  subtitle: string;
}

export function StepHeading({ title, subtitle }: StepHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mb-8 max-w-2xl"
    >
      <h1 className="font-display text-3xl leading-[1.1] text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ink-muted">{subtitle}</p>
    </motion.div>
  );
}
