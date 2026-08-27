"use client";

import { useEffect, useMemo, useState } from "react";
import { navigationItems } from "@/components/navigation/navigation-config";
import { Container } from "@/components/layout/container";

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function SiteNavigation() {
  const [activeSection, setActiveSection] = useState<string>(navigationItems[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(() => navigationItems.map((item) => item.id), []);
  const sectionIdSet = useMemo(() => new Set<string>(sectionIds), [sectionIds]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-section]"),
    ).filter((section) => sectionIdSet.has(section.id));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-84px 0px -52% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIdSet]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-sm focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[rgba(5,5,5,0.76)]">
        <Container width="wide" className="relative">
          <div className="flex h-[var(--nav-height)] items-center justify-between gap-6">
            <a
              href="#about"
              className="inline-flex min-w-0 items-center rounded-sm py-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:text-foreground-secondary focus-visible:text-foreground"
            >
              SAAD MADNI
            </a>

            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-0.5 lg:gap-1">
                {navigationItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        aria-current={isActive ? "location" : undefined}
                        className={cx(
                          "group relative inline-flex items-center rounded-sm px-3 py-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground-muted transition-colors hover:text-foreground focus-visible:text-foreground lg:text-[0.72rem]",
                          isActive && "text-foreground",
                        )}
                      >
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className={cx(
                            "absolute inset-x-3 bottom-2 h-px origin-left bg-white/[0.56] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                          )}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/[0.08] text-foreground transition-colors hover:border-white/[0.14] hover:text-foreground-secondary focus-visible:border-white/[0.2] md:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="relative h-3.5 w-4">
                <span
                  className={cx(
                    "absolute left-0 top-0 block h-px w-4 bg-current transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    mobileOpen && "translate-y-[7px] rotate-45",
                  )}
                />
                <span
                  className={cx(
                    "absolute left-0 top-[7px] block h-px w-4 bg-current transition-opacity duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    mobileOpen && "opacity-0",
                  )}
                />
                <span
                  className={cx(
                    "absolute left-0 top-[14px] block h-px w-4 bg-current transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    mobileOpen && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <div
        className={cx(
          "fixed inset-x-0 top-[var(--nav-height)] z-40 border-b border-white/[0.06] bg-[rgba(5,5,5,0.98)] transition-[opacity,transform,visibility] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        <Container width="wide" className="px-0">
          <nav id="mobile-navigation" aria-label="Mobile primary">
            <ul className="flex min-h-[calc(100svh-var(--nav-height))] flex-col">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id} className="border-b border-white/[0.06] last:border-b-0">
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={cx(
                        "flex items-center justify-between px-6 py-5 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-foreground-secondary transition-colors hover:text-foreground focus-visible:text-foreground",
                        isActive && "text-foreground",
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className={cx(
                          "h-1.5 w-1.5 rounded-full border border-white/[0.18] bg-transparent transition-colors duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isActive && "border-white/[0.6] bg-white/[0.7]",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
}
