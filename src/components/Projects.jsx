import React, { useState } from 'react';
import {
  MessagesSquare,
  FileSearch,
  ShieldCheck,
  PanelsTopLeft,
  Trophy,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolio';

const placeholderIcons = {
  MessagesSquare,
  FileSearch,
  ShieldCheck,
  PanelsTopLeft,
};

function ProjectPlaceholder({ project }) {
  const PlaceholderIcon = placeholderIcons[project.placeholder.icon] || PanelsTopLeft;
  return (
    <div className={`project-placeholder ${project.placeholder.tintClass}`}>
      <div className="placeholder-icon-wrap" aria-hidden="true">
        <PlaceholderIcon size={26} />
      </div>
      <span className="placeholder-name">{project.placeholder.name}</span>
    </div>
  );
}

function ProjectMedia({ project }) {
  const [failed, setFailed] = useState(false);

  // No image path provided, or image previously errored — show placeholder.
  if (!project.image || failed) {
    return <ProjectPlaceholder project={project} />;
  }

  // Image path exists: render it immediately, visible by default.
  // onError swaps in the placeholder if the file cannot be loaded.
  return (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className="project-img"
      onError={() => setFailed(true)}
    />
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card" aria-labelledby={`project-title-${project.id}`}>
      {/* 16:9 media area */}
      <div className="project-media">
        <ProjectMedia project={project} />
      </div>

      <div className="project-content">
        <div className="project-meta-top">
          <span className="project-category">{project.category}</span>
          <span className="project-duration">{project.duration}</span>
        </div>

        <h3 id={`project-title-${project.id}`} className="project-title">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}

        {/* Badges */}
        {(project.awardBadge || project.projectTypeBadge) && (
          <div className="project-badges">
            {project.awardBadge && (
              <span className="badge badge-amber">
                <Trophy size={13} aria-hidden="true" />
                {project.awardBadge}
              </span>
            )}
            {project.projectTypeBadge && (
              <span className="badge badge-subtle">
                {project.projectTypeBadge}
              </span>
            )}
          </div>
        )}

        <p className="project-desc">{project.description}</p>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <ul className="project-features" aria-label="Key Features">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="project-feature-item">
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Primary tech tags */}
        <div className="project-tags-list" aria-label="Primary Technologies">
          {project.primaryTags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable full tech stack */}
        {project.fullTechStack && project.fullTechStack.length > 0 && (
          <details className="project-details">
            <summary>
              <span>More details</span>
              <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="full-tech-content">
              {project.fullTechStack.map((group) => (
                <div key={group.group} className="full-tech-group">
                  <h4 className="full-tech-heading">{group.group}</h4>
                  <div className="full-tech-items">
                    {group.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
        )}

        {/* GitHub link */}
        {project.githubUrl && (
          <div className="project-actions">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
              aria-label={`View ${project.title} on GitHub (opens in new tab)`}
            >
              <GithubIcon size={15} aria-hidden="true" />
              <span>Source code</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{projectsData.sectionLabel}</span>
          <h2 id="projects-heading" className="section-heading">
            {projectsData.heading}
          </h2>
          <p className="section-supporting">{projectsData.supportingText}</p>
        </div>

        <div className="projects-grid">
          {projectsData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
