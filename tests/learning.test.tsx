import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LearningSection } from '../src/sections/LearningSection';
import { translations } from '../src/i18n/translations';

const formations = [
  ['Formação Desenvolvedor Moderno', 'DevSuperior'],
  ['Bootcamp React', 'DevSuperior'],
  ['Bootcamp Spring', 'DevSuperior'],
  ['Desenvolvimento com React Native', 'Udemy'],
];

describe.each(['pt', 'en'] as const)('learning %s', (language) => {
  it('presents the four formations in order as informational content', () => {
    render(
      <LearningSection language={language} text={translations[language]} />,
    );
    const list = screen.getByRole('list', {
      name: translations[language].learning,
    });
    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(formations.length);
    for (const [index, item] of items.entries()) {
      const [title, institution] = formations[index];
      expect(
        within(item).getByRole('heading', { level: 3, name: title }),
      ).toBeVisible();
      expect(
        within(item).getByText(institution, { exact: true }),
      ).toBeVisible();
      expect(item).not.toHaveAttribute('tabindex');
      expect(item.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
      expect(item.querySelector('svg')).toHaveAttribute('focusable', 'false');
    }
    expect(within(list).queryByRole('link')).not.toBeInTheDocument();
    expect(within(list).queryByRole('button')).not.toBeInTheDocument();
    expect(within(list).queryByRole('img')).not.toBeInTheDocument();
  });
});
