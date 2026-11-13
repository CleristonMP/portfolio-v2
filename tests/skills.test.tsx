import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SkillsSection } from '../src/sections/SkillsSection';
import { translations } from '../src/i18n/translations';

const skillIds = [
  'java-spring',
  'react-typescript',
  'android-mobile',
  'javascript-node',
  'sql-data',
  'software-architecture',
] as const;

describe.each(['pt', 'en'] as const)('informational skills %s', (language) => {
  it('exposes six ordered labels as a list without decorative icon names or actionable cards', () => {
    render(<SkillsSection language={language} text={translations[language]} />);
    const list = screen.getByRole('list', {
      name: new RegExp(translations[language].skills),
    });
    expect(list).toHaveAttribute(
      'aria-labelledby',
      screen.getByRole('heading', { level: 2 }).id,
    );
    const items = within(list).getAllByRole('listitem');
    expect(items.map((item) => item.textContent)).toEqual(
      skillIds.map((id) => translations[language].skillLabels[id]),
    );
    expect(within(list).queryByRole('img')).not.toBeInTheDocument();
    expect(within(list).queryByRole('button')).not.toBeInTheDocument();
    expect(within(list).queryByRole('link')).not.toBeInTheDocument();
    for (const item of items) {
      expect(item).not.toHaveAttribute('tabindex');
      expect(item.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
      expect(item.querySelector('svg')).toHaveAttribute('focusable', 'false');
    }
  });
});
