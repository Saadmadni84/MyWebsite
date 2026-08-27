import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      data-nav-section
      aria-labelledby="projects-title"
      className="projects-section border-t border-white/[0.07]"
    >
      <Container width="wide">
        <div className="projects-shell mx-auto max-w-[72rem]">
          <Reveal as="p" className="projects-kicker">
            [ PROJECTS ]
          </Reveal>

          <Reveal delayMs={80} className="mt-6">
            <h2 id="projects-title" className="projects-heading">
              Projects
            </h2>
          </Reveal>

          <Reveal delayMs={160} className="mt-5 max-w-[40rem]">
            <p className="projects-intro">
              Selected software engineering and AI/ML work from my GitHub,
              ordered to highlight the projects most relevant to backend,
              systems, and intelligent application roles.
            </p>
          </Reveal>

          <div className="projects-grid mt-14 sm:mt-16 lg:mt-20">
            {projects.map((project, index) => (
              <Reveal
                key={project.name}
                delayMs={220 + index * 50}
                className="project-card"
              >
                <div className="project-card-top">
                  <span className="project-link-kind">{project.primaryLabel}</span>
                  {project.primaryUrl !== project.repositoryUrl ? (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-secondary-link"
                    >
                      Repository
                    </a>
                  ) : null}
                </div>

                <h3 className="project-title-wrap">
                  <a
                    href={project.primaryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-title-link"
                  >
                    <span>{project.name}</span>
                    <span aria-hidden="true" className="project-title-arrow">
                      ↗
                    </span>
                  </a>
                </h3>

                <p className="project-description">{project.description}</p>

                {project.tags.length ? (
                  <ul className="project-tag-list" aria-label={`${project.name} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className="project-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {project.note ? <p className="project-note">{project.note}</p> : null}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
