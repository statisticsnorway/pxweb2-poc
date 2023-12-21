import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

// TODO: see if we can use this function instead of the i18next-resources-to-backend package
// function resourcesToBackend(
//   language: string,
//   namespace: string,
//   callback: (error: Error | null, resources: string[] | null) => void
// ): void {
//   import(`./locales/${language}/${namespace}.json`)
//     .then(({ default: resources }) => {
//       callback(null, resources);
//     })
//     .catch((error) => {
//       callback(error, null);
//     });
// }

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (lng: string, ns: string) => import(`./locales/${lng}/${ns}.json`)
    )
  )
  .init({
    debug: true,
    lng: 'no',
    fallbackLng: 'en',
    ns: ['common', 'statistics'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
