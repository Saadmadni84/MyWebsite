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
    date: "[TODO: VERIFY FROM RESUME]",
    organization: "PrepAIro",
    role: "[TODO: VERIFY FROM RESUME]",
    description:
      "[TODO: VERIFY FROM RESUME — add the exact engineering scope, technologies, and production impact for PrepAIro.]",
  },
  {
    date: "[TODO: VERIFY FROM RESUME]",
    organization: "Apache [TODO: VERIFY PROJECT NAME FROM RESUME]",
    role: "Open Source Contributor",
    description:
      "[TODO: VERIFY FROM RESUME — add the exact Apache project, contribution details, and any verified issue, test, debugging, documentation, or pull request work.]",
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
