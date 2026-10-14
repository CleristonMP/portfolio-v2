import { useCallback, useState } from 'react';
import { useLanguage } from './i18n/useLanguage';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { AboutSection } from './sections/AboutSection';
import { LearningSection } from './sections/LearningSection';
import { ContactSection } from './sections/ContactSection';
export default function App() {
  const { language, text, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const skipToContent = () => {
    closeMenu();
    document.getElementById('main-content')?.focus({ preventScroll: true });
  };
  return (
    <>
      <a className="skip-link" href="#main-content" onClick={skipToContent}>
        {text.accessibility.skipToContent}
      </a>
      <Header
        language={language}
        menuOpen={menuOpen}
        text={text}
        onToggleLanguage={toggleLanguage}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onCloseMenu={closeMenu}
      />
      <main id="main-content" tabIndex={-1}>
        <HeroSection language={language} text={text} />
        <ProjectsSection language={language} text={text} />
        <SkillsSection language={language} text={text} />
        <AboutSection language={language} text={text} />
        <LearningSection language={language} text={text} />
        <ContactSection language={language} text={text} />
      </main>
      <Footer text={text} />
    </>
  );
}
