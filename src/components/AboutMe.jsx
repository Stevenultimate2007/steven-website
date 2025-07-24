import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  const title = t("about.title"); // z.B. "Über mich" oder "About me"

  // Titel in zwei Teile aufteilen (damit wir "me" separat stylen können)
  const words = title.split(" ");
  const lastWord = words.pop(); // "me" oder "mich"
  const firstPart = words.join(" ");

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black via-gray-90 to-[#3A506B] py-32 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-white mb-8"
        >
          {firstPart}{" "}
          <span className="text-[#1E90FF] drop-shadow-[0_0_8px_#1E90FF]">
            {lastWord}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-200 leading-relaxed"
        >
          {t("about.text")}
        </motion.p>
      </div>
    </section>
  );
}
