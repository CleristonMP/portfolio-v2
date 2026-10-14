import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Menu,
  X,
  Github,
  Mail,
  Smartphone,
  Server,
  Layers,
  Database,
  BookOpen,
  ExternalLink,
} from 'lucide-react';
import { projects, courses, t, type Lang } from './content';
const nav = ['projects', 'skills', 'about', 'learning', 'contact'];
const skillSet = [
  { name: 'Java & Spring Boot', icon: Server },
  { name: 'React & TypeScript', icon: Code2 },
  { name: 'Android & Mobile', icon: Smartphone },
  { name: 'JavaScript & Node.js', icon: Layers },
  { name: 'SQL & Data', icon: Database },
  { name: 'Software Architecture', icon: BookOpen },
];
export default function App() {
  const [lang, setLang] = useState<Lang>('pt');
  const [menu, setMenu] = useState(false);
  const text = t[lang];
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand">
            <span className="brand-symbol">⌁</span> CLERISTON
            <span className="brand-accent">_</span>PEREIRA
          </a>
          <nav
            className={menu ? 'nav-links open' : 'nav-links'}
            aria-label="Navigation"
          >
            {nav.map((a, i) => (
              <a key={a} href={'#' + a} onClick={() => setMenu(false)}>
                {text.navigation[i]}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="language"
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
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
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <main>
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
        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="kicker">01 / PORTFOLIO</p>
                <h2>
                  {text.selected}
                  <span className="dot">.</span>
                </h2>
              </div>
              <p>{text.selectedLead}</p>
            </div>
            <div className="project-grid">
              {projects.map((p, i) => (
                <article key={p.slug} className="project-card">
                  <div className="project-image">
                    <img
                      src={p.image}
                      alt={`${p.title} interface`}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                    <span className="project-number">0{i + 1}</span>
                  </div>
                  <div className="project-info">
                    <span className="project-kind">{p.category[lang]}</span>
                    <h3>
                      {p.title}
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </h3>
                    <p>{p.description[lang]}</p>
                    <div className="tags">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="hint">{text.soon}</p>
          </div>
        </section>
        <section id="skills" className="section">
          <div className="container">
            <div className="center-heading">
              <p className="kicker">02 / EXPERTISE</p>
              <h2>
                {text.skills}
                <span className="dot">.</span>
              </h2>
              <p>{text.skillsLead}</p>
            </div>
            <div className="skills-grid">
              {skillSet.map(({ name, icon: Icon }) => (
                <div className="skill" key={name}>
                  <Icon size={27} strokeWidth={1.5} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
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
        <section id="learning" className="section learning-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="kicker">04 / EDUCATION</p>
                <h2>
                  {text.learning}
                  <span className="dot">.</span>
                </h2>
              </div>
              <p>{text.learningLead}</p>
            </div>
            <div className="learning-grid">
              {courses.map((c, i) => (
                <div className="course" key={c.title}>
                  <span className="course-index">0{i + 1}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.institution}</p>
                  </div>
                  <BookOpen size={22} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="section contact-section">
          <div className="container contact-layout">
            <div>
              <p className="kicker">05 / CONTACT</p>
              <h2>
                {text.contact}
                <span className="dot">.</span>
              </h2>
              <p>{text.contactLead}</p>
              <div className="contact-cta">
                <a
                  href="https://github.com/CleristonMP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={19} /> GitHub <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div className="contact-panel">
              <span className="small-label">START A CONVERSATION</span>
              <Mail size={32} />
              <p>
                {lang === 'pt'
                  ? 'Para falar sobre um projeto, utilize o canal profissional de contato que será confirmado antes da publicação.'
                  : 'For project inquiries, the verified professional contact channel will be added before launch.'}
              </p>
              <span className="coming-soon">
                {lang === 'pt'
                  ? 'Contato direto em configuração'
                  : 'Direct contact being configured'}
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span className="brand">
            CLERISTON<span className="brand-accent">_</span>PEREIRA
          </span>
          <span>
            © {new Date().getFullYear()} · {text.footer}
          </span>
          <a href="#home">↑ TOP</a>
        </div>
      </footer>
    </>
  );
}
