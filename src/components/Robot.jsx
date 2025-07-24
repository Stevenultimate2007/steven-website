import { motion } from "framer-motion";

export default function Robot({ stage }) {
  const leftArmVariants = {
    default: { rotate: 0, y: 0 },
    wave: { 
      rotate: [0, -40, 0], 
      y: [0, -10, 0], 
      transition: { duration: 1, repeat: Infinity } 
    },
    grab: { rotate: -50, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const rightArmVariants = {
    default: { rotate: 0, y: 0 },
    grab: { rotate: 50, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="relative w-20 h-20">
      {/* Körper */}
      <div className="w-20 h-20 bg-[#1E90FF] rounded-full shadow-[0_0_15px_#1E90FF] flex items-center justify-center relative z-10">
        {/* Augen */}
        <div className="absolute w-4 h-4 bg-white rounded-full left-5 top-6 shadow-[0_0_5px_white]"></div>
        <div className="absolute w-4 h-4 bg-white rounded-full right-5 top-6 shadow-[0_0_5px_white]"></div>
        {/* Antenne */}
        <div className="absolute w-1.5 h-6 bg-[#63B3FF] rounded-full -top-5 left-1/2 transform -translate-x-1/2 shadow-[0_0_8px_#63B3FF]"></div>
      </div>
      {/* Linker Arm (Winken) */}
      <motion.div
        className="absolute w-2 h-8 bg-[#63B3FF] rounded-full -left-3 bottom-2 origin-bottom shadow-[0_0_8px_#63B3FF]"
        variants={leftArmVariants}
        animate={stage === 1 ? "wave" : stage === 3 ? "grab" : "default"}
      />
      {/* Rechter Arm */}
      <motion.div
        className="absolute w-2 h-8 bg-[#63B3FF] rounded-full -right-3 top-6 origin-top shadow-[0_0_8px_#63B3FF]"
        variants={rightArmVariants}
        animate={stage === 3 ? "grab" : "default"}
      />
    </div>
  );
}
