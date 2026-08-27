export const navigationItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "engineering", label: "Engineering" },
  { id: "contact", label: "Contact" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];
