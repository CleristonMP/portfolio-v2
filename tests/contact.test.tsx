import { act, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ContactSection } from '../src/sections/ContactSection';
import { translations } from '../src/i18n/translations';
import { approvedContactEndpoint } from '../src/content/contactSubmission';

const fetchMock = vi.fn<typeof fetch>();

beforeEach(() => {
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

  it('announces progress, blocks concurrent submits and clears fields only on acceptance', async () => {
    const controls = renderActive();
    fill(controls);
    let resolveResponse!: (response: Response) => void;
    fetchMock.mockReturnValueOnce(
      new Promise((resolve) => {
        resolveResponse = resolve;
      }),
    );
    controls.button.focus();
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
    expect(controls.button).toHaveFocus();
    expect(controls.message).toHaveAttribute('readonly');
    await act(() => resolveResponse(Response.json({ ok: true })));
    expect(controls.status).toHaveTextContent(submission.accepted);
    expect(controls.message).toHaveValue('');
    expect(controls.button).toHaveFocus();
  });

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
      expect(controls.name).toHaveValue('Visitor');
      expect(controls.email).toHaveValue('visitor@example.com');
      expect(controls.message).toHaveValue('Project question.');
      expect(fetchMock).toHaveBeenCalledTimes(1);
      fetchMock.mockResolvedValueOnce(Response.json({ ok: true }));
      await act(async () => fireEvent.submit(controls.form));
      expect(fetchMock).toHaveBeenCalledTimes(2);
      expect(controls.status).toHaveTextContent(submission.accepted);
      if (isTimeout) expect(vi.getTimerCount()).toBe(0);
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
