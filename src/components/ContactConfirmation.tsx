import { useId, useRef } from 'react';
import type { RefObject } from 'react';
import type { Translation } from '../content/contracts';
import { ModalDialog } from './ModalDialog';

export function ContactConfirmation({
  text,
  returnFocus,
  onClose,
}: {
  readonly text: Translation['contactForm']['submission'];
  readonly returnFocus: RefObject<HTMLButtonElement | null>;
  readonly onClose: () => void;
}) {
  const titleId = useId();
  const descriptionId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  return (
    <ModalDialog
      className="contact-confirmation"
      titleId={titleId}
      descriptionId={descriptionId}
      initialFocus={closeRef}
      returnFocus={returnFocus}
      onClose={onClose}
    >
      <h2 id={titleId}>{text.confirmationTitle}</h2>
      <p id={descriptionId}>{text.accepted}</p>
      <button ref={closeRef} type="button" onClick={onClose}>
        {text.closeConfirmation}
      </button>
    </ModalDialog>
  );
}
