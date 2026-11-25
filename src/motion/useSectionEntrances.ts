import { useEffect, useRef } from 'react';
import { animateSafely, motion, reducedMotionPreference } from './motion';

export function useSectionEntrances() {
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const main = mainRef.current;
    if (!main || typeof IntersectionObserver !== 'function') return;
    const seen = new Set<Element>();
    const animations = new Set<Animation>();
    const preference = reducedMotionPreference();
    let observer: IntersectionObserver | undefined;
    const cancelMotion = () => {
      if (preference?.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    try {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting || seen.has(entry.target)) continue;
            seen.add(entry.target);
            observer?.unobserve(entry.target);
            const content =
              entry.target.querySelector<HTMLElement>('.container');
            if (!content) continue;
            const animation = animateSafely(
              content,
              [
                { opacity: 0.7, transform: 'translateY(8px)' },
                { opacity: 1, transform: 'none' },
              ],
              motion.section,
            );
            if (animation) {
              animations.add(animation);
              void animation.finished.then(
                () => animations.delete(animation),
                () => animations.delete(animation),
              );
            }
          }
        },
        { rootMargin: '0px 0px -24px 0px', threshold: 0 },
      );
      main
        .querySelectorAll(':scope > section:not(#home)')
        .forEach((section) => {
          observer?.observe(section);
        });
      preference?.addEventListener('change', cancelMotion);
    } catch {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
    }
    return () => {
      observer?.disconnect();
      preference?.removeEventListener('change', cancelMotion);
      animations.forEach((animation) => animation.cancel());
    };
  }, []);
  return mainRef;
}
