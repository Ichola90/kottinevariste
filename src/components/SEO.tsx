import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SEO: React.FC = () => {
  const { i18n, t } = useTranslation();
  const isEn = i18n.language.startsWith("en");
  const baseUrl = "https://drkottin.onrender.com";

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{t("seo.title")}</title>
      <meta name="description" content={t("seo.description")} />
      <meta name="language" content={isEn ? "English" : "French"} />
      <link rel="canonical" href={`${baseUrl}/${isEn ? "en" : "fr"}`} />

      {/* hreflang — indique à Google les deux versions linguistiques */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />

      <meta property="og:title" content={t("seo.ogTitle")} />
      <meta property="og:description" content={t("seo.description")} />
      <meta property="og:locale" content={isEn ? "en_US" : "fr_FR"} />
      <meta property="og:locale:alternate" content={isEn ? "fr_FR" : "en_US"} />
    </Helmet>
  );
};

export default SEO;
