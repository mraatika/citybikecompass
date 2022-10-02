import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as fi from './locales/fi.json';

i18next.use(initReactI18next).init({
  fallbackLng: 'fi',
  debug: true,
  resources: { fi: fi as Record<string, string> },
});
