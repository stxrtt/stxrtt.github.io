# Repo Structure

This repo is organised as a small, production-style marketing frontend:

```text
worldpool-landing/
├── public/
├── src/
│   ├── components/
│   │   ├── hero/
│   │   │   └── HeroVideo.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Section.tsx
│   │   └── sections/
│   │       ├── CtaSection.tsx
│   │       ├── HowItWorksSection.tsx
│   │       ├── WhatItIsSection.tsx
│   │       └── WhoItIsForSection.tsx
│   ├── content/
│   │   └── siteContent.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── STRUCTURE.md
├── tsconfig.json
└── vite.config.ts
```

## Structure principles
- Keep content separate from layout logic.
- Keep reusable section wrappers and layout primitives small and focused.
- Keep each page section in its own component.
- Keep design tokens and shared styling in one stylesheet until complexity justifies a larger system.
- Keep the page composition in `App.tsx` minimal and declarative.

## Current architecture
- `content/siteContent.ts` stores structured copy and section data.
- `components/layout/` contains shared layout primitives.
- `components/hero/` contains the opening video-style hero.
- `components/sections/` contains the marketing sections.
