import i18next from "i18next";
import { getUserLanguage } from ".";
import { en, pt } from "../intl";

const initFunction = () => {
  i18next.init({
    lng: getUserLanguage(),
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: { ...en },
      },
      pt: { translation: { ...pt } },
    },
  });
};

export default initFunction;
