import type { Language } from '../content/contracts';
import { translations } from './translations';

export const LANGUAGE_STORAGE_KEY = 'portfolio-v2.language';
type LanguageStorage = Pick<Storage, 'getItem' | 'setItem'>;
type StorageProvider = () => LanguageStorage;
const browserStorage: StorageProvider = () => window.localStorage;

export function isLanguage(value: unknown): value is Language {
  return value === 'pt' || value === 'en';
}
export function readLanguagePreference(
  getStorage: StorageProvider = browserStorage,
): Language {
  try {
    const stored = getStorage().getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(stored) ? stored : 'pt';
  } catch {
    // Storage may be unavailable, blocked, or absent during server-side checks.
    return 'pt';
  }
}
export function persistLanguage(
  language: Language,
  getStorage: StorageProvider = browserStorage,
): void {
  if (!isLanguage(language)) return;
  try {
    getStorage().setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Persistence is optional; the current in-memory selection remains usable.
  }
}
export function syncDocumentLanguage(
  language: Language,
  targetDocument: Pick<
    Document,
    'documentElement' | 'title' | 'querySelector'
  > = document,
): void {
  targetDocument.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  targetDocument.title = translations[language].metadata.title;
  targetDocument
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', translations[language].metadata.description);
}
