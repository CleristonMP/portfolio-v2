import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { OptionalLink, Project } from '../src/content/contracts';
import { getProjectUrl, getVerifiedUrl } from '../src/content/links';
import { projects } from '../src/content/projects';
import { translations } from '../src/i18n/translations';
import { ContactSection } from '../src/sections/ContactSection';
import { profile } from '../src/content/profile';

describe('editorial link boundaries', () => {
  it.each(['backendRepository', 'frontendRepository'] as const)(
    'protects %s with the same private/optional boundary as repository',
    (kind) => {
      const fixture: Project = {
        ...projects[3],
        links: {
          [kind]: {
            verification: 'confirmed',
            url: 'https://example.com/code',
          },
        },
      };
      expect(getProjectUrl(fixture, kind)).toBe('https://example.com/code');
      for (const codeVisibility of ['private', 'unknown'] as const) {
        expect(
          getProjectUrl({ ...fixture, codeVisibility }, kind),
        ).toBeUndefined();
      }
      for (const link of [
        undefined,
        { verification: 'pending' as const, url: 'https://example.com/code' },
        { verification: 'confirmed' as const, url: 'javascript:alert(1)' },
      ]) {
        expect(
          getProjectUrl({ ...fixture, links: { [kind]: link } }, kind),
        ).toBeUndefined();
      }
    },
  );
  it.each([
    undefined,
    { verification: 'pending', url: 'https://example.com' },
    { verification: 'confirmed' },
    ...[
      'javascript:alert(1)',
      'http://example.com',
      'https://user:password@example.com',
      'https://example.com/ bad',
      '#',
    ].map((url) => ({ verification: 'confirmed' as const, url })),
  ] satisfies (OptionalLink | undefined)[])(
    'omits unsafe or unconfirmed contact %#',
    (link) => {
      expect(getVerifiedUrl(link)).toBeUndefined();
    },
  );

  it.each(
    [
      [],
      [{ id: 'email', kind: 'email', label: 'Email' }],
      [{ id: 'github', kind: 'github', label: 'GitHub' }],
      [
        {
          id: 'github',
          kind: 'github',
          label: 'GitHub',
          link: { verification: 'confirmed' },
        },
      ],
      [
        {
          id: 'github',
          kind: 'github',
          label: 'GitHub',
          link: { verification: 'confirmed', url: 'javascript:alert(1)' },
        },
      ],
      [
        {
          id: 'github',
          kind: 'github',
          label: 'GitHub',
          link: { verification: 'pending', url: 'https://example.com' },
        },
      ],
    ].map((contacts) => [contacts]),
  )(
    'renders incomplete contact fixture %# without fabricated links',
    (contacts) => {
      const original = profile.contacts;
      Object.defineProperty(profile, 'contacts', {
        configurable: true,
        value: contacts,
      });
      try {
        render(<ContactSection language="pt" text={translations.pt} />);
        expect(screen.queryByRole('link')).not.toBeInTheDocument();
        expect(
          screen.getByText(translations.pt.contactStatus),
        ).toBeInTheDocument();
      } finally {
        Object.defineProperty(profile, 'contacts', {
          configurable: true,
          value: original,
        });
      }
    },
  );

  it('allows verified HTTPS links only with compatible visibility and nature', () => {
    const fixture: Project = {
      ...projects[0],
      codeVisibility: 'private',
      links: {
        repository: {
          verification: 'confirmed',
          url: 'https://example.com/code',
        },
        store: { verification: 'confirmed', url: 'https://example.com/store' },
        caseStudy: {
          verification: 'confirmed',
          url: 'https://example.com/case',
        },
      },
    };
    expect(getProjectUrl(fixture, 'repository')).toBeUndefined();
    expect(
      getProjectUrl({ ...fixture, codeVisibility: 'unknown' }, 'repository'),
    ).toBeUndefined();
    expect(
      getProjectUrl({ ...fixture, codeVisibility: 'public' }, 'repository'),
    ).toBe('https://example.com/code');
    expect(getProjectUrl(fixture, 'store')).toBeUndefined();
    expect(getProjectUrl({ ...fixture, nature: 'own-product' }, 'store')).toBe(
      'https://example.com/store',
    );
    expect(getProjectUrl(fixture, 'caseStudy')).toBe(
      'https://example.com/case',
    );
    expect(getProjectUrl(fixture, 'demo')).toBeUndefined();
  });
});
