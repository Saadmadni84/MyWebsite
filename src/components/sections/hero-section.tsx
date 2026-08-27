import { Container } from "@/components/layout/container";

const metrics = [
  {
    value: "6★",
    label: "CodeChef Rating",
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
  "projects",
  "skills",
  "blog",
  "credentials",
  "contact",
] as const;

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] overflow-hidden"
    >
      <div aria-hidden="true" className="hero-spotlight" />
      <div aria-hidden="true" className="hero-vignette" />

      {futureAnchorIds.map((id, index) => (
        <div
          key={id}
          id={id}
          aria-hidden="true"
          className="nav-anchor pointer-events-none absolute left-0 h-px w-px opacity-0"
          style={{ top: `${36 + index * 9}%` }}
        />
      ))}

      <Container width="wide" className="relative z-10">
        <div className="mx-auto flex min-h-[100svh] max-w-[72rem] flex-col px-0 pb-10 pt-[calc(var(--nav-height)+1rem)] sm:pb-12 sm:pt-[calc(var(--nav-height)+1.5rem)] lg:pb-16 lg:pt-[calc(var(--nav-height)+2rem)]">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="hero-copy-shell w-full max-w-4xl">
              <h1 id="hero-title" className="hero-name hero-step hero-step-name">
                <span className="block">SAAD</span>
                <span className="block">MADNI</span>
              </h1>

              <p className="hero-role hero-step hero-step-role mt-8 text-foreground-secondary sm:mt-9">
                Software Engineer &amp; AI/ML Engineer
              </p>

              <p className="hero-description hero-step hero-step-description mx-auto mt-5 text-foreground-secondary sm:mt-6">
                I build scalable software systems and intelligent applications.
              </p>

              <div className="hero-step hero-step-actions mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-3">
                <a
                  href="#projects"
                  className="hero-button hero-button-primary w-full max-w-[12rem] sm:w-auto"
                >
                  <span>View Work</span>
                  <span aria-hidden="true">↓</span>
                </a>

                <a
                  href="#contact"
                  className="hero-button hero-button-secondary w-full max-w-[12rem] sm:w-auto"
                >
                  <span>Get in touch</span>
                </a>
              </div>
            </div>
          </div>

          <dl className="hero-step hero-step-metrics hero-metrics-row mx-auto w-full max-w-[44rem]">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={[
                  "hero-metric-item flex flex-col items-center px-6 py-4 text-center sm:px-8 sm:py-5",
                  index > 0 ? "sm:border-l sm:border-white/[0.05]" : "",
                  index > 0 ? "border-t border-white/[0.05] sm:border-t-0" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <dd className="hero-metric-value">{metric.value}</dd>
                <dt className="hero-metric-label mt-3">{metric.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
