import 'react-i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof import('../locales/en/common.json');
      statistics: typeof import('../locales/en/statistics.json');
    };
  }
}
