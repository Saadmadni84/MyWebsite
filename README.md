# Saad Madni — Portfolio

A premium dark portfolio for Saad Madni, focused on software engineering, backend systems, distributed architecture, and applied AI/ML.

## Overview

This project is a custom single-page portfolio built with Next.js and React. It presents:

- an editorial hero and about section
- verified experience information
- a curated projects section sourced from `Saadmadni84`
- compact skills and credentials sections
- direct contact links

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Geist Sans + Geist Mono

## Current Sections

- Hero
- About
- Experience
- Projects
- Skills & Tools
- Credentials
- Contact

## Experience Included

- **PrepAIro** — Software Engineer Intern
- **Apache** — Open Source Contributor

## Projects Included

The Projects section is intentionally restricted to verified work from:

- GitHub: https://github.com/Saadmadni84

It currently highlights projects such as:

- RecSystem
- Shifa
- Swasth-AI
- FixMyCity
- realtime-reconciliation-engine
- SentinelSOC
- Spring-boot-kafka-real-time-tracking

Verified live project links currently used in the portfolio:

- Swasth-AI — https://swasth-ai-jc2f.vercel.app/hero
- FixMyCity — https://fixmycitysm.vercel.app
- The-Salted-Olive — https://thesaltedolive.c36.airoapp.ai/

## Credentials Source

The Credentials section is data-driven and reads certificate files from the public directory. It supports these folders:

- `public/credentials/`
- `public/creditial/`
- `public/certificates/`

If an official verification URL is added later, it can be used in place of the local file link.

## Contact Links

- GitHub — https://github.com/Saadmadni84
- LinkedIn — https://www.linkedin.com/in/saadmadni/
- LeetCode — https://leetcode.com/u/saadmadni/
- YouTube — https://www.youtube.com/@saadmadni3603
- Email — saadmadni84@gmail.com

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/
  app/
  components/
    layout/
    motion/
    navigation/
    sections/
  data/
public/
  certificates/
  credentials/
```

## Notes

- The visual system is intentionally minimal, dark, and whitespace-heavy.
- Cards and section content are designed to stay subtle rather than dashboard-like.
- Credentials are rendered from uploaded certificate files.
- Project links prefer verified live deployments when available and otherwise fall back to the exact repository URL.
