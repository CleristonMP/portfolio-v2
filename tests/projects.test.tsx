import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ProjectsSection } from '../src/sections/ProjectsSection';
import { translations } from '../src/i18n/translations';
import { media } from '../src/content/media';

describe.each(['pt', 'en'] as const)(
  'approved project presentation %s',
  (language) => {
    it('keeps editorial order and private-code boundaries with accepted local images', async () => {
      const { container } = render(
        <ProjectsSection language={language} text={translations[language]} />,
      );
      expect(
        screen
          .getAllByRole('heading', { level: 3 })
          .map((heading) => heading.textContent),
      ).toEqual([
        'Reports Registry',
        'Audience-Counter',
        'Web Matrículas',
        'Reports Registry',
        'DS Commerce',
      ]);
      const cards = screen.getAllByRole('article');
      expect(
        within(cards[4]).getByText(
          language === 'pt' ? 'Projeto educacional' : 'Educational project',
        ),
      ).toBeVisible();
      expect(
        within(cards[2]).getByText(
          language === 'pt'
            ? 'Sistema independente • não implantado'
            : 'Independent project • not deployed',
        ),
      ).toBeVisible();
      expect(screen.getAllByRole('img')).toHaveLength(5);
      for (const [index, image] of [
        media.reportsCover,
        media.audienceCover,
        media.enrollmentCover,
        media.reportsImport,
        media.commerceCover,
      ].entries()) {
        const rendered = within(cards[index]).getByRole('img', {
          name: image.alt[language],
        });
        expect(rendered).toHaveAttribute('src', image.src);
        expect(rendered).toHaveAttribute('width', String(image.width));
        expect(rendered).toHaveAttribute('height', String(image.height));
        expect(rendered).toHaveAttribute('loading', 'lazy');
      }
      expect(within(cards[1]).getByText(/Gemini/)).toBeVisible();
      expect(
        within(cards[2]).getByText(
          language === 'pt'
            ? /não entrou em operação na escola/
            : /was not put into operation at the school/,
        ),
      ).toBeVisible();
      expect(
        within(cards[4]).getByText(
          language === 'pt'
            ? /sem adaptações próprias/
            : /without my own adaptations/,
        ),
      ).toBeVisible();
      expect(
        within(cards[4]).getByText(
          language === 'pt'
            ? /Integração de pagamentos não implementada/
            : /Payment integration was not implemented/,
        ),
      ).toBeVisible();
      const link = screen.getByRole('link', {
        name: translations[language].private,
      });
      expect(screen.getAllByRole('link')).toHaveLength(6);
      for (const [name, href] of [
        [
          'GitHub — Audience-Counter',
          'https://github.com/CleristonMP/audience-counter',
        ],
        [
          'Google Play — Audience-Counter',
          'https://play.google.com/store/apps/details?id=com.cmp.audiencecounter',
        ],
        [
          'GitHub — Web Matrículas',
          'https://github.com/CleristonMP/web-matriculas-api',
        ],
        ['Backend — DS Commerce', 'https://github.com/CleristonMP/dscommerce'],
        [
          'Frontend — DS Commerce',
          'https://github.com/CleristonMP/dscommerce-frontend',
        ],
      ]) {
        expect(screen.getByRole('link', { name })).toHaveAttribute(
          'href',
          href,
        );
      }
      const originalImageName = `${translations[language].gallery.explore}: ${media.reportsImport.alt[language]}`;
      expect(within(cards[3]).queryByRole('link')).not.toBeInTheDocument();
      expect(
        within(cards[3]).getByRole('button', { name: originalImageName }),
      ).not.toHaveAttribute('href');
      expect(link).toHaveAttribute('href', '#reports-registry-case');
      const destination = container.querySelector('#reports-registry-case');
      expect(destination).toHaveAttribute('tabindex', '-1');
      expect(destination).toHaveAccessibleName('Reports Registry');
      expect(
        within(cards[3]).getByText(
          language === 'pt'
            ? 'Projeto comercial · Código privado'
            : 'Commercial project · Private source code',
        ),
      ).toBeVisible();
      expect(
        within(cards[3]).getByText(
          language === 'pt'
            ? 'Projeto comercial com código privado. Código-fonte, trechos de código, identificação da empresa, dados de clientes e documentos não são disponibilizados.'
            : 'Commercial project with private source code. Source code, code excerpts, company identity, client data and documents are not disclosed.',
        ),
      ).toBeVisible();
      const user = userEvent.setup();
      for (const name of [
        `${translations[language].gallery.explore} — Reports Registry`,
        translations[language].private,
        `${translations[language].gallery.explore} — Audience-Counter`,
        'GitHub — Audience-Counter',
        'Google Play — Audience-Counter',
        `${translations[language].gallery.explore} — Web Matrículas`,
        'GitHub — Web Matrículas',
        originalImageName,
        `${translations[language].gallery.explore} — DS Commerce`,
        'Backend — DS Commerce',
        'Frontend — DS Commerce',
      ]) {
        await user.tab();
        const control =
          screen.queryByRole('link', { name }) ??
          screen.getByRole('button', { name });
        expect(control).toHaveFocus();
      }
      expect(
        new Set(
          Array.from(container.querySelectorAll('[id]')).map(
            (element) => element.id,
          ),
        ).size,
      ).toBe(container.querySelectorAll('[id]').length);
    });
  },
);
