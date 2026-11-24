import { act, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  afterAll,
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { ContactSection } from '../src/sections/ContactSection';
import { translations } from '../src/i18n/translations';
import { ProjectsSection } from '../src/sections/ProjectsSection';
import { approvedContactEndpoint } from '../src/content/contactSubmission';

const fetchMock = vi.fn<typeof fetch>();

const dialogMethods = ['showModal', 'close'] as const;
const dialogDescriptors = dialogMethods.map((name) =>
  Object.getOwnPropertyDescriptor(HTMLDialogElement.prototype, name),
);
afterAll(() => {
  dialogMethods.forEach((name, index) => {
    const descriptor = dialogDescriptors[index];
    if (descriptor)
      Object.defineProperty(HTMLDialogElement.prototype, name, descriptor);
    else Reflect.deleteProperty(HTMLDialogElement.prototype, name);
  });
});

beforeEach(() => {
  // jsdom does not implement native modality, inertness or layout.
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
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  vi.stubEnv('VITE_FORMSPREE_ENDPOINT', '');
  fetchMock.mockReset();
  vi.stubGlobal('fetch', fetchMock);
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllEnvs();
});

describe.each(['pt', 'en'] as const)('contact interface %s', (language) => {
  it.each(['available', 'unavailable'])(
    'offers a keyboard-accessible LinkedIn alternative when sending is %s',
    async (availability) => {
      vi.stubEnv(
        'VITE_FORMSPREE_ENDPOINT',
        availability === 'available' ? approvedContactEndpoint : '',
      );
      const text = translations[language];
      render(<ContactSection language={language} text={text} />);
      const user = userEvent.setup();
      await user.tab();
      expect(
        screen.getByRole('link', { name: text.contactForm.profileLink }),
      ).toHaveFocus();
      await user.tab();
      const link = screen.getByRole('link', {
        name: text.contactForm.linkedInLink,
      });
      expect(link).toHaveFocus();
      expect(link).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/cleriston-pereira-a60a471bb',
      );
      expect(link).toHaveAccessibleDescription(text.contactForm.linkedInLogin);
      expect(
        screen.getByRole('button', {
          name:
            availability === 'available'
              ? text.contactForm.submission.send
              : text.contactStatus,
        }),
      ).toHaveProperty('disabled', availability === 'unavailable');
      expect(fetchMock).not.toHaveBeenCalled();
    },
  );
  it('announces unavailability before three labeled fields and blocks submission', async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);
    const user = userEvent.setup();
    const text = translations[language];
    render(<ContactSection language={language} text={text} />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: text.contact,
      }),
    ).toHaveTextContent(text.contact);
    expect(screen.getByText(text.contactLead, { exact: true })).toBeVisible();
    const form = screen.getByRole('form', { name: text.conversationLabel });
    expect(form).toHaveAccessibleDescription(new RegExp(text.contactNotice));
    expect(within(form).getAllByRole('textbox')).toHaveLength(3);
    expect(
      screen
        .getByText(text.contactNotice)
        .compareDocumentPosition(
          screen.getByRole('textbox', { name: text.contactForm.labels.name }),
        ) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    const button = within(form).getByRole('button', {
      name: text.contactStatus,
    });
    expect(button).toBeDisabled();
    const name = screen.getByRole('textbox', {
      name: text.contactForm.labels.name,
    });
    await user.type(name, 'Visitor');
    await user.type(
      screen.getByRole('textbox', { name: text.contactForm.labels.email }),
      'visitor@example.com',
    );
    await user.type(
      screen.getByRole('textbox', { name: text.contactForm.labels.message }),
      'A project question.',
    );
    await user.click(button);
    await user.click(name);
    await user.keyboard('{Enter}');
    const submit = new Event('submit', { bubbles: true, cancelable: true });
    fireEvent(form, submit);
    expect(submit.defaultPrevented).toBe(true);
    expect(form).not.toHaveAttribute('action');
    expect(form).not.toHaveAttribute('method');
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
    expect(within(form).queryByRole('status')).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: text.contactForm.profileLink }),
    ).toHaveAttribute('href', 'https://github.com/CleristonMP');
    expect(document.querySelector('a[href^="mailto:"]')).toBeNull();
  });

  it('validates on blur, associates localized errors and corrects them without sending', async () => {
    const user = userEvent.setup();
    const text = translations[language];
    render(<ContactSection language={language} text={text} />);
    const name = screen.getByRole('textbox', {
      name: text.contactForm.labels.name,
    });
    const email = screen.getByRole('textbox', {
      name: text.contactForm.labels.email,
    });
    const message = screen.getByRole('textbox', {
      name: text.contactForm.labels.message,
    });
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    await user.click(name);
    await user.type(name, '   ');
    await user.tab();
    expect(email).toHaveFocus();
    expect(name).toHaveAttribute('aria-invalid', 'true');
    expect(name).toHaveAccessibleDescription(text.contactForm.required.name);
    await user.tab();
    expect(message).toHaveFocus();
    expect(email).toHaveAccessibleDescription(text.contactForm.required.email);
    await user.tab();
    expect(message).toHaveAccessibleDescription(
      text.contactForm.required.message,
    );
    await user.type(email, 'invalid');
    await user.tab();
    expect(email).toHaveAccessibleDescription(text.contactForm.invalidEmail);
    await user.clear(email);
    await user.type(email, 'visitor@example.com');
    expect(email).not.toHaveAttribute('aria-invalid');
    expect(email).not.toHaveAttribute('aria-describedby');
    await user.clear(name);
    await user.type(name, 'Visitor');
    await user.type(message, 'Project question');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: text.contactStatus }),
    ).toBeDisabled();
  });
});

it('keeps values while localizing visible errors after a language change', async () => {
  const user = userEvent.setup();
  const view = render(<ContactSection language="pt" text={translations.pt} />);
  await user.type(screen.getByRole('textbox', { name: 'Nome' }), 'Visitor');
  await user.type(screen.getByRole('textbox', { name: 'Email' }), 'invalid');
  await user.tab();
  view.rerender(<ContactSection language="en" text={translations.en} />);
  expect(screen.getByRole('textbox', { name: 'Name' })).toHaveValue('Visitor');
  expect(
    screen.getByRole('textbox', { name: 'Email' }),
  ).toHaveAccessibleDescription(translations.en.contactForm.invalidEmail);
  expect(screen.getByRole('textbox', { name: 'Email' })).toHaveValue('invalid');
});

describe.each(['pt', 'en'] as const)('active contact %s', (language) => {
  const text = translations[language];
  const { labels, submission } = text.contactForm;

  function renderActive() {
    vi.stubEnv('VITE_FORMSPREE_ENDPOINT', approvedContactEndpoint);
    render(<ContactSection language={language} text={text} />);
    return {
      form: screen.getByRole('form', { name: text.conversationLabel }),
      name: screen.getByRole('textbox', { name: labels.name }),
      email: screen.getByRole('textbox', { name: labels.email }),
      message: screen.getByRole('textbox', { name: labels.message }),
      button: screen.getByRole('button', { name: submission.send }),
      status: screen.getByRole('status'),
    };
  }

  function fill(controls: ReturnType<typeof renderActive>) {
    fireEvent.change(controls.name, { target: { value: 'Visitor' } });
    fireEvent.change(controls.email, {
      target: { value: 'visitor@example.com' },
    });
    fireEvent.change(controls.message, {
      target: { value: 'Project question.' },
    });
  }

  it('shows the approved notice and focuses the first invalid control without sending', async () => {
    const controls = renderActive();
    const privacy = screen.getByRole('link', { name: submission.privacy.link });
    expect(privacy).toHaveAttribute(
      'href',
      'https://formspree.io/legal/privacy-policy/',
    );
    expect(controls.form).toHaveAccessibleDescription(
      text.conversationLabel +
        ' ' +
        submission.privacy.beforeLink +
        ' ' +
        submission.privacy.link +
        ' .',
    );
    expect(privacy.parentElement?.textContent).toBe(
      submission.privacy.beforeLink + ' ' + submission.privacy.link + '.',
    );
    const user = userEvent.setup();
    await user.tab();
    await user.tab();
    await user.tab();
    expect(privacy).toHaveFocus();
    await user.tab();
    expect(controls.name).toHaveFocus();
    await user.click(controls.button);
    expect(controls.name).toHaveFocus();
    expect(controls.name).toHaveAccessibleDescription(
      text.contactForm.required.name,
    );
    fill(controls);
    fireEvent.change(controls.email, { target: { value: 'invalid' } });
    await user.click(controls.button);
    expect(controls.email).toHaveFocus();
    expect(controls.email).toHaveAccessibleDescription(
      text.contactForm.invalidEmail,
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it.each(['button', 'name'] as const)(
    'announces progress and accepts keyboard submission from %s without spurious validation errors',
    async (source) => {
      const controls = renderActive();
      fill(controls);
      let resolveResponse!: (response: Response) => void;
      fetchMock.mockReturnValueOnce(
        new Promise((resolve) => {
          resolveResponse = resolve;
        }),
      );
      controls[source].focus();
      await userEvent.setup().keyboard('{Enter}');
      fireEvent.submit(controls.form);
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        approvedContactEndpoint,
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({
            name: 'Visitor',
            email: 'visitor@example.com',
            message: 'Project question.',
          }),
        }),
      );
      expect(controls.status).toHaveTextContent(submission.sending);
      expect(controls.button).toHaveAttribute('aria-disabled', 'true');
      expect(controls[source]).toHaveFocus();
      expect(controls.message).toHaveAttribute('readonly');
      expect(controls.button).toHaveTextContent(submission.sending);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      await act(() => resolveResponse(Response.json({ ok: true })));
      expect(controls.status).toHaveTextContent(submission.accepted);
      expect(controls.message).toHaveValue('');
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      const dialog = screen.getByRole('dialog', {
        name: submission.confirmationTitle,
      });
      expect(dialog).toHaveAccessibleDescription(submission.accepted);
      expect(
        within(dialog).getByRole('button', {
          name: submission.closeConfirmation,
        }),
      ).toHaveFocus();
      expect(document.body.style.overflow).toBe('hidden');
      await userEvent.setup().click(
        within(dialog).getByRole('button', {
          name: submission.closeConfirmation,
        }),
      );
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(controls.button).toHaveFocus();
      expect(document.body.style.overflow).toBe('');
    },
  );

  it.each([
    'rejected',
    'network',
    'timeout',
    'timeout without AbortSignal.timeout',
    'limited',
  ] as const)(
    'reports %s, retains values and requires explicit retry',
    async (failure) => {
      const controls = renderActive();
      fill(controls);
      const isTimeout =
        failure === 'timeout' ||
        failure === 'timeout without AbortSignal.timeout';
      if (isTimeout) {
        vi.useFakeTimers();
        if (failure !== 'timeout') {
          vi.stubGlobal('AbortSignal', { timeout: undefined });
        }
        fetchMock.mockImplementationOnce((_endpoint, options) => {
          const signal = options?.signal;
          return new Promise((_resolve, reject) => {
            signal?.addEventListener('abort', () => reject(signal.reason), {
              once: true,
            });
          });
        });
      } else if (failure === 'network') {
        fetchMock.mockRejectedValueOnce(new TypeError('Network failure'));
      } else if (failure === 'limited') {
        fetchMock.mockResolvedValueOnce(new Response(null, { status: 429 }));
      } else {
        fetchMock.mockResolvedValueOnce(Response.json({ ok: false }));
      }
      await act(async () => fireEvent.submit(controls.form));
      if (isTimeout) {
        await act(() => vi.advanceTimersByTimeAsync(9_999));
        expect(controls.status).toHaveTextContent(submission.sending);
        await act(() => vi.advanceTimersByTimeAsync(1));
        expect(vi.getTimerCount()).toBe(0);
      }
      expect(controls.status).toHaveTextContent(
        submission[isTimeout ? 'timeout' : failure],
      );
      expect(controls.button).not.toHaveAttribute('aria-disabled');
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(controls.name).toHaveValue('Visitor');
      expect(controls.email).toHaveValue('visitor@example.com');
      expect(controls.message).toHaveValue('Project question.');
      expect(fetchMock).toHaveBeenCalledTimes(1);
      fetchMock.mockResolvedValueOnce(Response.json({ ok: true }));
      await act(async () => fireEvent.submit(controls.form));
      expect(fetchMock).toHaveBeenCalledTimes(2);
      expect(controls.status).toHaveTextContent(submission.accepted);
      if (isTimeout) {
        // Flush jsdom focus tasks from opening the confirmation, not transport timers.
        await act(() => vi.advanceTimersByTimeAsync(0));
        expect(vi.getTimerCount()).toBe(0);
      }
    },
  );
});

it.each(['http://formspree.io/f/mqpqkean', 'https://formspree.io/f/other'])(
  'blocks a configured but unapproved destination',
  (endpoint) => {
    vi.stubEnv('VITE_FORMSPREE_ENDPOINT', endpoint);
    const text = translations.en;
    render(<ContactSection language="en" text={text} />);
    fireEvent.submit(
      screen.getByRole('form', { name: text.conversationLabel }),
    );
    expect(
      screen.getByRole('button', { name: text.contactStatus }),
    ).toBeDisabled();
    expect(fetchMock).not.toHaveBeenCalled();
  },
);

it('localizes an open confirmation without reopening, contains keyboard focus and restores the submit button after Escape', async () => {
  vi.stubEnv('VITE_FORMSPREE_ENDPOINT', approvedContactEndpoint);
  fetchMock.mockResolvedValueOnce(Response.json({ ok: true }));
  const user = userEvent.setup();
  const view = render(<ContactSection language="pt" text={translations.pt} />);
  await user.type(screen.getByRole('textbox', { name: 'Nome' }), 'Visitor');
  await user.type(
    screen.getByRole('textbox', { name: 'Email' }),
    'visitor@example.com',
  );
  await user.type(
    screen.getByRole('textbox', { name: 'Mensagem' }),
    'Simulated inquiry',
  );
  const submit = screen.getByRole('button', {
    name: translations.pt.contactForm.submission.send,
  });
  await user.click(submit);
  const dialog = screen.getByRole('dialog');
  const close = within(dialog).getByRole('button');
  vi.spyOn(close, 'getClientRects').mockReturnValue([
    {},
  ] as unknown as DOMRectList);
  await user.tab();
  expect(close).toHaveFocus();
  await user.tab({ shift: true });
  expect(close).toHaveFocus();
  view.rerender(<ContactSection language="en" text={translations.en} />);
  expect(screen.getByRole('dialog')).toBe(dialog);
  expect(dialog).toHaveAccessibleName(
    translations.en.contactForm.submission.confirmationTitle,
  );
  expect(close).toHaveFocus();
  const cancel = new Event('cancel', { cancelable: true });
  fireEvent(dialog, cancel);
  expect(cancel.defaultPrevented).toBe(true);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(submit).toHaveFocus();
  view.rerender(<ContactSection language="pt" text={translations.pt} />);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(fetchMock).toHaveBeenCalledTimes(1);
});

it('waits for an open gallery before showing acceptance, without stacking dialogs', async () => {
  vi.stubEnv('VITE_FORMSPREE_ENDPOINT', approvedContactEndpoint);
  let accept!: (response: Response) => void;
  fetchMock.mockReturnValueOnce(
    new Promise((resolve) => {
      accept = resolve;
    }),
  );
  const text = translations.en;
  render(
    <>
      <ProjectsSection language="en" text={text} />
      <ContactSection language="en" text={text} />
    </>,
  );
  const user = userEvent.setup();
  await user.type(screen.getByRole('textbox', { name: 'Name' }), 'Visitor');
  await user.type(
    screen.getByRole('textbox', { name: 'Email' }),
    'visitor@example.com',
  );
  await user.type(
    screen.getByRole('textbox', { name: 'Message' }),
    'Simulated inquiry',
  );
  const submit = screen.getByRole('button', {
    name: text.contactForm.submission.send,
  });
  await user.click(submit);
  const trigger = screen.getByRole('button', {
    name: `${text.gallery.explore} — Reports Registry`,
  });
  await user.click(trigger);
  await act(() => accept(Response.json({ ok: true })));
  expect(screen.getAllByRole('dialog')).toHaveLength(1);
  expect(screen.getByRole('dialog')).toHaveAccessibleName('Reports Registry');
  await user.click(screen.getByRole('button', { name: text.gallery.close }));
  const confirmation = await screen.findByRole('dialog', {
    name: text.contactForm.submission.confirmationTitle,
  });
  expect(screen.getAllByRole('dialog')).toHaveLength(1);
  vi.spyOn(submit, 'getBoundingClientRect').mockReturnValue({
    top: -100,
    bottom: -56,
  } as DOMRect);
  submit.scrollIntoView = vi.fn();
  await user.click(within(confirmation).getByRole('button'));
  expect(submit.scrollIntoView).toHaveBeenCalledWith({
    block: 'center',
    behavior: 'instant',
  });
  expect(submit).toHaveFocus();
  expect(document.body.style.overflow).toBe('');
});
