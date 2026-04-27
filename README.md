# WorldPool Landing Page

Production-ready landing page for WorldPool, a trust-first, non-custodial savings product built as a World Mini App.

## What’s in this repo
- Full-screen opening hero with a video-style placeholder
- Sections for what it is, who it’s for, how it works, and a bottom CTA
- A lightweight Vite + React + TypeScript frontend scaffold
- Reusable, production-style components and content modules
- Self-hosted Inter typography via `@fontsource/inter`

## Local development

### Requirements
- Node.js 20+
- npm 10+

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

Open the local URL Vite prints in your terminal.

### Build for production
```bash
npm run build
```

### Preview the production build
```bash
npm run preview
```

## Structure
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
├── README.md
├── STRUCTURE.md
├── tsconfig.json
└── vite.config.ts
```

## Notes
- The current homepage in Zo Space is mirrored here as a clean codebase.
- The opening section uses a placeholder video treatment for now.
- Inter is self-hosted in the app bundle, so the page does not depend on external font requests.
- The design keeps the same warm, grounded, World-aligned feel.
