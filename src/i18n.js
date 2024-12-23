import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // passes the i18 language detector
  .use(HttpApi)
  .init({
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    supportedLngs: ["en", "es", "cat"],
    fallbackLng: "en", // This is just in case if the user uses a language that is not supported, show the "en" lang.
    // As this translations are being held in this same project, the path is a local path.
    detection: {
      // order and from where user language should be detected
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
