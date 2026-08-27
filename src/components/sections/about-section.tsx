import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

const aboutParagraphs = [
  "I’m a Software Engineer and AI/ML Engineer focused on building systems that are both scalable and intelligent.",
  "My software engineering work spans Java, Spring Boot, distributed systems, Kafka, Redis, Kubernetes and AWS.",
  "My AI/ML work spans deep learning, recommendation systems, LLMs and evaluation-driven RAG pipelines.",
  "I enjoy understanding systems from first principles — from optimizing an API to evaluating a retrieval pipeline.",
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      data-nav-section
      aria-labelledby="about-title"
      className="border-t border-white/[0.06] py-24 sm:py-28 lg:py-32"
    >
      <Container width="wide">
        <Reveal className="grid gap-10 lg:grid-cols-[12rem_minmax(0,48rem)] lg:gap-14">
          <div className="space-y-3 lg:pt-2">
            <p className="meta-label">ABOUT ME</p>
            <p className="text-sm leading-6 tracking-[-0.02em] text-foreground-muted">
              Software Engineer · AI/ML Engineer
            </p>
          </div>

          <div className="max-w-3xl space-y-8 lg:max-w-[48rem]">
            <h2
              id="about-title"
              className="section-title text-foreground sm:text-[clamp(2.75rem,5vw,4.5rem)]"
            >
              Hello!
            </h2>

            <div className="about-copy space-y-6 text-foreground-secondary">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a
              href="mailto:saadmadni84@gmail.com"
              className="about-link inline-flex items-center gap-2"
            >
              <span>Let&apos;s connect</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
