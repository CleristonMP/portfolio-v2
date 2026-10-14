import { useState } from 'react';
import type { Language } from './content/contracts';
import { translations } from './i18n/translations';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { AboutSection } from './sections/AboutSection';
import { LearningSection } from './sections/LearningSection';
import { ContactSection } from './sections/ContactSection';
export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [menuOpen, setMenuOpen] = useState(false);
  const text = translations[language];
  return (
    <>
      <Header
        language={language}
        menuOpen={menuOpen}
        text={text}
        onToggleLanguage={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onNavigate={() => setMenuOpen(false)}
      />
      <main>
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
