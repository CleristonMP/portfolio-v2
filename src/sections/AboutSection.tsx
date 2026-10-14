import type { SectionProps } from '../content/contracts';

export function AboutSection({ text }: SectionProps) {
  return (
    <section id="about" tabIndex={-1} className="section about-section">
      <div className="container about-grid">
        <div>
          <p className="kicker">{text.kickers.about}</p>
          <h2>
            {text.about}
            <span className="dot">.</span>
          </h2>
          <p className="about-accent">{text.aboutAccent}</p>
        </div>
        <div className="about-copy">
          <p>{text.aboutText}</p>
          <div className="about-note">
            <span className="small-label">{text.methodLabel}</span>
            <p>{text.methodText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
