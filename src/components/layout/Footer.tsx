import type { SectionProps } from '../../content/contracts';
import { profile } from '../../content/profile';
import { getVerifiedUrl } from '../../content/links';

export function Footer({ language, text }: SectionProps) {
  const github = profile.contacts.find((contact) => contact.kind === 'github');
  const githubUrl = getVerifiedUrl(github?.link);
  const resume = profile.resume?.[language];

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-identity">
          <span className="brand">
            {profile.brand.firstName}
            <span className="brand-accent">_</span>
            {profile.brand.lastName}
          </span>
          <p>
            © {new Date().getFullYear()} · {text.footer}
          </p>
        </div>
        <nav
          className="footer-navigation"
          aria-label={text.accessibility.footerNavigation}
        >
          <a href="#projects">{text.navigation[0]}</a>
          <a href="#contact">{text.navigation[4]}</a>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              {text.contactForm.profileLink}
            </a>
          )}
          {resume && (
            <a
              href={resume.src}
              download
              hrefLang={resume.language}
              type="application/pdf"
            >
              {text.downloadResume}
            </a>
          )}
          <a className="footer-top" href="#home">
            {text.backToTop}
          </a>
        </nav>
      </div>
    </footer>
  );
}
