import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

import { EN, KO } from '@/i18n/langs';

export const resources = {
  en: EN,
  ko: KO,
};

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  resources,
});
