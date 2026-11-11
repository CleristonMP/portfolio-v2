import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import type { Translation } from '../content/contracts';
import {
  getContactEndpoint,
  submitContact,
} from '../content/contactSubmission';
import type { SubmissionResult } from '../content/contactSubmission';

const fieldNames = ['name', 'email', 'message'] as const;
type FieldName = (typeof fieldNames)[number];
interface FieldState {
  readonly value: string;
  readonly visited: boolean;
  readonly typeMismatch: boolean;
}
const emptyField: FieldState = {
  value: '',
  visited: false,
  typeMismatch: false,
};

function getFieldError(
  field: FieldState,
  requiredMessage: string,
  invalidEmailMessage: string,
): string | undefined {
  if (!field.visited) return undefined;
  if (!field.value.trim()) return requiredMessage;
  if (field.typeMismatch) return invalidEmailMessage;
  return undefined;
}

const emptyFields = {
  name: emptyField,
  email: emptyField,
  message: emptyField,
};

export function ContactForm({ text }: { readonly text: Translation }) {
  const [fields, setFields] =
    useState<Record<FieldName, FieldState>>(emptyFields);
  const [status, setStatus] = useState<'idle' | 'sending' | SubmissionResult>(
    'idle',
  );
  const [invalidControl, setInvalidControl] = useState<HTMLElement | null>(
    null,
  );
  const inFlight = useRef(false);
  const endpoint = getContactEndpoint(import.meta.env?.VITE_FORMSPREE_ENDPOINT);
  const sending = status === 'sending';
  const { submission } = text.contactForm;
  const { privacy } = submission;

  useEffect(() => {
    if (invalidControl) {
      invalidControl.focus();
      setInvalidControl(null);
    }
  }, [invalidControl]);

  function updateField(
    name: FieldName,
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    visited: boolean,
  ) {
    const { value, validity } = event.currentTarget;
    if (event.type === 'change' && status === 'accepted') setStatus('idle');
    const typeMismatch = validity.typeMismatch;
    setFields((previous) => ({
      ...previous,
      [name]: {
        value,
        visited: previous[name].visited || visited,
        typeMismatch,
      },
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint || inFlight.current) return;

    const controls = event.currentTarget.elements;
    const readField = (name: FieldName): FieldState => {
      const control = controls.namedItem(name) as
        HTMLInputElement | HTMLTextAreaElement;
      return {
        value: control.value.trim(),
        visited: true,
        typeMismatch: control.validity.typeMismatch,
      };
    };
    const validated = {
      name: readField('name'),
      email: readField('email'),
      message: readField('message'),
    };
    const invalid = fieldNames.find((name) =>
      getFieldError(
        validated[name],
        text.contactForm.required[name],
        text.contactForm.invalidEmail,
      ),
    );
    if (invalid) {
      setFields(validated);
      setStatus('idle');
      setInvalidControl(controls.namedItem(invalid) as HTMLElement);
      return;
    }

    inFlight.current = true;
    setStatus('sending');
    try {
      const result = await submitContact(endpoint, {
        name: validated.name.value,
        email: validated.email.value,
        message: validated.message.value,
      });
      if (result === 'accepted') setFields(emptyFields);
      setStatus(result);
    } catch {
      setStatus('network');
    } finally {
      inFlight.current = false;
    }
  }

  return (
    <form
      className="contact-form"
      aria-label={text.conversationLabel}
      aria-describedby="contact-notice"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="contact-notice" id="contact-notice">
        <p className="small-label">{text.conversationLabel}</p>
        <p>
          {endpoint ? (
            <>
              {privacy.beforeLink}{' '}
              <a href="https://formspree.io/legal/privacy-policy/">
                {privacy.link}
              </a>
              .
            </>
          ) : (
            text.contactNotice
          )}
        </p>
      </div>
      {fieldNames.map((name) => {
        const field = fields[name];
        const error = getFieldError(
          field,
          text.contactForm.required[name],
          text.contactForm.invalidEmail,
        );
        const id = `contact-${name}`;
        const sharedProps = {
          id,
          name,
          required: true,
          readOnly: sending,
          value: field.value,
          'aria-invalid': error ? true : undefined,
          'aria-describedby': error ? `${id}-error` : undefined,
          onChange: (
            event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => updateField(name, event, false),
          onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            updateField(name, event, true),
        };
        return (
          <div className="contact-field" key={name}>
            <label htmlFor={id}>{text.contactForm.labels[name]}</label>
            {name === 'message' ? (
              <textarea {...sharedProps} rows={4} />
            ) : (
              <input
                {...sharedProps}
                type={name === 'email' ? 'email' : 'text'}
                autoComplete={name}
              />
            )}
            {error && (
              <p id={`${id}-error`} className="contact-error" role="alert">
                {error}
              </p>
            )}
          </div>
        );
      })}
      <button
        type="submit"
        disabled={!endpoint}
        aria-disabled={sending || undefined}
        aria-describedby={endpoint ? undefined : 'contact-notice'}
      >
        {endpoint ? submission.send : text.contactStatus}
      </button>
      {endpoint && (
        <p
          role="status"
          aria-atomic="true"
          className="contact-submission-status"
        >
          {status === 'idle' ? '' : submission[status]}
        </p>
      )}
    </form>
  );
}
