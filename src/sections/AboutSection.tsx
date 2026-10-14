import type { SectionProps } from '../content/contracts';

export function AboutSection({ language: lang, text }: SectionProps) {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div>
          <p className="kicker">03 / PROFILE</p>
          <h2>
            {text.about}
            <span className="dot">.</span>
          </h2>
          <p className="about-accent">Engineering with purpose.</p>
        </div>
        <div className="about-copy">
          <p>{text.aboutText}</p>
          <div className="about-note">
            <span className="small-label">METHOD / 01</span>
            <p>
              {lang === 'pt'
                ? 'Entender o contexto. Projetar com clareza. Construir com cuidado.'
                : 'Understand the context. Design with clarity. Build with care.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
