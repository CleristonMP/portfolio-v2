import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AboutSection } from '../src/sections/AboutSection';
import { translations } from '../src/i18n/translations';

describe.each(['pt', 'en'] as const)('approved profile %s', (language) => {
  it('presents the self-taught trajectory, method and part-time restriction only for remote work', () => {
    const { container } = render(
      <AboutSection language={language} text={translations[language]} />,
    );
    const section = container.querySelector('#about');
    expect(section).toHaveAttribute('tabindex', '-1');
    expect(screen.getByText(translations[language].aboutText)).toBeVisible();
    expect(screen.getByText(translations[language].methodText)).toBeVisible();
    expect(
      screen.getByText(
        language === 'pt'
          ? 'Disponível para freelance; trabalho remoto somente em meio período.'
          : 'Available for freelance projects; remote work on a part-time basis only.',
        { exact: true },
      ),
    ).toBeVisible();
    expect(
      within(section as HTMLElement).queryByRole('img'),
    ).not.toBeInTheDocument();
  });
});
