"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Entrada suave quando o elemento entra na tela (uma vez). Conteúdo visível sem JS. */
export function Reveal({ delay = 0, y = 24, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  // Mesma árvore no servidor e no cliente; com movimento reduzido o conteúdo aparece sem animação.
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={reduce ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
