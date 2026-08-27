import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";

type SkillCard = {
  title: string;
  items: readonly string[];
};

type SkillGroup = {
  label: string;
  columns: 3 | 4;
  cards: readonly SkillCard[];
};

const skillGroups: readonly SkillGroup[] = [
  {
    label: "SOFTWARE ENGINEERING",
    columns: 3,
    cards: [
      {
        title: "Programming Languages",
        items: ["Java (Primary)", "Python", "JavaScript", "SQL"],
      },
      {
        title: "System Design",
        items: ["Distributed Systems", "Scalability", "CAP Theorem"],
      },
      {
        title: "Performance Patterns",
        items: ["Load Balancing", "Caching"],
      },
    ],
  },
  {
    label: "BACKEND & SYSTEMS",
    columns: 3,
    cards: [
      {
        title: "Backend Frameworks",
        items: ["Spring Boot", "Spring Security", "Microservices"],
      },
      {
        title: "APIs & Interfaces",
        items: ["REST APIs", "GraphQL", "gRPC"],
      },
      {
        title: "Messaging",
        items: [
          "Apache Kafka",
          "Event-Driven Architecture",
          "Pub/Sub Patterns",
        ],
      },
    ],
  },
  {
    label: "CLOUD / DEVOPS",
    columns: 3,
    cards: [
      {
        title: "Cloud Platform",
        items: ["AWS", "EC2", "S3", "RDS"],
      },
      {
        title: "Containers & Orchestration",
        items: ["Docker", "Kubernetes"],
      },
      {
        title: "Delivery",
        items: ["CI/CD", "GitHub Actions"],
      },
    ],
  },
  {
    label: "DATABASES",
    columns: 3,
    cards: [
      {
        title: "Relational",
        items: ["PostgreSQL", "SQLite", "MariaDB"],
      },
      {
        title: "Document & Cache",
        items: ["MongoDB", "Redis"],
      },
      {
        title: "Specialized Stores",
        items: ["Cassandra", "Neo4j", "InfluxDB"],
      },
    ],
  },
  {
    label: "AI / MACHINE LEARNING",
    columns: 4,
    cards: [
      {
        title: "Applied ML",
        items: [
          "Deep Learning",
          "NLP",
          "Recommendation Systems",
          "Generative AI",
        ],
      },
      {
        title: "Learning Systems",
        items: ["LLMs", "RAG", "Supervised Learning", "Unsupervised Learning"],
      },
      {
        title: "ML Frameworks",
        items: [
          "PyTorch",
          "TensorFlow",
          "Scikit-Learn",
          "Hugging Face Transformers",
        ],
      },
      {
        title: "ML Theory",
        items: [
          "Probability",
          "Statistics",
          "Linear Algebra",
          "Optimization",
          "Bayesian Inference",
          "Hypothesis Testing",
        ],
      },
    ],
  },
] as const;

function gridClass(columns: SkillGroup["columns"]) {
  return columns === 4 ? "skills-grid skills-grid-4" : "skills-grid skills-grid-3";
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      data-nav-section
      aria-labelledby="skills-title"
      className="skills-section border-t border-white/[0.07]"
    >
      <Container width="wide">
        <div className="skills-shell mx-auto max-w-[72rem]">
          <Reveal as="p" className="skills-kicker">
            [ EXPERTISE ]
          </Reveal>

          <Reveal delayMs={80} className="mt-6">
            <h2 id="skills-title" className="skills-heading">
              Skills &amp; Tools
            </h2>
          </Reveal>

          <Reveal delayMs={160} className="mt-5 max-w-[38rem]">
            <p className="skills-intro">
              Technologies and engineering practices I use to build scalable
              software systems and intelligent applications.
            </p>
          </Reveal>

          <div className="mt-14 space-y-12 sm:mt-16 sm:space-y-14 lg:mt-20 lg:space-y-16">
            {skillGroups.map((group, groupIndex) => (
              <div key={group.label} className="skills-group">
                <Reveal
                  delayMs={220 + groupIndex * 40}
                  className="skills-group-header"
                >
                  <p className="skills-group-title">{group.label}</p>
                  <span aria-hidden="true" className="skills-group-rule" />
                </Reveal>

                <div className="mt-4 sm:mt-[1.1rem]">
                  <div className={gridClass(group.columns)}>
                    {group.cards.map((card, cardIndex) => {
                      const priorCards = skillGroups
                        .slice(0, groupIndex)
                        .reduce((sum, item) => sum + item.cards.length, 0);
                      const delay = 300 + (priorCards + cardIndex) * 60;

                      return (
                        <Reveal key={card.title} delayMs={delay} className="skills-card">
                          <h3 className="skills-card-title">{card.title}</h3>
                          <ul className="skills-chip-list" aria-label={card.title}>
                            {card.items.map((item) => (
                              <li key={item} className="skills-chip">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
