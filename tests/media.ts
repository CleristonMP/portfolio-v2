import { vi } from 'vitest';

// Simulates the shell's breakpoint events, not a layout engine or CSS visibility.
export function installMedia(mobileInitially = false) {
  const listeners = new Set<EventListenerOrEventListenerObject>();
  let mobile = mobileInitially;
  const media = {
    get matches() {
      return mobile;
    },
    media: '(max-width: 700px)',
    onchange: null,
    addEventListener: (
      _type: string,
      listener: EventListenerOrEventListenerObject,
    ) => listeners.add(listener),
    removeEventListener: (
      _type: string,
      listener: EventListenerOrEventListenerObject,
    ) => listeners.delete(listener),
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => true,
  } satisfies MediaQueryList;
  vi.stubGlobal('matchMedia', () => media);
  return {
    change(next: boolean) {
      if (mobile === next) return;
      mobile = next;
      const event = new Event('change');
      Object.defineProperty(event, 'matches', { value: mobile });
      for (const listener of listeners) {
        if (typeof listener === 'function') listener(event);
        else listener.handleEvent(event);
      }
    },
  };
}
