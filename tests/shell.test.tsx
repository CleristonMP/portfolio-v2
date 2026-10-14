import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../src/App';
import { translations } from '../src/i18n/translations';
import { LANGUAGE_STORAGE_KEY } from '../src/i18n/language';
import { installMedia } from './media';

describe.each(['pt', 'en'] as const)('accessible shell %s', (language) => {
  function mount() {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    const media = installMedia(true);
    render(<App />);
    return { media, user: userEvent.setup(), text: translations[language] };
  }

  it('starts with skip link and focuses main when activated', async () => {
    const { user, text } = mount();
    await user.tab();
    expect(
      screen.getByRole('link', { name: text.accessibility.skipToContent }),
    ).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('main')).toHaveFocus();
  });

  it.each(['{Enter}', ' '])(
    'opens with %s, exposes controls, traverses links and returns focus on Escape',
    async (key) => {
      const { user, text } = mount();
      const toggle = screen.getByRole('button', {
        name: text.accessibility.openMenu,
      });
      toggle.focus();
      await user.keyboard(key);
      const nav = screen.getByRole('navigation', {
        name: text.accessibility.navigation,
      });
      expect(toggle).toHaveAccessibleName(text.accessibility.closeMenu);
      expect(toggle).toHaveAttribute('aria-expanded', 'true');
      expect(toggle).toHaveAttribute('aria-controls', nav.id);
      const links = within(nav).getAllByRole('link');
      expect(links[0]).toHaveFocus();
      await user.tab();
      expect(links[1]).toHaveFocus();
      await user.tab({ shift: true });
      expect(links[0]).toHaveFocus();
      await user.keyboard('{Escape}');
      expect(toggle).toHaveFocus();
      expect(toggle).toHaveAccessibleName(text.accessibility.openMenu);
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
    },
  );

  it.each(['projects', 'skills', 'about', 'learning', 'contact'])(
    'closes and focuses #%s after native link activation',
    async (id) => {
      const { user, text } = mount();
      const toggle = screen.getByRole('button', {
        name: text.accessibility.openMenu,
      });
      await user.click(toggle);
      const nav = screen.getByRole('navigation', {
        name: text.accessibility.navigation,
      });
      const link = within(nav)
        .getAllByRole('link')
        .find((link) => link.getAttribute('href') === '#' + id)!;
      link.focus();
      await user.keyboard('{Enter}');
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
      expect(document.getElementById(id)).toHaveFocus();
      expect(link).toHaveAttribute('href', '#' + id);
    },
  );

  it('closes an open menu on skip and leaves focus outside header after Escape', async () => {
    const { user, text } = mount();
    const toggle = screen.getByRole('button', {
      name: text.accessibility.openMenu,
    });
    await user.click(toggle);
    const skip = screen.getByRole('link', {
      name: text.accessibility.skipToContent,
    });
    skip.focus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('main')).toHaveFocus();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    screen.getByRole('main').focus();
    await user.keyboard('{Escape}');
    expect(screen.getByRole('main')).toHaveFocus();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('recovers focus when the browser blurs navigation before the media event', async () => {
    const { user, text, media } = mount();
    const toggle = screen.getByRole('button', {
      name: text.accessibility.openMenu,
    });
    await user.click(toggle);
    act(() => media.change(false));
    const firstLink = within(
      screen.getByRole('navigation', { name: text.accessibility.navigation }),
    ).getAllByRole('link')[0];
    firstLink.blur();
    expect(document.body).toHaveFocus();
    act(() => media.change(true));
    expect(toggle).toHaveFocus();
  });

  it('handles breakpoint changes with nav, toggle and desktop contact focused', async () => {
    const { user, text, media } = mount();
    const toggle = screen.getByRole('button', {
      name: text.accessibility.openMenu,
    });
    await user.click(toggle);
    const nav = screen.getByRole('navigation', {
      name: text.accessibility.navigation,
    });
    const firstLink = within(nav).getAllByRole('link')[0];
    act(() => media.change(false));
    expect(firstLink).toHaveFocus();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    act(() => media.change(true));
    expect(toggle).toHaveFocus();
    act(() => media.change(false));
    expect(firstLink).toHaveFocus();
    const contact = screen
      .getAllByRole('link', { name: text.navigation[4] })
      .find((link) => !nav.contains(link))!;
    contact.focus();
    act(() => media.change(true));
    expect(toggle).toHaveFocus();
  });
});
