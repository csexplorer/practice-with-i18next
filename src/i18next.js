import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import moment from "moment";

i18next
  // pass the i18next instance to react-i18next.
  .use(initReactI18next)
  .use(Backend)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: "en",
    fallbackLng: false,
    ns: ["common", "field"],
    defaultNS: "common",
    interpolation: {
      format: (value, format, lng) => {
        if (format === "uppercase") return value.toUpperCase();
        if (value instanceof Date) return moment(value).format(format);
      },
      escapeValue: false // not needed for react as it escapes by default
    },
    saveMissing: true,
    backend: {
      loadPath: "/locales/{{lng}}.json",
      addPath: "/locales/{{lng}}.json"
    }
  });

export default i18next;
