import type { SectionProps } from '../content/contracts';
import {
  Code2,
  Smartphone,
  Server,
  Layers,
  Database,
  BookOpen,
} from 'lucide-react';
import { skills } from '../content/skills';
import type { SkillIcon } from '../content/contracts';
import type { LucideIcon } from 'lucide-react';

const skillIcons: Record<SkillIcon, LucideIcon> = {
  server: Server,
  code: Code2,
  smartphone: Smartphone,
  layers: Layers,
  database: Database,
  book: BookOpen,
};

export function SkillsSection({ text }: SectionProps) {
  return (
    <section id="skills" tabIndex={-1} className="section skills-section">
      <div className="container">
        <div className="center-heading">
          <p className="kicker">{text.kickers.skills}</p>
          <h2 id="skills-title">
            {text.skills}
            <span className="dot">.</span>
          </h2>
          <p>{text.skillsLead}</p>
        </div>
        <ul className="skills-grid" role="list" aria-labelledby="skills-title">
          {skills.map(({ id, icon }) => {
            const Icon = skillIcons[icon];
            return (
              <li className="skill" key={id}>
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  focusable="false"
                />
                <span>{text.skillLabels[id]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
