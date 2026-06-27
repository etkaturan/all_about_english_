# Database Schema

Supabase (Postgres). All tables use UUID primary keys and have Row Level
Security (RLS) enabled.

## Security model

- **Public reads** go through the `anon` key (browser), gated by RLS policies.
- **All writes & private data** go through the `service_role` key in server-only
  code (`src/lib/supabase/admin.ts`), which bypasses RLS, behind an admin login.
- A table with RLS enabled and **no policy** is fully private (e.g. `purchases`).

## Tables

### lessons
Editable pricing tiers shown on the public site.
| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| name | text | required |
| description | text | |
| base_price | numeric | |
| age_group | text | e.g. kids/teens/adults |
| duration_minutes | integer | |
| is_popular | boolean | highlights the card |
| is_published | boolean | controls public visibility |
| sort_order | integer | display order |
| created_at | timestamptz | |

**RLS:** public can read where `is_published = true`.

### books
| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| title | text | required |
| description | text | |
| price | numeric | |
| cover_image_url | text | |
| preview_pages | integer | free preview count |
| is_published | boolean | |
| sort_order | integer | |
| created_at | timestamptz | |

**RLS:** public can read where `is_published = true`.

### courses
Same shape as books (title, description, price, thumbnail_url, is_published,
sort_order). **RLS:** public can read where `is_published = true`.

### purchases  (PRIVATE)
Manual sales tracking for Phase 1.
| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| item_type | text | 'book' / 'course' / 'lesson' |
| item_id | uuid | the purchased item |
| customer_name | text | |
| customer_contact | text | |
| amount | numeric | |
| status | text | 'pending' / 'paid' |
| notes | text | |
| created_at | timestamptz | |

**RLS:** no policy → admin-only via service_role key.

### profiles
Marks which auth users are admins.
| Column | Type | Notes |
|---|---|---|
| id | uuid | PK, FK → auth.users(id), cascade delete |
| role | text | 'user' / 'admin' |
| created_at | timestamptz | |

**RLS:** users can read their own profile only.