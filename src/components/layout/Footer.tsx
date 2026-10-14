import type { Translation } from '../../content/contracts';
import { profile } from '../../content/profile';
export function Footer({ text }: { readonly text: Translation }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="brand">
          {profile.brand.firstName}
          <span className="brand-accent">_</span>
          {profile.brand.lastName}
        </span>
        <span>
          © {new Date().getFullYear()} · {text.footer}
        </span>
        <a href="#home">↑ TOP</a>
      </div>
    </footer>
  );
}
