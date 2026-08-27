import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

const aboutParagraphs = [
  "I’m a Software Engineer and AI/ML Engineer focused on building scalable software systems and intelligent applications.",
  "My engineering work spans backend engineering, distributed systems, microservices, event-driven architecture, databases, and cloud infrastructure — building systems that are reliable under load and practical to operate.",
  "On the AI/ML side, I work across deep learning, recommendation systems, LLM applications, RAG, retrieval systems, and evaluation-driven AI, with an interest in understanding how these systems behave end to end.",
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
          <div className="about-copy-column">
            <Reveal as="p" className="about-kicker">
              [ ABOUT ME ]
            </Reveal>

            <Reveal delayMs={80} className="mt-6">
              <h2 id="about-title" className="about-heading">
                Hello!
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 sm:mt-9 sm:space-y-6">
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

            <Reveal delayMs={470} className="mt-9 sm:mt-10">
              <a
                href="mailto:saadmadni84@gmail.com"
                className="about-link"
              >
                <span>Say hello</span>
                <span aria-hidden="true" className="about-link-arrow">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delayMs={540} className="about-media-shell">
            <div
              role="img"
              aria-label="Professional portrait placeholder. Replace with Saad Madni photo."
              className="about-portrait-frame"
            >
              <div className="about-portrait-placeholder">
                <p className="about-placeholder-label">Portrait placeholder</p>

                <div className="space-y-2">
                  <p className="about-placeholder-title">
                    No professional photo in project.
                  </p>
                  <p className="about-placeholder-copy">
                    TODO: replace this block with Saad Madni’s portrait.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
