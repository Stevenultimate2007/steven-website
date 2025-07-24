import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [loading, setLoading] = useState(true);
  const text = "SN";
  const letters = text.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish();
    }, 3000); // Loader bleibt 3 Sekunden
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Zeitversetztes Erscheinen
        type: "spring",
        stiffness: 500,
        damping: 20,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="flex space-x-2">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-extrabold text-white tracking-widest"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
