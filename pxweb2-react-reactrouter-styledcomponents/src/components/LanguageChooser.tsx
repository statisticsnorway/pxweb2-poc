import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import supportedLanguages from '../locales/languages.json';

type LanguageName = {
  nativeName: string;
};

type SupportedLanguages = {
  [key: string]: LanguageName;
};

function LanguageChooser() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const supportedLanguagesFromJson: SupportedLanguages = supportedLanguages;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newLanguage = event.target.value as string;

    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  if (!i18n.options.supportedLngs || i18n.options.supportedLngs.length < 2) {
    return null;
  }

  return (
    <form>
      <p>{t('changeLanguage')}</p>
      <select value={language} onChange={handleChange}>
        {i18n.options.supportedLngs &&
          i18n.options.supportedLngs.map((lngCode: string) => {
            if (lngCode === 'cimode') {
              return null;
            }

            const languageNativeName: string =
              supportedLanguagesFromJson[lngCode].nativeName;

            return (
              <LanguageChooserItem value={lngCode}>
                {languageNativeName}
              </LanguageChooserItem>
            );
          })}
      </select>
    </form>
  );
}

type LanguageChooserItemProps = {
  value: string;
  children: string;
};

function LanguageChooserItem(props: LanguageChooserItemProps) {
  return <option value={props.value}>{props.children}</option>;
}

export default LanguageChooser;
