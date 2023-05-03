import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: true,
    },
    resources: {
      en: {
        translation: {
          from: "from",
          to: "to",
          convince: "Let's Go",
          title: "Your ride. Your decision.",
          text: "Taking the bike is good for the environment, your health and your wallet! For this <1>{{distance}}</1> bike ride you'll burn <3>{{calories}}</3> calories, help nature with <5>{{co2}}</5> less CO2 polution and on top of that save <7>€ {{money}}</7>!",
          new: "new route",
          processing: "Getting ready",
          error: "Oh no! An error has occurred."
        }
      },
      de: {
        translation: {
          from: "von",
          to: "nach",
          convince: "Auf geht's",
          title: "Deiner Weg. Deine Entscheidung.",
          text: "Das Fahrrad ist nicht nur gut für die Umwelt und deine Gesundheit, sondern auch für deinen Geldbeutel. Mit der geplanten Fahrradstrecke von <1>{{distance}}</1> verbrennst du <3>{{calories}}</3> Kalorien, entlastest die Umwelt um <5>{{co2}}</5> CO2 und sparst zudem <7>€ {{money}}</7> an Sprit!",
          new: "neue Berechnung",
          processing: "Nur noch kurz den Sattel stellen!",
          error: "Oh nein! Da ist etwas schief gelaufen."
        }
      }
    }
  });


export default i18n;