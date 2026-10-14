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
  readonly onNavigate: () => void;
}
export function Header({
  language: lang,
  menuOpen: menu,
  text,
  onToggleLanguage,
  onToggleMenu,
  onNavigate,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="container nav">
        <a href="#home" className="brand">
          <span className="brand-symbol">⌁</span> {profile.brand.firstName}
          <span className="brand-accent">_</span>
          {profile.brand.lastName}
        </a>
        <nav
          className={menu ? 'nav-links open' : 'nav-links'}
          aria-label="Navigation"
        >
          {navigation.map(({ id, labelIndex }) => (
            <a key={id} href={'#' + id} onClick={onNavigate}>
              {text.navigation[labelIndex]}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="language"
            onClick={onToggleLanguage}
            aria-label="Change language"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <a className="contact-button" href="#contact">
            {text.navigation[4]} <ArrowUpRight size={14} />
          </a>
          <button
            aria-label="Open menu"
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
