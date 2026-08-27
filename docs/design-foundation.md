# Saad Madni portfolio redesign foundation

## Context
The workspace did not contain an existing portfolio project, so this pass starts from a fresh Next.js scaffold per your approval. That means the "existing project" audit below reflects the generated baseline before design-system changes.

## 1) Existing project structure at the time of audit
- **Framework:** Next.js 16.3.3
- **Runtime:** React 19.2.8
- **Language:** TypeScript 5
- **Routing:** App Router via `src/app`
- **Styling system:** Tailwind CSS v4 through `src/app/globals.css`
- **Initial component structure:** No custom components; starter files only
- **Initial pages:** `/` mapped to `src/app/page.tsx`
- **Initial assets:** `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`, plus `src/app/favicon.ico`
- **Dependencies:** `next`, `react`, `react-dom`
- **Dev dependencies:** `tailwindcss`, `@tailwindcss/postcss`, `typescript`, `eslint`, `eslint-config-next`, `@types/node`, `@types/react`, `@types/react-dom`

## 2) Preserve vs change
### Preserved
- Next.js App Router foundation
- TypeScript setup
- Tailwind CSS integration
- Geist and Geist Mono font pairing from the scaffolded layout

### Changed
- Replaced the default starter page with a restrained foundation preview
- Reworked global color tokens to match the requested premium dark editorial direction
- Established typography, spacing, radius, motion, and container conventions
- Added small layout primitives for container and section consistency
- Updated site metadata away from the generic starter copy

## 3) Design tokens established

### Color system
| Token | Value | Use |
| --- | --- | --- |
| `--background` | `#050505` | Global page background |
| `--background-secondary` | `#08090D` | Secondary backdrop / tonal separation |
| `--surface` | `#0A0A0A` | Card and panel surfaces |
| `--foreground` | `#F5F5F5` | Primary text |
| `--foreground-secondary` | `#A1A1AA` | Supporting text |
| `--foreground-muted` | `#71717A` | Meta text / captions |
| `--border` | `#1F1F1F` | Thin dividers and panel borders |
| `--accent` | `#8B96A9` | Subtle cool gray / desaturated blue-gray accent |
| `--accent-soft` | `rgba(139, 150, 169, 0.14)` | Selection / low-emphasis highlights |
| `--spotlight` | `rgba(139, 150, 169, 0.12)` | Background spotlight treatment |

### Typography
- **Primary typeface:** Geist Sans
- **Technical/meta typeface:** Geist Mono
- **Display convention:** large editorial headings with tight tracking
- **Body convention:** quiet, readable supporting copy with generous line height
- **Meta convention:** uppercase mono labels with muted color and increased letter-spacing

### Containers
| Token | Value | Purpose |
| --- | --- | --- |
| `--container-reading` | `48rem` | Long-form readable sections |
| `--container-default` | `72rem` | Standard content sections |
| `--container-wide` | `86rem` | Hero and multi-column layouts |

### Spacing scale
`0.25rem`, `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `4rem`, `5rem`, `6rem`, `8rem`

### Radius scale
| Token | Value |
| --- | --- |
| `--radius-xs` | `0.375rem` |
| `--radius-sm` | `0.625rem` |
| `--radius-md` | `0.875rem` |
| `--radius-lg` | `1.25rem` |

### Motion conventions
- **Fast:** `160ms`
- **Base:** `240ms`
- **Slow:** `420ms`
- **Primary easing:** `cubic-bezier(0.22, 1, 0.36, 1)`
- **Gentle easing:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Allowed motion style:** subtle fade-and-rise only
- **Accessibility rule:** reduced-motion override applied globally

## 4) Files changed in this pass
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/components/layout/container.tsx`
- `src/components/layout/section.tsx`
- `docs/design-foundation.md`

## 5) Approvals needed before full implementation
1. **Information architecture:** confirm the final sections to build next (for example: Hero, About, Experience, Selected Work, Technical Focus, Resume/Contact).
2. **Homepage emphasis:** decide whether the homepage should lean more toward software/backend, AI/ML, or a balanced hybrid.
3. **Project narrative style:** confirm whether projects should read like concise recruiter summaries or deeper case-study narratives.
4. **Quant/trading positioning:** confirm how explicitly you want to signal fit for quant and trading firms.
5. **Animation tolerance:** confirm whether the current minimal motion direction should remain extremely restrained or allow a bit more entrance choreography.
