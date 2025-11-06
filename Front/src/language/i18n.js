import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en.translation.json";
import translationRU from "../locales/ru.translation.json";
import translationLT from "../locales/lt.translation.json";
import translationDE from "../locales/de.translation.json";

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  lt: { translation: translationLT },
  de: { translation: translationDE },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default dil
  interpolation: { escapeValue: false },
});

export default i18n;
