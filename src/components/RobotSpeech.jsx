// src/components/RobotSpeech.jsx
import BubbleTrail from "./BubbleTrail";
import SpeechBubble from "./SpeechBubble";
import { motion } from "framer-motion";

export default function RobotSpeech({ landingPos = { x: 200, y: 300 }, lines = ["Hallo!", "Ich bin dein Editor-Bot."] }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="absolute z-50 pointer-events-none"
      style={{
    top: landingPos.y + 145, // 50px höher
    left: landingPos.x + 40, // 20px nach rechts
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Aufsteigende Blasen */}
      <BubbleTrail count={3} delays={0.25} />

      {/* Sprechblase */}
      <SpeechBubble lines={lines} />
    </motion.div>
  );
}
