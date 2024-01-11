import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const DEFAULT_LANGUAGE = 'en';
const DEFAULT_NAMESPACE = 'translationsNS';
const SUPPORTED_LANGUAGES = ['en', 'no'];

export function i18nForTests(translationsNS = {}) {
  i18n.use(initReactI18next).init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    ns: [DEFAULT_NAMESPACE],
    defaultNS: DEFAULT_NAMESPACE,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: { [DEFAULT_LANGUAGE]: { [DEFAULT_NAMESPACE]: translationsNS } },
  });
}

/** 
 * Add i18n resources for tests.
 * Examples:
 * 
 * Adding to current language and namespace:
 * addI18nResourcesForTests({
 *    welcome: { apptitle: 'Welcome to PxWeb' },
    });

    Adding to new language and current namespace:
    addI18nResourcesForTests({
      welcome: { apptitle: 'Velkommen til PxWeb' },
    }, {language: 'no'});

    Adding to new language and new namespace:
    addI18nResourcesForTests({
      welcome: { apptitle: 'Velkommen til PxWeb' },
    }, { ns: 'translationsNS2', language: 'no'});
*/
export function addI18nResourcesForTests(
  resource = {},
  { ns = DEFAULT_NAMESPACE, language = DEFAULT_LANGUAGE } = {}
) {

  //console.log('addI18nResourcesForTests: ', resources, ns, language);
  console.log(" ");
  console.log(i18n.options.resources);
  
  i18n.addResourceBundle(language, ns, resource, true, true);
}
