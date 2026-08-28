import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

type AboutDetail = {
  label: string;
  value: string;
  href?: string;
};

const aboutParagraphs = [
  "I’m a Software Engineer and AI/ML Engineer focused on building scalable software systems and intelligent applications.",
  "My work spans backend engineering, distributed systems, microservices, event-driven architecture, databases, cloud infrastructure, and applied AI/ML systems designed to be reliable under load and practical to operate end to end.",
] as const;

const aboutDetails: readonly AboutDetail[] = [
  {
    label: "Focus",
    value: "Software Engineering · AI / ML · Intelligent Applications",
  },
  {
    label: "Systems",
    value:
      "Backend Engineering · Distributed Systems · Microservices · Event-Driven Architecture",
  },
  {
    label: "AI / ML",
    value:
      "Deep Learning · Recommendation Systems · LLM Applications · RAG",
  },
  {
    label: "Platforms",
    value:
      "Databases · Cloud Infrastructure · Retrieval Systems · Evaluation-Driven AI",
  },
  {
    label: "Email",
    value: "saadmadni84@gmail.com",
    href: "mailto:saadmadni84@gmail.com",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      data-nav-section
      aria-labelledby="about-title"
      className="about-section border-t border-white/[0.07]"
    >
      <Container width="wide">
        <div className="about-shell mx-auto max-w-[72rem]">
          <Reveal as="p" className="about-kicker">
            [ ABOUT ]
          </Reveal>

          <Reveal delayMs={80} className="mt-6">
            <h2 id="about-title" className="about-heading">
              About Me
            </h2>
          </Reveal>

          <div className="about-editorial mt-12 sm:mt-14 lg:mt-16">
            <div className="about-copy-column">
              <div className="about-copy-stack space-y-6 sm:space-y-7">
                {aboutParagraphs.map((paragraph, index) => (
                  <Reveal
                    key={paragraph}
                    as="p"
                    delayMs={180 + index * 90}
                    className="about-paragraph"
                  >
                    {paragraph}
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="about-details-column">
              <dl className="about-detail-list">
                {aboutDetails.map((detail, index) => (
                  <Reveal
                    key={detail.label}
                    delayMs={240 + index * 70}
                    className="about-detail-row"
                  >
                    <dt className="about-detail-label">{detail.label}</dt>
                    <dd className="about-detail-value">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="about-detail-link"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
