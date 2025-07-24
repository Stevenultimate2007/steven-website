import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const plans = [
    {
      key: "starter",
      name: t("pricing.starter.title"),
      desc: t("pricing.starter.desc"),
      price: t("pricing.starter.price"),
      popular: false,
    },
    {
      key: "pro",
      name: t("pricing.pro.title"),
      desc: t("pricing.pro.desc"),
      price: t("pricing.pro.price"),
      popular: true,
    },
    {
      key: "premium",
      name: t("pricing.premium.title"),
      desc: t("pricing.premium.desc"),
      price: t("pricing.premium.price"),
      popular: false,
    },
  ];

  const handleClick = (planKey) => {
    navigate(`/contact?package=${planKey}`);
  };

  return (
    <section id="pricing" className="bg-gradient-to-b from-black to-gray-900 py-32 px-6">
      <h2 className="text-5xl font-extrabold text-center text-white mb-6">
        {t("pricing.title")}
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16 text-xl font-medium text-center text-[#1E90FF] drop-shadow-[0_0_8px_#1E90FF] max-w-3xl mx-auto"
      >
        {t("pricing.info")}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl p-10 border ${
              plan.popular
                ? "border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                : "border-gray-700"
            } bg-black text-white text-center transition hover:scale-105`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                {t("pricing.popular")}
              </div>
            )}
            <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
            <p className="text-gray-400 mb-6">{plan.desc}</p>
            <div className="text-4xl font-extrabold mb-8">{plan.price}</div>
            <button
              onClick={() => handleClick(plan.key)}
              className="w-full border-2 border-white px-6 py-3 rounded-full hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:text-black transition"
            >
              {t("pricing.cta")}
            </button>
          </motion.div>
        ))}
      </div>
      <p className="mt-12 text-center text-gray-400 text-sm max-w-4xl mx-auto">
        {t("pricing.disclaimer")}
      </p>
    </section>
  );
}
