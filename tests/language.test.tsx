import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import App from '../src/App';
import { translations } from '../src/i18n/translations';
import { LANGUAGE_STORAGE_KEY } from '../src/i18n/language';
import { installMedia } from './media';

function expectLanguage(language: 'pt' | 'en') {
  const text = translations[language];
  expect(document.documentElement.lang).toBe(
    language === 'pt' ? 'pt-BR' : 'en',
  );
  expect(document.title).toBe(text.metadata.title);
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
    'content',
    text.metadata.description,
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    text.heroIntro,
  );
  expect(
    screen.getByRole('button', { name: text.accessibility.changeLanguage }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: text.accessibility.skipToContent }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('img', {
      name: text.projectImageAlt.replace('{project}', 'Reports Registry'),
    }),
  ).toBeInTheDocument();
}

describe('language selection in the real application', () => {
  it('switches PT → EN → PT, persists, and restores EN on remount', async () => {
    installMedia();
    const user = userEvent.setup();
    const view = render(<App />);
    expectLanguage('pt');
    await user.click(
      screen.getByRole('button', { name: 'Mudar idioma para inglês' }),
    );
    expectLanguage('en');
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en');
    view.unmount();
    render(<App />);
    expectLanguage('en');
    await user.click(
      screen.getByRole('button', { name: 'Switch language to Portuguese' }),
    );
    expectLanguage('pt');
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('pt');
  });

  it.each([null, 'fr', 'pt-BR', '', 'EN'])(
    'defaults safely for preference %s',
    (preference) => {
      installMedia();
      if (preference !== null)
        localStorage.setItem(LANGUAGE_STORAGE_KEY, preference);
      render(<App />);
      expectLanguage('pt');
      expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('pt');
    },
  );

  it.each(['pt', 'en'] as const)(
    'initializes metadata from valid %s preference',
    (language) => {
      installMedia();
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      render(<App />);
      expectLanguage(language);
    },
  );

  it.each(['getter', 'read', 'write'])(
    'keeps rendering and switching after storage %s failure',
    async (failure) => {
      installMedia();
      const blocked = () => {
        throw new DOMException('Blocked', 'SecurityError');
      };
      if (failure === 'getter')
        vi.spyOn(window, 'localStorage', 'get').mockImplementation(blocked);
      else
        vi.spyOn(
          Storage.prototype,
          failure === 'read' ? 'getItem' : 'setItem',
        ).mockImplementation(blocked);
      const user = userEvent.setup();
      render(<App />);
      expectLanguage('pt');
      await user.click(
        screen.getByRole('button', { name: 'Mudar idioma para inglês' }),
      );
      expectLanguage('en');
      await user.click(
        screen.getByRole('button', { name: 'Switch language to Portuguese' }),
      );
      expectLanguage('pt');
    },
  );
});
