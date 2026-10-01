# Youssef Saidani — Retro Portfolio

A modular React + Vite portfolio built around a late-90s / early-2000s desktop web aesthetic: beige canvas, blue title bars, beveled navigation, bordered panels and compact data tables.

## Architecture

```text
src/
├── App.jsx                    # Composition root
├── main.jsx                   # React bootstrap
├── components/
│   ├── common/                # Reusable UI primitives
│   ├── layout/                # Site chrome
│   └── sections/              # Portfolio sections
├── data/                      # Content/configuration only
├── hooks/                     # Reusable React hooks
└── styles/                    # Global theme + layout rules
```

The content is intentionally separated from presentation. Projects, experience, education, skills, navigation and profile information live in `src/data/`, while the React components focus on rendering.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Quality checks

```bash
npm run lint
npm run format
```
