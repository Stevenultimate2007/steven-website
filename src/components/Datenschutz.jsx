import { useTranslation } from "react-i18next";

export default function Datenschutz() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Titel */}
        <h1 className="text-4xl font-bold mb-10 text-center">{t("datenschutz.title")}</h1>

        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">
          <p className="text-lg">
            {t("datenschutz.intro")}
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("datenschutz.responsibleTitle")}</h2>
            <p>Steven Ntto</p>
            <p>Herzog-Erich-Ring 77</p>
            <p>49661 Cloppenburg</p>
            <p>E-Mail: info@cutnity.com</p>
            <p>Telefon: +49 162 7274911</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("datenschutz.dataCollectionTitle")}</h2>
            <p>{t("datenschutz.dataCollectionText")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("datenschutz.rightsTitle")}</h2>
            <p>{t("datenschutz.rightsText")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("datenschutz.cookiesTitle")}</h2>
            <p>{t("datenschutz.cookiesText")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("datenschutz.securityTitle")}</h2>
            <p>{t("datenschutz.securityText")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("datenschutz.changesTitle")}</h2>
            <p>{t("datenschutz.changesText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

