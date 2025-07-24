// src/components/SpeechBubble.jsx
import { motion } from "framer-motion";

export default function SpeechBubble({ lines }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: [0, 1.2, 1] }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border shadow-lg rounded-2xl p-4 max-w-xs text-center"
    >
      <motion.p
        className="text-gray-700 text-sm leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {lines.map((line, idx) => (
          <motion.span
            key={idx}
            className="block"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {line}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
}
