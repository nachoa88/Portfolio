import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector) // passes the i18 language detector
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'es', 'cat'],
        // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option --> lng: "en",
        detection: {
            // order and from where user language should be detected
            order: ['querystring', 'cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        fallbackLng: "en", // This is just in case if the user uses a language that is not supported, show the "en" lang.
        // As this translations are being held in this same project, the path is a local path.
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json'
        },
    });

export default i18n;