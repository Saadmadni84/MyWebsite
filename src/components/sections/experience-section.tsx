import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

type ExperienceEntry = {
  date: string;
  organization: string;
  role: string;
  description: string;
  href?: string;
};

const experienceEntries: ExperienceEntry[] = [
  {
    date: "Feb 2025 – May 2025",
    organization: "PrepAIro",
    role: "Software Engineer Intern",
    description:
      "Engineered 5+ production RESTful microservices in Java and Spring Boot for high-concurrency workloads with sub-100ms p95 latency; improved backend performance by 30% through multi-level Redis caching, query tuning, and database indexing; designed PostgreSQL schemas and connection pooling for high-throughput transaction processing; and applied system design and distributed architecture patterns to strengthen fault tolerance and high availability across core services.",
  },
  {
    date: "—",
    organization: "Apache",
    role: "Open Source Contributor",
    description:
      "Open-source contribution to Apache Airflow.",
    href: "https://github.com/apache/airflow",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      data-nav-section
      aria-labelledby="experience-title"
      className="experience-section border-t border-white/[0.07]"
    >
      <Container width="wide">
        <div className="experience-shell mx-auto max-w-[72rem]">
          <Reveal as="p" className="experience-kicker">
            [ WORK HISTORY ]
          </Reveal>

          <Reveal delayMs={80} className="mt-6">
            <h2 id="experience-title" className="experience-heading">
              Experience
            </h2>
          </Reveal>

          <Reveal delayMs={160} className="mt-5 max-w-[38rem]">
            <p className="experience-intro">
              Software engineering and AI/ML work across production systems,
              intelligent applications, and open-source development.
            </p>
          </Reveal>

          <div className="mt-14 sm:mt-16 lg:mt-20">
            {experienceEntries.map((entry, index) => {
              const OrganizationTag = entry.href ? "a" : "p";

              return (
                <Reveal
                  key={`${entry.organization}-${index}`}
                  delayMs={260 + index * 110}
                  className="experience-row"
                >
                  <div className="experience-date">{entry.date}</div>

                  <div className="experience-content">
                    <OrganizationTag
                      {...(entry.href
                        ? {
                            href: entry.href,
                            target: "_blank",
                            rel: "noreferrer",
                          }
                        : {})}
                      className="experience-organization"
                    >
                      {entry.organization}
                    </OrganizationTag>

                    <p className="experience-role">{entry.role}</p>
                    <p className="experience-description">{entry.description}</p>

                    {entry.href ? (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noreferrer"
                        className="experience-link"
                      >
                        <span>View contribution</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
