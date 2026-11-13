import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ProjectsSection } from '../src/sections/ProjectsSection';
import { translations } from '../src/i18n/translations';

describe.each(['pt', 'en'] as const)(
  'approved project presentation %s',
  (language) => {
    it('keeps the three priorities before the case and secondary educational project, without images or external links', async () => {
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
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
      const link = screen.getByRole('link', {
        name: translations[language].private,
      });
      expect(screen.getAllByRole('link')).toHaveLength(1);
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
            ? 'O case apresenta o contexto funcional da solução. Código-fonte, identificação da empresa, dados de clientes e documentos não são disponibilizados.'
            : 'This case presents the solution’s functional context. Source code, company identity, client data and documents are not disclosed.',
        ),
      ).toBeVisible();
      const user = userEvent.setup();
      await user.tab();
      expect(link).toHaveFocus();
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
