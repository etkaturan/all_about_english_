# Architecture & Tech Decisions

This document records *what* we chose and *why*, so the reasoning isn't lost.

## Stack

| Layer        | Choice                  | Why                                                              |
| ------------ | ----------------------- | --------------------------------------------------------------- |
| Framework    | Next.js 16 (App Router) | One codebase for frontend + backend; hireable; great for SEO    |
| Language     | TypeScript              | Type safety; catches bugs early; industry standard              |
| Styling      | Tailwind CSS v4         | Fast, consistent styling; theme defined in CSS via `@theme`     |
| Fonts        | next/font (self-hosted) | Fraunces (serif headings) + Work Sans (sans body); fast/private |
| Hosting      | Vercel (planned)        | Made by Next.js team; free tier; auto-deploy from GitHub        |
| Database     | Supabase (planned)      | Postgres + storage + auth; generous free tier                   |

## Server vs. client components

Next.js components are **server components by default** (render on the server,
ship zero JS). Interactive components must opt in with `"use client"` at the top.

Current client components: `Cursor`, `Nav`, `Lessons`, `BookShowcase`
(all use state or browser events). Static: `Hero`, `About`, `Footer`.

## Design system

Design tokens are defined as CSS variables in `src/app/globals.css` and exposed
as Tailwind utilities via `@theme inline`.

| Token            | Light value | Purpose               |
| ---------------- | ----------- | --------------------- |
| `--ivory`        | `#f4f1ea`   | Background            |
| `--navy`         | `#1a1f2e`   | Primary text          |
| `--royal`        | `#2a4a9c`   | Accent / brand        |
| `--muted`        | `#5a6072`   | Secondary text        |

Dark mode overrides these under `html.dark`, toggled by the nav switch.
Because everything references the variables, the whole site re-themes from
~8 lines.

## Security

- Secrets only in `.env.local` (git-ignored via `.env*`).
- `.env.example` is the committed template (exception: `!.env.example`).
- `NEXT_PUBLIC_` prefix = safe to expose to the browser; no prefix = server-only.

## Deferred / known gaps

- **Waving flag background**: deferred. Plan is to use an AI-generated flag
  video + scroll-driven motion later, instead of faking cloth in canvas.
- **Real Instagram feed**: requires Instagram Graph API (Business account +
  Meta app review). Phase 1 uses admin-curated posts instead.
- **Automated payments**: Phase 1 uses Telegram/WhatsApp deep links; automated
  checkout is a later phase.