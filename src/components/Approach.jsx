import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaLightbulb, FaVideo, FaCut, FaCheckCircle } from "react-icons/fa";

export default function Approach() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("approach.step1.title"),
      description: t("approach.step1.desc"),
      icon: <FaEnvelope className="text-white text-lg" />,
      color: "#1E90FF",
    },
    {
      title: t("approach.step2.title"),
      description: t("approach.step2.desc"),
      icon: <FaLightbulb className="text-white text-lg" />,
      color: "#FFD700",
    },
    {
      title: t("approach.step3.title"),
      description: t("approach.step3.desc"),
      icon: <FaVideo className="text-white text-lg" />,
      color: "#32CD32",
    },
    {
      title: t("approach.step4.title"),
      description: t("approach.step4.desc"),
      icon: <FaCut className="text-white text-lg" />,
      color: "#FF6347",
    },
    {
      title: t("approach.step5.title"),
      description: t("approach.step5.desc"),
      icon: <FaCheckCircle className="text-white text-lg" />,
      color: "#8A2BE2",
    },
  ];

  return (
    <motion.section
      className="bg-gradient-to-b from-gray-900 to-black py-24 px-6 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="approach"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">{t("approach.title")}</h2>
        <p className="text-gray-400 text-lg mb-20">{t("approach.subtitle")}</p>

        <div className="relative border-l-4 border-[#1E90FF] pl-6 space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute -left-[38px] top-1.5 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{ backgroundColor: step.color }}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
