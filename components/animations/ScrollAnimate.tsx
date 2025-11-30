"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimationType =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip"
  | "rotate";

interface ScrollAnimateProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  distance?: number;
  repeat?: boolean;
}

export default function ScrollAnimate({
  children,
  type = "fade-up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  repeat = false,
}: ScrollAnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {  amount: 0.3 });

  // Animation Presets
  const variants: Record<AnimationType, any> = {
    fade: {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    },
    "fade-up": {
      hidden: { opacity: 0, y: distance },
      show: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -distance },
      show: { opacity: 1, y: 0 },
    },
    "fade-left": {
      hidden: { opacity: 0, x: -distance },
      show: { opacity: 1, x: 0 },
    },
    "fade-right": {
      hidden: { opacity: 0, x: distance },
      show: { opacity: 1, x: 0 },
    },
    "zoom-in": {
      hidden: { opacity: 0, scale: 0.8 },
      show: { opacity: 1, scale: 1 },
    },
    "zoom-out": {
      hidden: { opacity: 0, scale: 1.2 },
      show: { opacity: 1, scale: 1 },
    },
    flip: {
      hidden: { opacity: 0, rotateX: 90 },
      show: { opacity: 1, rotateX: 0 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -45 },
      show: { opacity: 1, rotate: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants[type]}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
