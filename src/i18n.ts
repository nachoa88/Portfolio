import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// Define default namespaces for the translation files
export const defaultNS = "translation";

// Define empty resources for the translation files in order to dinamicly load the translations
export const resources = {
  en: {},
  es: {},
  cat: {}
} as const;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // passes the i18 language detector
  .use(HttpApi)
  .init({
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    supportedLngs: ["en", "es", "cat"],
    fallbackLng: "en", // This is just in case if the user uses a language that is not supported, show the "en" lang.
    defaultNS,
    // We use the backend to load the translations from the public/locales folder
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      // order and from where user language should be detected
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
