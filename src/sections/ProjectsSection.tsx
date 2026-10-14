import type { SectionProps } from '../content/contracts';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../content/projects';
import { SectionHeading } from '../components/SectionHeading';

export function ProjectsSection({ language: lang, text }: SectionProps) {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          kicker="01 / PORTFOLIO"
          title={text.selected}
          lead={text.selectedLead}
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={project.slug} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} interface`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-info">
                <span className="project-kind">{project.category[lang]}</span>
                <h3>
                  {project.title}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </h3>
                <p>{project.description[lang]}</p>
                <div className="tags">
                  {[...(project.stack ?? []), ...(project.platforms ?? [])].map(
                    (technology) => (
                      <span key={technology}>{technology}</span>
                    ),
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="hint">{text.soon}</p>
      </div>
    </section>
  );
}
