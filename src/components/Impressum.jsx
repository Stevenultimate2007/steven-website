import { useTranslation } from "react-i18next";

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Titel */}
        <h1 className="text-4xl font-bold mb-10 text-center">{t("impressum.title")}</h1>

        {/* Box mit Kontaktdaten */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t("impressum.responsible")}</h2>
          <p className="text-lg">Steven Ntto</p>
          <p className="text-lg">Herzog-Erich-Ring 77</p>
          <p className="text-lg">49661 Cloppenburg</p>
        </div>

        {/* Kontakt */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t("impressum.contact")}</h2>
          <p className="text-lg">E-Mail: info@cutnity.com</p>
          <p className="text-lg">Telefon: +49 162 7274911</p>
        </div>

        {/* Zusatzinfos */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">{t("impressum.additionalTitle")}</h2>
          <p className="text-lg">{t("impressum.ust")}: Keine (Kleinunternehmer nach § 19 UStG)</p>
          <p className="text-lg">{t("impressum.note")}</p>
        </div>

        {/* Letzter Hinweis */}
        <p className="text-sm text-gray-400 mt-12 text-center">
          {t("impressum.disclaimer")}
        </p>
      </div>
    </section>
  );
}

