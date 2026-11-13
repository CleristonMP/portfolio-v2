import type { SectionProps } from '../content/contracts';
import { Github, ExternalLink } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { profile } from '../content/profile';
import { getVerifiedUrl } from '../content/links';

export function ContactSection({ text }: SectionProps) {
  const github = profile.contacts.find((contact) => contact.kind === 'github');
  const githubUrl = getVerifiedUrl(github?.link);
  return (
    <section id="contact" tabIndex={-1} className="section contact-section">
      <div className="container contact-layout">
        <div>
          <p className="kicker">{text.kickers.contact}</p>
          <h2>
            {text.contact}
            <span className="dot">.</span>
          </h2>
          <p>{text.contactLead}</p>
          <div className="contact-cta">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={19} aria-hidden="true" focusable="false" />
                {text.contactForm.profileLink}
                <ExternalLink size={14} aria-hidden="true" focusable="false" />
              </a>
            )}
          </div>
        </div>
        <ContactForm text={text} />
      </div>
    </section>
  );
}
