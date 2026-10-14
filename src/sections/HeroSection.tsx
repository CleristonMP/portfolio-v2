import type { SectionProps } from '../content/contracts';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export function HeroSection({ language: lang, text }: SectionProps) {
  return (
    <section id="home" className="hero container">
      <div className="ambient"></div>
      <div className="eyebrow">
        <span className="pulse"></span>
        {text.tag}
      </div>
      <h1>
        <span>{lang === 'pt' ? 'Criando' : 'Building'}</span>
        <br />
        <span className="gradient-text">
          {lang === 'pt' ? 'soluções digitais.' : 'digital solutions.'}
        </span>
      </h1>
      <p className="hero-lead">{text.hero}</p>
      <div className="hero-actions">
        <a href="#contact" className="btn-primary">
          {text.cta}
          <ArrowUpRight size={17} />
        </a>
        <a href="#projects" className="btn-ghost">
          {text.works}
          <ArrowRight size={16} />
        </a>
      </div>
      <div className="hero-bottom">
        <span>WEB / MOBILE / BACKEND</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
