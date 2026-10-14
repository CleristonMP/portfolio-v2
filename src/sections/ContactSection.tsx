import type { SectionProps } from '../content/contracts';
import { Github, Mail, ExternalLink } from 'lucide-react';
import { profile } from '../content/profile';
import { getVerifiedUrl } from '../content/links';

export function ContactSection({ text }: SectionProps) {
  const github = profile.contacts.find((contact) => contact.kind === 'github');
  const githubUrl = getVerifiedUrl(github?.link);
  return (
    <section id="contact" className="section contact-section">
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
                <Github size={19} /> {github?.label} <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
        <div className="contact-panel">
          <span className="small-label">{text.conversationLabel}</span>
          <Mail size={32} />
          <p>{text.contactNotice}</p>
          <span className="coming-soon">{text.contactStatus}</span>
        </div>
      </div>
    </section>
  );
}
