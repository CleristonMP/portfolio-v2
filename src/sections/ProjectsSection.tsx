import { useState } from 'react';
import type { Project, SectionProps } from '../content/contracts';
import { ArrowUpRight } from 'lucide-react';
import {
  featuredProjects,
  secondaryProjects,
  reportsRegistryCase,
} from '../content/projects';
import { getProjectUrl } from '../content/links';
import { SectionHeading } from '../components/SectionHeading';
import { ContentImage, MediaFigure } from '../components/ContentImage';
import { GalleryViewer } from '../components/GalleryViewer';
import { projectGalleries } from '../content/galleries';

interface ProjectCardProps extends SectionProps {
  readonly project: Project;
  readonly onExplore: () => void;
}

function ProjectCard({ project, language, text, onExplore }: ProjectCardProps) {
  const technologies = [...(project.stack ?? []), ...(project.platforms ?? [])];
  return (
    <article className="project-card" aria-labelledby={`${project.slug}-title`}>
      {project.image && (
        <div className="project-cover">
          <ContentImage image={project.image} language={language} />
        </div>
      )}
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
      <div className="project-links">
        <button
          type="button"
          className="project-case-link gallery-trigger"
          aria-label={`${text.gallery.explore} — ${project.title}`}
          onClick={onExplore}
        >
          {text.gallery.explore}
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        {(
          [
            'repository',
            'backendRepository',
            'frontendRepository',
            'store',
          ] as const
        ).map((kind) => {
          const url = getProjectUrl(project, kind);
          return url ? (
            <a
              key={kind}
              className="project-case-link"
              href={url}
              aria-label={`${text.projectLinks[kind]} — ${project.title}`}
            >
              {text.projectLinks[kind]}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null;
        })}
      </div>
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
  const [viewer, setViewer] = useState<{ slug: string; index: number } | null>(
    null,
  );
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
              onExplore={() => setViewer({ slug: project.slug, index: 0 })}
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
          <p>{reportsRegistryCase.technologies[language]}</p>
          <p>{reportsRegistryCase.implementation[language]}</p>
          <p>{reportsRegistryCase.disclosure[language]}</p>
          <MediaFigure
            image={reportsRegistryCase.image}
            language={language}
            actionLabel={text.gallery.explore}
            onOpen={() => setViewer({ slug: 'reports-registry', index: 2 })}
          />
        </article>
        <div className="projects-secondary">
          {secondaryProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              language={language}
              text={text}
              onExplore={() => setViewer({ slug: project.slug, index: 0 })}
            />
          ))}
        </div>
      </div>
      {viewer && (
        <GalleryViewer
          collection={projectGalleries[viewer.slug]}
          initialIndex={viewer.index}
          language={language}
          text={text.gallery}
          onClose={() => setViewer(null)}
        />
      )}
    </section>
  );
}
