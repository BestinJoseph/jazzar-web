import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import Backend from 'i18next-http-backend'
import HttpApi from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector'

const options = {
  interpolation: {
    escapeValue: false
  },
  compatibilityJSON: 'v4',
  debug: true,

  lng: 'en',

  supportedLngs: ["en", "ar"],

  fallbackLng: 'en',

  ns: ['homeContent', 'projects'],

  defaultNS: 'homeContent',

  react: {
    useSuspense: false,
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
},
}

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options)

export default i18n