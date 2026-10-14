import { useEffect, useState } from 'react';
import type { Language } from '../content/contracts';
import { translations } from './translations';
import {
  persistLanguage,
  readLanguagePreference,
  syncDocumentLanguage,
} from './language';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() =>
    readLanguagePreference(),
  );
  useEffect(() => {
    syncDocumentLanguage(language);
    persistLanguage(language);
  }, [language]);
  function toggleLanguage() {
    setLanguage((current) => (current === 'pt' ? 'en' : 'pt'));
  }
  return { language, text: translations[language], toggleLanguage };
}
