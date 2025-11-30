"use client";

import { motion } from "framer-motion";


export default function DownArrows() {
  return (
    <div className="flex flex-col gap-2 items-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          className="text-white text-4xl"
        >
          ⌄
        </motion.div>
      ))}
    </div>
  );
}


