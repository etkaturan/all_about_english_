# All About English

A premium website for **Karyna** — private English tutor to 121K+ followers —
to sell lessons, books, and courses to Russian, Ukrainian, and German speakers.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

---

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Secrets live in `.env.local` (git-ignored, never committed).
Copy the template to create your own:

```bash
cp .env.example .env.local
```

Then fill in real values. See `.env.example` for the full list of required keys.

## Project structure

src/

app/          App Router pages, layout, global styles

components/   Reusable UI sections (Nav, Hero, Lessons, etc.)

public/         Static assets (logo, images)

docs/           Architecture, changelog, roadmap


## Documentation

- [Architecture & tech decisions](docs/ARCHITECTURE.md)
- [Changelog](docs/CHANGELOG.md)
- [Roadmap](docs/ROADMAP.md)

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the local development server    |
| `npm run build` | Build the production bundle           |
| `npm run start` | Run the production build locally      |
| `npm run lint`  | Run ESLint code-quality checks        |