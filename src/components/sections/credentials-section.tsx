import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { getCredentials } from "@/data/credentials";

function splitIntoColumns<T>(items: readonly T[]) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)] as const;
}

export function CredentialsSection() {
  const credentials = getCredentials();
  const [leftColumn, rightColumn] = splitIntoColumns(credentials);
  const hasCredentials = credentials.length > 0;

  return (
    <section
      id="credentials"
      data-nav-section
      aria-labelledby="credentials-title"
      className="credentials-section border-t border-white/[0.07]"
    >
      <Container width="wide">
        <div className="credentials-shell mx-auto max-w-[72rem]">
          <Reveal as="p" className="credentials-kicker">
            [ ACCOMPLISHMENTS ]
          </Reveal>

          <Reveal delayMs={80} className="mt-6">
            <h2 id="credentials-title" className="credentials-heading">
              Credentials
            </h2>
          </Reveal>

          <Reveal delayMs={160} className="mt-5 max-w-[40rem]">
            <p className="credentials-intro">
              Certifications and course completions with direct verification.
              Official verification links are used when available; otherwise,
              uploaded certificate files are opened directly from the public
              credentials directory.
            </p>
          </Reveal>

          {hasCredentials ? (
            <div className="credentials-grid mt-14 sm:mt-16 lg:mt-20">
              <div className="credentials-column">
                {leftColumn.map((credential, index) => (
                  <Reveal
                    key={credential.id}
                    delayMs={220 + index * 35}
                    className="credentials-row"
                  >
                    <div className="credentials-copy">
                      <p className="credentials-name-line">
                        <span className="credentials-name">{credential.name}</span>
                        {credential.issuer ? (
                          <span className="credentials-issuer">
                            {" · "}
                            {credential.issuer}
                          </span>
                        ) : null}
                      </p>
                    </div>

                    <a
                      href={credential.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="credentials-verify"
                    >
                      Verify ↗
                    </a>
                  </Reveal>
                ))}
              </div>

              <div className="credentials-column">
                {rightColumn.map((credential, index) => (
                  <Reveal
                    key={credential.id}
                    delayMs={220 + (leftColumn.length + index) * 35}
                    className="credentials-row"
                  >
                    <div className="credentials-copy">
                      <p className="credentials-name-line">
                        <span className="credentials-name">{credential.name}</span>
                        {credential.issuer ? (
                          <span className="credentials-issuer">
                            {" · "}
                            {credential.issuer}
                          </span>
                        ) : null}
                      </p>
                    </div>

                    <a
                      href={credential.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="credentials-verify"
                    >
                      Verify ↗
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
