import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ContactSection } from '../src/sections/ContactSection';
import { translations } from '../src/i18n/translations';

describe.each(['pt', 'en'] as const)('contact interface %s', (language) => {
  it('announces unavailability before three labeled fields and blocks submission', async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);
    const user = userEvent.setup();
    const text = translations[language];
    render(<ContactSection language={language} text={text} />);
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
