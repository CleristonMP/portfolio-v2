import { useLayoutEffect, useRef } from 'react';
import type { ReactNode, RefObject } from 'react';
import { createPortal } from 'react-dom';

interface ModalDialogProps {
  readonly children: ReactNode;
  readonly className: string;
  readonly titleId: string;
  readonly descriptionId: string;
  readonly initialFocus: RefObject<HTMLButtonElement | null>;
  readonly returnFocus?: RefObject<HTMLButtonElement | null>;
  readonly onClose: () => void;
}

export function ModalDialog({
  children,
  className,
  titleId,
  descriptionId,
  initialFocus,
  returnFocus,
  onClose,
}: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current!;
    let restore: (() => void) | undefined;

    function openWhenAvailable() {
      // An accepted request can finish while a gallery is open. Wait instead
      // of stacking dialogs and making focus restoration ambiguous.
      if (restore || document.querySelector('dialog[open]')) return;
      const trigger = returnFocus?.current ?? document.activeElement;
      const { scrollX, scrollY } = window;
      const { overflow, paddingRight } = document.body.style;
      const scrollbar =
        window.innerWidth - document.documentElement.clientWidth;
      if (scrollbar > 0) {
        document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbar}px`;
      }
      document.body.style.overflow = 'hidden';
      // The native top layer makes the background inert.
      dialog.showModal();
      initialFocus.current?.focus({ preventScroll: true });
      restore = () => {
        dialog.close();
        document.body.style.overflow = overflow;
        document.body.style.paddingRight = paddingRight;
        if (trigger instanceof HTMLElement && trigger.isConnected) {
          trigger.focus({ preventScroll: true });
        }
        window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
        // A queued confirmation may open after the visitor moved to a gallery.
        // Return to the form visibly rather than focusing an offscreen button.
        if (
          returnFocus &&
          trigger instanceof HTMLElement &&
          trigger.isConnected
        ) {
          const bounds = trigger.getBoundingClientRect();
          if (bounds.top < 0 || bounds.bottom > window.innerHeight) {
            trigger.scrollIntoView({ block: 'center', behavior: 'instant' });
          }
        }
      };
    }

    const observer = new MutationObserver(openWhenAvailable);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['open'],
    });
    openWhenAvailable();
    return () => {
      observer.disconnect();
      restore?.();
    };
  }, [initialFocus, returnFocus]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className={className}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return;
        const controls = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(
            'button:not(:disabled), video[controls], [tabindex="0"]',
          ),
        ).filter((control) => control.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
    >
      {children}
    </dialog>,
    document.body,
  );
}
