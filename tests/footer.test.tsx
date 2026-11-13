import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Footer } from '../src/components/layout/Footer';
import { profile } from '../src/content/profile';
import { translations } from '../src/i18n/translations';

it('omits the download when no public resume is provided', () => {
  const original = profile.resume;
  Object.defineProperty(profile, 'resume', {
    configurable: true,
    value: undefined,
  });
  try {
    render(<Footer language="pt" text={translations.pt} />);
    expect(
      screen.queryByRole('link', { name: translations.pt.downloadResume }),
    ).not.toBeInTheDocument();
  } finally {
    Object.defineProperty(profile, 'resume', {
      configurable: true,
      value: original,
    });
  }
});

describe.each(['pt', 'en'] as const)('footer %s', (language) => {
  it('shows the professional brand, runtime year and localized navigation', async () => {
    vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2032);
    const user = userEvent.setup();
    const text = translations[language];
    render(<Footer language={language} text={text} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent('CLERISTON_PEREIRA');
    expect(footer).toHaveTextContent(`© 2032 · ${text.footer}`);
    const nav = within(footer).getByRole('navigation', {
      name: text.accessibility.footerNavigation,
    });
    const links = within(nav).getAllByRole('link');
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '#projects',
      '#contact',
      'https://github.com/CleristonMP',
      profile.resume![language].src,
      '#home',
    ]);
    expect(links.map((link) => link.textContent)).toEqual([
      text.navigation[0],
      text.navigation[4],
      text.contactForm.profileLink,
      text.downloadResume,
      text.backToTop,
    ]);
    expect(links[2]).toHaveAttribute('rel', 'noopener noreferrer');
    expect(links[3]).toHaveAttribute('download');
    expect(links[3]).toHaveAttribute(
      'hreflang',
      profile.resume![language].language,
    );
    expect(links[3]).toHaveAttribute('type', 'application/pdf');
    for (const link of links) {
      await user.tab();
      expect(link).toHaveFocus();
    }
    // Native hash/history and rendered layout are checked in the browser smoke.
  });
});

it.each(['missing', 'pending', 'unsafe'] as const)(
  'omits %s public URL without fabricating a destination',
  (kind) => {
    const original = profile.contacts;
    Object.defineProperty(profile, 'contacts', {
      configurable: true,
      value: [
        {
          id: 'github',
          kind: 'github',
          label: 'GitHub',
          link:
            kind === 'missing'
              ? undefined
              : {
                  verification: kind === 'pending' ? 'pending' : 'confirmed',
                  url:
                    kind === 'unsafe'
                      ? 'javascript:alert(1)'
                      : 'https://example.com',
                },
        },
        { id: 'email', kind: 'email', label: 'Email' },
        { id: 'linkedin', kind: 'linkedin', label: 'LinkedIn' },
        { id: 'resume', kind: 'resume', label: 'Curriculum vitae' },
      ],
    });
    try {
      render(<Footer language="pt" text={translations.pt} />);
      expect(
        screen.getAllByRole('link').map((link) => link.getAttribute('href')),
      ).toEqual(['#projects', '#contact', profile.resume!.pt.src, '#home']);
      expect(
        screen.queryByRole('link', {
          name: translations.pt.contactForm.profileLink,
        }),
      ).not.toBeInTheDocument();
    } finally {
      Object.defineProperty(profile, 'contacts', {
        configurable: true,
        value: original,
      });
    }
  },
);
