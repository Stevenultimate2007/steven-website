// src/components/BubbleTrail.jsx
import { motion } from "framer-motion";

export default function BubbleTrail({ count = 3 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // <- Zeitversetztes Aufploppen
      },
    },
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: [1.3, 1], // leichtes Überdehnen beim Ploppen
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center mb-1 space-y-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-white border border-gray-300 rounded-full shadow-md"
          style={{ width: 8 + i * 4, height: 8 + i * 4 }}
          variants={bubbleVariants}
        />
      ))}
    </motion.div>
  );
}
