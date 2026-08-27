import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const coreAreas = [
  "Software Engineering",
  "Backend Engineering",
  "Distributed Systems",
  "AI/ML",
  "Generative AI",
  "RAG",
  "Recommendation Systems",
  "System Design",
];

const foundationItems = [
  "Design tokens aligned to the premium dark editorial direction.",
  "Geist typography system with restrained mono metadata styling.",
  "Global background, container widths, spacing scale, and radius system.",
  "Subtle motion conventions designed for recruiter-friendly scanning.",
];

const systemNotes = [
  {
    title: "Typography",
    description:
      "Large editorial headings, quiet body copy, and mono metadata for technical cues.",
  },
  {
    title: "Layout",
    description:
      "Reading, standard, and wide containers tuned for narrative sections and recruiter scanning.",
  },
  {
    title: "Motion",
    description:
      "Gentle fade-and-rise transitions only, with reduced-motion protection baked in.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <Section className="pb-14 pt-24 sm:pb-20 sm:pt-32">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
            <div className="space-y-10 fade-rise">
              <div className="space-y-5">
                <p className="meta-label">Portfolio redesign foundation</p>
                <div className="space-y-5">
                  <h1 className="display-title max-w-4xl text-foreground">
                    Saad Madni
                  </h1>
                  <p className="lede text-foreground-secondary">
                    Software Engineer · AI/ML Engineer
                  </p>
                  <p className="max-w-2xl text-sm leading-7 text-foreground-secondary sm:text-base">
                    This pass establishes the visual system only. Full information
                    architecture, project storytelling, and complete page builds are
                    intentionally held for approval before implementation.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {coreAreas.map((area) => (
                  <article
                    key={area}
                    className="surface-panel min-h-[9.5rem] p-5 sm:p-6"
                  >
                    <p className="meta-label">Core area</p>
                    <p className="mt-8 text-base leading-7 text-foreground sm:text-[1.05rem]">
                      {area}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="surface-panel h-fit p-6 sm:p-7 lg:sticky lg:top-8 fade-rise">
              <p className="meta-label">This pass includes</p>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-foreground-secondary sm:text-[0.95rem]">
                {foundationItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle pt-0">
        <Container width="wide">
          <div className="grid gap-4 lg:grid-cols-3 fade-rise">
            {systemNotes.map((note) => (
              <article key={note.title} className="surface-panel p-6 sm:p-7">
                <p className="meta-label">Foundation</p>
                <h2 className="mt-6 text-2xl leading-tight tracking-[-0.04em] text-foreground">
                  {note.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-foreground-secondary sm:text-base">
                  {note.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
