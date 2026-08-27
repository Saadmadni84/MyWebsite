import { Container } from "@/components/layout/container";

const metrics = [
  {
    value: "6★",
    label: "CodeChef",
  },
  {
    value: "#17",
    label: "Global Rank",
  },
  {
    value: "1,000+",
    label: "Events/sec",
  },
] as const;

const futureAnchorIds = [
  "experience",
  "projects",
  "skills",
  "engineering",
  "contact",
] as const;

export function HeroSection() {
  return (
    <section
      id="about"
      data-nav-section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div aria-hidden="true" className="hero-spotlight" />

      {futureAnchorIds.map((id, index) => (
        <div
          key={id}
          id={id}
          aria-hidden="true"
          className="nav-anchor pointer-events-none absolute left-0 h-px w-px opacity-0"
          style={{ top: `${34 + index * 11}%` }}
        />
      ))}

      <Container width="wide" className="relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-0 pb-20 pt-28 text-center sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
          <div className="space-y-6 sm:space-y-7">
            <h1 id="hero-title" className="hero-name hero-step hero-step-name text-foreground">
              <span className="block">SAAD</span>
              <span className="block">MADNI</span>
            </h1>

            <p className="hero-role hero-step hero-step-role text-foreground-secondary">
              <span className="block sm:inline">Software Engineer</span>
              <span className="mx-3 hidden text-foreground-muted sm:inline">·</span>
              <span className="mt-1 block sm:mt-0 sm:inline">AI/ML Engineer</span>
            </p>

            <p className="hero-description hero-step hero-step-description mx-auto text-foreground-secondary">
              I build scalable software systems and intelligent applications —
              from distributed backend systems and event-driven architectures to
              recommendation systems and evaluation-driven RAG pipelines.
            </p>
          </div>

          <div className="hero-step hero-step-actions mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:justify-center">
            <a href="#projects" className="hero-button hero-button-primary w-full max-w-xs sm:w-auto">
              <span>View Work</span>
              <span aria-hidden="true" className="text-sm text-foreground-secondary">
                ↓
              </span>
            </a>
            <a href="#contact" className="hero-button hero-button-secondary w-full max-w-xs sm:w-auto">
              <span>Get in touch</span>
            </a>
          </div>

          <dl className="hero-step hero-step-metrics mt-14 grid w-full max-w-4xl overflow-hidden rounded-[var(--radius-md)] border border-white/[0.06] bg-[rgba(10,10,10,0.36)] sm:mt-16 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={[
                  "flex flex-col items-center gap-3 px-6 py-6 sm:px-7 sm:py-7",
                  index < metrics.length - 1
                    ? "border-b border-white/[0.06] sm:border-b-0 sm:border-r"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <dt className="meta-label order-2">{metric.label}</dt>
                <dd className="order-1 text-[1.9rem] font-medium tracking-[-0.06em] text-foreground sm:text-[2.5rem]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
