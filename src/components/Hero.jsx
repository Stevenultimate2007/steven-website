import { motion } from "framer-motion";
import Robot from "./Robot";
import { useTranslation } from "react-i18next";

export default function Hero({ stage }) {
  const { t } = useTranslation();
  const name = t("hero.title"); // Übersetzter Name
  const letters = name.split("");

  return (
    <section className="relative h-screen w-full bg-[#F9FAFB] overflow-hidden flex flex-col items-center justify-center">
      <motion.div className="relative z-10 flex justify-center space-x-2">
        {letters.map((char, i) => {
          const isFirstLetter = i === 0;
          return (
            <span
              key={i}
              className="relative text-7xl md:text-9xl font-extrabold tracking-widest z-20"
            >
              {char}
            </span>
          );
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-6 text-xl md:text-2xl text-gray-700 text-center px-4"
      >
        {t("hero.subtitle")}
      </motion.p>

     <motion.a
  href="/contact"   // <-- Hier ändern wir den Link
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.8, duration: 0.8 }}
  whileHover={{ scale: 1.07, boxShadow: "0 0 20px rgba(30,144,255,0.8)" }}
  className="inline-block mt-12 bg-[#1E90FF] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#187bcd] transition shadow-lg"
>
  {t("hero.cta")}
</motion.a>
    </section>
  );
}
