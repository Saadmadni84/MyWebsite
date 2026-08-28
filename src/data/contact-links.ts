export type ContactLink = {
  label: string;
  href: string;
};

export const contactLinks: readonly ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Saadmadni84",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saadmadni/",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/saadmadni/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@saadmadni3603",
  },
] as const;
