export const motion = {
  section: 280,
  open: 180,
  close: 140,
  media: 160,
  easing: 'cubic-bezier(0.2, 0, 0, 1)',
} as const;

export function reducedMotionPreference(): MediaQueryList | undefined {
  try {
    return window.matchMedia?.('(prefers-reduced-motion: reduce)');
  } catch {
    return undefined;
  }
}

export function animateSafely(
  element: HTMLElement,
  frames: Keyframe[],
  duration: number,
): Animation | undefined {
  // Motion is optional. Missing preference/animation APIs leave static content.
  const preference = reducedMotionPreference();
  if (preference?.matches !== false) return undefined;
  try {
    const animation = element.animate(frames, {
      duration,
      easing: motion.easing,
    });
    const reduce = () => {
      if (preference.matches) animation.cancel();
    };
    preference.addEventListener('change', reduce);
    // Cancellation rejects finished; remove listeners in either outcome.
    const cleanup = () => preference.removeEventListener('change', reduce);
    void animation.finished.then(cleanup, cleanup);
    return animation;
  } catch {
    return undefined;
  }
}
