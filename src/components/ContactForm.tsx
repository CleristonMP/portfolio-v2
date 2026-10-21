import { useState } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';
import type { Translation } from '../content/contracts';

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

export function ContactForm({ text }: { readonly text: Translation }) {
  const [fields, setFields] = useState<Record<FieldName, FieldState>>({
    name: emptyField,
    email: emptyField,
    message: emptyField,
  });

  function updateField(
    name: FieldName,
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    visited: boolean,
  ) {
    const { value, validity } = event.currentTarget;
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

  return (
    <form
      className="contact-form"
      aria-label={text.conversationLabel}
      aria-describedby="contact-unavailable"
      noValidate
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="contact-notice" id="contact-unavailable">
        <p className="small-label">{text.conversationLabel}</p>
        <p>{text.contactNotice}</p>
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
      {/* No transport exists in M3. Guard implicit submissions as well as clicks. */}
      <button type="submit" disabled aria-describedby="contact-unavailable">
        {text.contactStatus}
      </button>
    </form>
  );
}
