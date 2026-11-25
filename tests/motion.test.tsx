import { useRef, useState } from 'react';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterAll, afterEach, beforeEach, expect, it, vi } from 'vitest';
import { ModalDialog } from '../src/components/ModalDialog';
import { ProjectsSection } from '../src/sections/ProjectsSection';
import { ContactSection } from '../src/sections/ContactSection';
import { useSectionEntrances } from '../src/motion/useSectionEntrances';
import { approvedContactEndpoint } from '../src/content/contactSubmission';
import { translations } from '../src/i18n/translations';

const originalMethods = ['showModal', 'close'].map((name) =>
  Object.getOwnPropertyDescriptor(HTMLDialogElement.prototype, name),
);
const originalAnimate = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'animate',
);
const preference = new EventTarget() as MediaQueryList;
let reduced = false;
Object.defineProperty(preference, 'matches', { get: () => reduced });
interface PendingAnimation {
  element: HTMLElement;
  finish: () => void;
  cancel: ReturnType<typeof vi.fn>;
}
let animations: PendingAnimation[];
let intersect: IntersectionObserverCallback;
let observed: Element[];
let unobserve: ReturnType<typeof vi.fn>;

beforeEach(() => {
  reduced = false;
  animations = [];
  observed = [];
  unobserve = vi.fn();
  vi.stubGlobal('matchMedia', () => preference);
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback: IntersectionObserverCallback) {
        intersect = callback;
      }
      observe(element: Element) {
        observed.push(element);
      }
      unobserve = unobserve;
      disconnect = vi.fn();
    },
  );
  Object.defineProperty(HTMLElement.prototype, 'animate', {
    configurable: true,
    value: function (this: HTMLElement) {
      let finish!: () => void;
      let reject!: () => void;
      const finished = new Promise<void>((resolve, fail) => {
        finish = resolve;
        reject = fail;
      });
      const cancel = vi.fn(reject);
      animations.push({ element: this, finish, cancel });
      return { finished, cancel };
    },
  });
  for (const name of ['showModal', 'close']) {
    Object.defineProperty(HTMLDialogElement.prototype, name, {
      configurable: true,
      value: function (this: HTMLDialogElement) {
        if (name === 'showModal') this.setAttribute('open', '');
        else this.removeAttribute('open');
      },
    });
  }
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(() => {});
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllEnvs();
});
afterAll(() => {
  ['showModal', 'close'].forEach((name, index) => {
    const descriptor = originalMethods[index];
    if (descriptor)
      Object.defineProperty(HTMLDialogElement.prototype, name, descriptor);
    else Reflect.deleteProperty(HTMLDialogElement.prototype, name);
  });
  if (originalAnimate)
    Object.defineProperty(HTMLElement.prototype, 'animate', originalAnimate);
  else Reflect.deleteProperty(HTMLElement.prototype, 'animate');
});

function Sections() {
  const ref = useSectionEntrances();
  return (
    <main ref={ref}>
      <section id="home">
        <h1>Immediate hero</h1>
      </section>
      <section id="projects">
        <div className="container">Projects stay available</div>
      </section>
      <section id="skills">
        <div className="container">Skills stay available</div>
      </section>
    </main>
  );
}
function enter(element: Element) {
  act(() =>
    intersect(
      [{ target: element, isIntersecting: true } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    ),
  );
}
function DialogExample() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      {open && (
        <ModalDialog
          className="test-dialog"
          titleId="title"
          descriptionId="description"
          initialFocus={ref}
          onClose={() => setOpen(false)}
        >
          <h2 id="title">Confirmation</h2>
          <p id="description">Accepted by the service</p>
          <button ref={ref} data-dialog-close>
            Close
          </button>
        </ModalDialog>
      )}
    </>
  );
}

it('enters each section once, excluding the hero, without hiding default content', () => {
  render(<Sections />);
  expect(screen.getByRole('heading', { name: 'Immediate hero' })).toBeVisible();
  expect(observed.map((x) => x.id)).toEqual(['projects', 'skills']);
  enter(observed[0]);
  enter(observed[0]);
  enter(observed[1]);
  expect(animations).toHaveLength(2);
  expect(unobserve).toHaveBeenCalledTimes(2);
  expect(screen.getByText('Projects stay available')).toBeVisible();
});
it.each(['absent', 'initialization throws', 'animation throws'])(
  'keeps content available when motion is %s',
  (failure) => {
    if (failure === 'absent') vi.stubGlobal('IntersectionObserver', undefined);
    if (failure === 'initialization throws')
      vi.stubGlobal(
        'IntersectionObserver',
        class {
          constructor() {
            throw Error('Unavailable');
          }
        },
      );
    if (failure === 'animation throws')
      vi.spyOn(HTMLElement.prototype, 'animate').mockImplementation(() => {
        throw Error('Unavailable');
      });
    render(<Sections />);
    if (failure === 'animation throws') enter(observed[0]);
    expect(screen.getByText('Projects stay available')).toBeVisible();
    expect(screen.getByRole('heading')).toBeVisible();
  },
);
it('keeps focus and scrolling locked throughout closing, including repeated immediate close requests', async () => {
  render(<DialogExample />);
  const trigger = screen.getByRole('button', { name: 'Open' });
  trigger.focus();
  fireEvent.click(trigger);
  const dialog = screen.getByRole('dialog');
  const close = within(dialog).getByRole('button');
  expect(close).toHaveFocus();
  expect(fireEvent.keyDown(close, { key: 'Escape' })).toBe(false);
  expect(fireEvent.keyDown(close, { key: 'Escape', repeat: true })).toBe(false);
  fireEvent(dialog, new Event('cancel', { cancelable: true }));
  expect(animations).toHaveLength(2); // opening interrupted; one closing
  expect(dialog).toBeInTheDocument();
  expect(close).toHaveFocus();
  expect(document.body.style.overflow).toBe('hidden');
  await act(() => animations.at(-1)!.finish());
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
  expect(document.body.style.overflow).toBe('');
  fireEvent.click(trigger);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
it('unlocks after a stalled animation and cancels timers on unmount', async () => {
  vi.useFakeTimers();
  const view = render(<DialogExample />);
  fireEvent.click(screen.getByRole('button', { name: 'Open' }));
  fireEvent.click(screen.getByRole('button', { name: 'Close' }));
  act(() => vi.advanceTimersByTime(1000));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe('');
  fireEvent.click(screen.getByRole('button', { name: 'Open' }));
  fireEvent.click(screen.getByRole('button', { name: 'Close' }));
  view.unmount();
  // Flush jsdom focus tasks; a leaked closing fallback would still be pending.
  await act(() => vi.advanceTimersByTimeAsync(0));
  expect(vi.getTimerCount()).toBe(0);
  expect(document.body.style.overflow).toBe('');
});
it('eliminates motion with an active preference and closes immediately', () => {
  reduced = true;
  render(
    <>
      <Sections />
      <DialogExample />
    </>,
  );
  enter(observed[0]);
  fireEvent.click(screen.getByRole('button', { name: 'Open' }));
  fireEvent.click(screen.getByRole('button', { name: 'Close' }));
  expect(animations).toHaveLength(0);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
it('responds to reduced-motion changes during entrance and closing', async () => {
  render(
    <>
      <Sections />
      <DialogExample />
    </>,
  );
  enter(observed[0]);
  fireEvent.click(screen.getByRole('button', { name: 'Open' }));
  fireEvent.click(screen.getByRole('button', { name: 'Close' }));
  await act(() => {
    reduced = true;
    preference.dispatchEvent(new Event('change'));
  });
  expect(animations.every((x) => x.cancel.mock.calls.length)).toBe(true);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe('');
});
it('pauses video at the start of closing, before the modal is removed', async () => {
  render(<ProjectsSection language="en" text={translations.en} />);
  fireEvent.click(
    screen.getByRole('button', { name: 'Explore project — Audience-Counter' }),
  );
  fireEvent.click(screen.getByRole('button', { name: /^Show media 4:/ }));
  const video = document.querySelector('video')!;
  fireEvent.click(screen.getByRole('button', { name: 'Close viewer' }));
  expect(video.pause).toHaveBeenCalled();
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  await act(() => animations.at(-1)!.finish());
  expect(document.querySelector('video')).toBeNull();
});
it('queues accepted contact until the gallery exit finishes, retaining one open modal', async () => {
  vi.stubEnv('VITE_FORMSPREE_ENDPOINT', approvedContactEndpoint);
  let accept!: (response: Response) => void;
  vi.stubGlobal(
    'fetch',
    vi.fn(
      () =>
        new Promise<Response>((resolve) => {
          accept = resolve;
        }),
    ),
  );
  render(
    <>
      <ProjectsSection language="en" text={translations.en} />
      <ContactSection language="en" text={translations.en} />
    </>,
  );
  for (const [name, value] of [
    ['Name', 'Visitor'],
    ['Email', 'visitor@example.com'],
    ['Message', 'Simulation only'],
  ]) {
    fireEvent.change(screen.getByRole('textbox', { name }), {
      target: { value },
    });
  }
  fireEvent.submit(screen.getByRole('form'));
  fireEvent.click(
    screen.getByRole('button', { name: 'Explore project — Reports Registry' }),
  );
  await act(() => accept(Response.json({ ok: true })));
  fireEvent.click(screen.getByRole('button', { name: 'Close viewer' }));
  expect(screen.getAllByRole('dialog')).toHaveLength(1);
  expect(screen.getByRole('dialog')).toHaveAccessibleName('Reports Registry');
  await act(() => animations.at(-1)!.finish());
  expect(screen.getAllByRole('dialog')).toHaveLength(1);
  expect(screen.getByRole('dialog')).toHaveAccessibleName(
    translations.en.contactForm.submission.confirmationTitle,
  );
});
