import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");

  const setLang = (lng: "en" | "fr") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 text-xs sm:text-sm font-semibold select-none"
    >
      {/* Pastille glissante */}
      <span
        className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-sm transition-transform duration-300 ease-out ${
          isEn ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ left: "4px", right: "4px", width: "calc(50% - 4px)" }}
      />

      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={isEn}
        className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-300 ${
          isEn
            ? "text-white"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={!isEn}
        className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-300 ${
          !isEn
            ? "text-white"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
