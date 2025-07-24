import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Contact({ preselectedPackage = "" }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    package: preselectedPackage || "starter"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("/.netlify/functions/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Nachricht erfolgreich gesendet!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        package: preselectedPackage || "starter"
      });
    } else {
      alert("Fehler beim Senden. Bitte erneut versuchen.");
    }
  } catch (err) {
    alert("Serverfehler: " + err.message);
  }
 };


  return (
    <section id="contact" className="bg-black text-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-4">{t("contact.title")}</h2>
        <p className="text-center text-gray-400 mb-12">{t("contact.subtitle")}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t("contact.firstnamePlaceholder")}
              className="w-full p-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t("contact.lastnamePlaceholder")}
              className="w-full p-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact.emailPlaceholder")}
            className="w-full p-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("contact.phonePlaceholder")}
            className="w-full p-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.messagePlaceholder")}
            className="w-full p-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            rows="4"
          ></textarea>
          
          {/* Paket-Auswahl */}
          <div>
            <label className="block mb-2 text-gray-300">{t("contact.packageLabel")}</label>
            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="w-full p-4 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            >
              <option value="starter">{t("contact.packages.starter")}</option>
              <option value="pro">{t("contact.packages.pro")}</option>
              <option value="premium">{t("contact.packages.premium")}</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#1E90FF] rounded-full text-lg font-bold hover:bg-blue-600 transition"
          >
            {t("contact.button")}
          </button>
        </form>
      </div>
    </section>
  );
}
