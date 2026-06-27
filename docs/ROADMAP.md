# Roadmap

Phased plan. Each phase aims to produce something usable.


## [0.2.0] — 2026-06-27

### Added
- Supabase backend: 5 tables (lessons, books, courses, purchases, profiles) with RLS.
- Auth: Supabase SSR, proxy.ts session refresh, email/password login.
- Protected /admin area with admin-role guard (defense-in-depth re-checks in actions).
- Lessons CRUD: create, edit, delete from admin; changes revalidate the public site.
- Site-wide custom cursor (moved to root layout).

### Known issues
- Lesson pricing: admin stores a single base_price, but the public site applies
  age/length multipliers, so "60 min price" is a base that gets scaled. Needs a
  unified pricing model (decide per-duration prices vs. admin-controlled multipliers).

  
## Phase 1 — Launchable MVP (in progress)

- [x] Landing page with all core sections
- [x] Theming + dark mode
- [ ] "Book a lesson" / "Buy" → pre-filled Telegram/WhatsApp deep links
- [ ] Real content: logo, prices, book covers, photos, social handles
- [ ] Responsive / mobile polish
- [ ] Scroll-reveal animations
- [ ] Deploy to Vercel

## Phase 2 — Interactivity & admin

- [ ] Separate pages: `/lessons`, `/books`, `/courses`, `/about`
- [ ] 3D book preview with locked pages (unlock after payment)
- [ ] Real booking flow (pick a time)
- [ ] Admin login + dashboard
- [ ] Lesson calendar / schedule management
- [ ] Sales tracking
- [ ] Database (Supabase): books, lessons, courses, purchases

## Phase 3 — Advanced

- [ ] Automated payments (unlock content automatically)
- [ ] Student accounts (track lessons, buy courses in-app)
- [ ] Social analytics hub (Instagram/YouTube/TikTok APIs)
- [ ] German classes + group lessons
- [ ] Waving flag background (AI video + scroll motion)