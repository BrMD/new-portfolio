import i18next from "i18next";
import { getUserLanguage } from ".";
import { en, pt } from "../intl";

const initFunction = () => {
  i18next.init({
    lng: getUserLanguage(), // if you're using a language detector, do not define the lng option
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
