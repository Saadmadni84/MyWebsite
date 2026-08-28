import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { contactLinks } from "@/data/contact-links";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-nav-section
      aria-labelledby="contact-title"
      className="contact-section border-t border-white/[0.07]"
    >
      <Container width="wide">
        <div className="contact-shell mx-auto max-w-[72rem]">
          <Reveal as="p" className="contact-kicker">
            [ LET&apos;S CONNECT ]
          </Reveal>

          <Reveal delayMs={80} className="mt-6">
            <h2 id="contact-title" className="contact-heading">
              Get in touch
            </h2>
          </Reveal>

          <Reveal delayMs={160} className="mt-10 sm:mt-12">
            <div className="contact-panel">
              <div className="contact-panel-inner">
                <p className="contact-panel-copy">
                  Whether you want to collaborate, or just want to say hi, my
                  inbox is open.
                </p>

                <a href="mailto:saadmadni84@gmail.com" className="contact-email">
                  saadmadni84@gmail.com
                </a>

                <div className="contact-links" aria-label="Social links">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
