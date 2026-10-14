import { useEffect, useRef, type MouseEvent } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import type { Language, Translation } from '../../content/contracts';
import { navigation } from '../../content/navigation';
import { profile } from '../../content/profile';
interface HeaderProps {
  readonly language: Language;
  readonly menuOpen: boolean;
  readonly text: Translation;
  readonly onToggleLanguage: () => void;
  readonly onToggleMenu: () => void;
  readonly onCloseMenu: () => void;
}
export function Header({
  menuOpen: menu,
  text,
  onToggleLanguage,
  onToggleMenu,
  onCloseMenu,
}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 700px)');
    let lastFocusedElement: Element | null = document.activeElement;
    const rememberFocus = (event: FocusEvent) => {
      lastFocusedElement =
        event.target instanceof Element ? event.target : null;
    };
    const handleWidthChange = () => {
      // Browsers may blur display:none elements before delivering the media event.
      const activeElement =
        document.activeElement === document.body
          ? lastFocusedElement
          : document.activeElement;
      if (mobile.matches) {
        if (
          navigationRef.current?.contains(activeElement) ||
          activeElement === contactRef.current
        ) {
          menuButtonRef.current?.focus({ preventScroll: true });
        }
      } else if (activeElement === menuButtonRef.current) {
        navigationRef.current
          ?.querySelector<HTMLAnchorElement>('a')
          ?.focus({ preventScroll: true });
      }
      onCloseMenu();
    };
    document.addEventListener('focusin', rememberFocus);
    mobile.addEventListener('change', handleWidthChange);
    return () => {
      document.removeEventListener('focusin', rememberFocus);
      mobile.removeEventListener('change', handleWidthChange);
    };
  }, [onCloseMenu]);

  useEffect(() => {
    if (!menu) return;
    if (window.matchMedia('(max-width: 700px)').matches) {
      navigationRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (headerRef.current?.contains(document.activeElement)) {
        menuButtonRef.current?.focus({ preventScroll: true });
      }
      onCloseMenu();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menu, onCloseMenu]);

  const navigate = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const focusedLinkWillHide =
      window.matchMedia('(max-width: 700px)').matches &&
      navigationRef.current?.contains(document.activeElement);
    if (focusedLinkWillHide) {
      document
        .getElementById(event.currentTarget.hash.slice(1))
        ?.focus({ preventScroll: true });
    }
    onCloseMenu();
    // Keep the browser's native hash navigation and history entry.
  };

  return (
    <header ref={headerRef} className="header">
      <div className="container nav">
        <a href="#home" className="brand" onClick={navigate}>
          <span className="brand-symbol">⌁</span> {profile.brand.firstName}
          <span className="brand-accent">_</span>
          {profile.brand.lastName}
        </a>
        <nav
          ref={navigationRef}
          id="primary-navigation"
          className={menu ? 'nav-links open' : 'nav-links'}
          aria-label={text.accessibility.navigation}
        >
          {navigation.map(({ id, labelIndex }) => (
            <a key={id} href={'#' + id} onClick={navigate}>
              {text.navigation[labelIndex]}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="language"
            onClick={onToggleLanguage}
            aria-label={text.accessibility.changeLanguage}
          >
            {text.languageSwitchCode}
          </button>
          <a
            ref={contactRef}
            className="contact-button"
            href="#contact"
            onClick={navigate}
          >
            {text.navigation[4]} <ArrowUpRight size={14} />
          </a>
          <button
            aria-label={
              menu ? text.accessibility.closeMenu : text.accessibility.openMenu
            }
            ref={menuButtonRef}
            aria-expanded={menu}
            aria-controls="primary-navigation"
            className="menu-btn"
            onClick={onToggleMenu}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
