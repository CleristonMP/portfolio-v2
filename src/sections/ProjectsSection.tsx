import type { Project, SectionProps } from '../content/contracts';
import { ArrowUpRight } from 'lucide-react';
import {
  featuredProjects,
  secondaryProjects,
  reportsRegistryCase,
} from '../content/projects';
import { SectionHeading } from '../components/SectionHeading';

interface ProjectCardProps extends SectionProps {
  readonly project: Project;
}

function ProjectCard({ project, language, text }: ProjectCardProps) {
  const technologies = [...(project.stack ?? []), ...(project.platforms ?? [])];
  return (
    <article className="project-card" aria-labelledby={`${project.slug}-title`}>
      <span className="project-kind">{project.category[language]}</span>
      <h3 id={`${project.slug}-title`}>{project.title}</h3>
      <p>{project.description[language]}</p>
      {technologies.length > 0 && (
        <div className="tags">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      )}
      {project.slug === 'reports-registry' && (
        <a className="project-case-link" href={`#${reportsRegistryCase.id}`}>
          {text.private}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}

export function ProjectsSection({ language, text }: SectionProps) {
  return (
    <section id="projects" tabIndex={-1} className="section projects-section">
      <div className="container">
        <SectionHeading
          kicker={text.kickers.projects}
          title={text.selected}
          lead={text.selectedLead}
        />
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              language={language}
              text={text}
            />
          ))}
        </div>
        <article
          id={reportsRegistryCase.id}
          tabIndex={-1}
          className="project-case"
          aria-labelledby="reports-registry-case-title"
        >
          <span className="project-kind">
            {reportsRegistryCase.category[language]}
          </span>
          <h3 id="reports-registry-case-title">Reports Registry</h3>
          <p>{reportsRegistryCase.context[language]}</p>
          <p>{reportsRegistryCase.disclosure[language]}</p>
        </article>
        <div className="projects-secondary">
          {secondaryProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              language={language}
              text={text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
