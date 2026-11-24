import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { ProjectsSection } from '../src/sections/ProjectsSection';
import { LearningSection } from '../src/sections/LearningSection';
import { projectGalleries } from '../src/content/galleries';
import { translations } from '../src/i18n/translations';

const originalShowModal = Object.getOwnPropertyDescriptor(
  HTMLDialogElement.prototype,
  'showModal',
);
const originalClose = Object.getOwnPropertyDescriptor(
  HTMLDialogElement.prototype,
  'close',
);
afterAll(() => {
  for (const [method, descriptor] of [
    ['showModal', originalShowModal],
    ['close', originalClose],
  ] as const) {
    if (descriptor)
      Object.defineProperty(HTMLDialogElement.prototype, method, descriptor);
    else Reflect.deleteProperty(HTMLDialogElement.prototype, method);
  }
});
beforeEach(() => {
  // jsdom has no native modal top layer, inert background, layout or media player.
  Object.defineProperty(HTMLDialogElement.prototype, 'showModal', {
    configurable: true,
    value: function (this: HTMLDialogElement) {
      this.setAttribute('open', '');
    },
  });
  Object.defineProperty(HTMLDialogElement.prototype, 'close', {
    configurable: true,
    value: function (this: HTMLDialogElement) {
      this.removeAttribute('open');
    },
  });
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(() => {});
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

describe.each(['pt', 'en'] as const)('gallery %s', (language) => {
  const text = translations[language];
  const controls = text.gallery;

  it('opens each project with its approved media and restores focus on close', async () => {
    render(<ProjectsSection language={language} text={text} />);
    const user = userEvent.setup();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.querySelector('video')).toBeNull();
    for (const collection of Object.values(projectGalleries)) {
      const trigger = screen.getByRole('button', {
        name: `${controls.explore} — ${collection.title}`,
      });
      await user.click(trigger);
      const dialog = screen.getByRole('dialog', { name: collection.title });
      expect(dialog).toHaveAccessibleDescription(
        collection.description[language],
      );
      expect(
        within(dialog).getByRole('button', { name: controls.close }),
      ).toHaveFocus();
      expect(document.body.style.overflow).toBe('hidden');
      const first = collection.items[0];
      expect(within(dialog).getByText(first.caption[language])).toBeVisible();
      expect(
        within(dialog).getByRole('button', { name: controls.previous }),
      ).toBeDisabled();
      await user.click(
        within(dialog).getByRole('button', { name: controls.close }),
      );
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(trigger).toHaveFocus();
      expect(document.body.style.overflow).toBe('');
    }
  });

  it('navigates without wrapping, announces position and offers reversible enlargement', async () => {
    render(<ProjectsSection language={language} text={text} />);
    const user = userEvent.setup();
    await user.click(
      screen.getByRole('button', {
        name: `${controls.explore} — Reports Registry`,
      }),
    );
    const dialog = screen.getByRole('dialog');
    await user.click(
      within(dialog).getByRole('button', { name: controls.next }),
    );
    expect(within(dialog).getByRole('status')).toHaveTextContent(
      controls.position.replace('{current}', '2').replace('{total}', '3'),
    );
    expect(
      within(dialog).getByText(
        projectGalleries['reports-registry'].items[1].caption[language],
      ),
    ).toBeVisible();
    await user.click(
      within(dialog).getByRole('button', { name: controls.zoom }),
    );
    const reset = within(dialog).getByRole('button', {
      name: controls.resetZoom,
    });
    expect(reset).toHaveAttribute('aria-pressed', 'true');
    expect(within(dialog).getByText(controls.zoomHelp)).toBeVisible();
    await user.click(reset);
    await user.click(
      within(dialog).getByRole('button', { name: controls.next }),
    );
    expect(
      within(dialog).getByRole('button', { name: controls.next }),
    ).toBeDisabled();
    const thumbnails = within(dialog).getByRole('group', {
      name: controls.thumbnails,
    });
    const first = within(thumbnails).getAllByRole('button')[0];
    await user.click(first);
    expect(first).toHaveAttribute('aria-pressed', 'true');
    expect(
      within(dialog).getByRole('button', { name: controls.previous }),
    ).toBeDisabled();
    fireEvent(dialog, new Event('cancel', { cancelable: true }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('wraps keyboard focus at both ends of the viewer controls', async () => {
    // Simulate visible controls only; native top-layer isolation is checked in the browser.
    vi.spyOn(Element.prototype, 'getClientRects').mockReturnValue([
      new DOMRect(0, 0, 44, 44),
    ] as unknown as DOMRectList);
    render(<ProjectsSection language={language} text={text} />);
    const user = userEvent.setup();
    await user.click(
      screen.getByRole('button', {
        name: `${controls.explore} — Reports Registry`,
      }),
    );
    const dialog = screen.getByRole('dialog');
    const close = within(dialog).getByRole('button', { name: controls.close });
    await user.keyboard('{Shift>}{Tab}{/Shift}');
    const thumbnails = within(dialog).getByRole('group', {
      name: controls.thumbnails,
    });
    expect(within(thumbnails).getAllByRole('button').at(-1)).toHaveFocus();
    await user.tab();
    expect(close).toHaveFocus();
  });

  it('opens the existing case at its import image and recovers from a media error', async () => {
    render(<ProjectsSection language={language} text={text} />);
    const user = userEvent.setup();
    const trigger = screen.getByRole('button', {
      name: new RegExp(`^${controls.explore}:`),
    });
    await user.click(trigger);
    const dialog = screen.getByRole('dialog', { name: 'Reports Registry' });
    expect(within(dialog).getByRole('status')).toHaveTextContent(
      controls.position.replace('{current}', '3').replace('{total}', '3'),
    );
    const image = within(dialog)
      .getAllByRole('img')
      .find((entry) => entry.getAttribute('alt'))!;
    fireEvent.error(image);
    expect(within(dialog).getByRole('alert')).toHaveTextContent(controls.error);
    await user.click(
      within(dialog).getByRole('button', { name: controls.previous }),
    );
    expect(within(dialog).queryByRole('alert')).not.toBeInTheDocument();
    fireEvent(dialog, new Event('cancel', { cancelable: true }));
    expect(trigger).toHaveFocus();
  });

  it('loads video only when selected and stops it when changing media or closing', async () => {
    const { container } = render(
      <ProjectsSection language={language} text={text} />,
    );
    const user = userEvent.setup();
    await user.click(
      screen.getByRole('button', {
        name: `${controls.explore} — Audience-Counter`,
      }),
    );
    expect(document.querySelector('video')).toBeNull();
    const collection = projectGalleries['audience-counter'];
    const videoItem = collection.items[3];
    const videoButton = screen.getByRole('button', {
      name: controls.choose
        .replace('{number}', '4')
        .replace('{caption}', videoItem.caption[language]),
    });
    await user.click(videoButton);
    const video = document.querySelector('video')!;
    expect(video).toHaveAttribute('preload', 'none');
    expect(video).toHaveAttribute('controls');
    expect(video).not.toHaveAttribute('autoplay');
    expect(video).toHaveAccessibleName(videoItem.caption[language]);
    expect(container.querySelector('video')).toBeNull(); // Portal is outside the page content.
    await user.click(screen.getByRole('button', { name: controls.previous }));
    expect(video.pause).toHaveBeenCalled();
    expect(video.getAttribute('src')).toBeNull();
    await user.click(videoButton);
    const nextVideo = document.querySelector('video')!;
    fireEvent.error(nextVideo);
    expect(screen.getByRole('alert')).toHaveTextContent(controls.error);
    await user.click(screen.getByRole('button', { name: controls.close }));
    expect(nextVideo.pause).toHaveBeenCalled();
    expect(document.querySelector('video')).toBeNull();
  });

  it('enlarges a certificate without exposing a new credential URL', async () => {
    render(<LearningSection language={language} text={text} />);
    const user = userEvent.setup();
    const trigger = screen.getAllByRole('button', {
      name: new RegExp(`^${controls.viewImage}:`),
    })[0];
    await user.click(trigger);
    const dialog = screen.getByRole('dialog', {
      name: 'Formação Desenvolvedor Moderno',
    });
    expect(within(dialog).queryByRole('link')).not.toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', { name: controls.next }),
    ).toBeDisabled();
    expect(
      within(dialog).getByRole('button', { name: controls.previous }),
    ).toBeDisabled();
    await user.click(
      within(dialog).getByRole('button', { name: controls.close }),
    );
    expect(trigger).toHaveFocus();
  });
});
