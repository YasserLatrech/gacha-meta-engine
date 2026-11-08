# META.GG — Multi-Game Gacha Intelligence, Asian-Server Foresight & Encyclopedic Database

A high-density, zero-hallucination Gacha encyclopedic wiki & foresight engine built with **Next.js 15 (App Router)**, **PostgreSQL 16 (`JSONB` + Relational)**, **Redis 7**, **Prisma 6**, and **Strict TypeScript / Zod**.

## Core Architecture & Features

1. **2-Tier AppMedia-Inspired Information Architecture**:
   - **Multi-Game Portal Directory (`/`)**: Clean entry hub indexing all supported Gacha wikis (*Heaven Burns Red*, *Uma Musume: Pretty Derby*, *Sword of Convallaria*), global instant search, and live banner alerts without cluttering the homepage.
   - **Dedicated Game Wiki Hub (`/[gameSlug]`)**: Structured 3-column encyclopedic interface (`Left Wiki Sidebar` + `Center Topic View` + `Right Sticky Foresight & Ad Rail`) with 5 dedicated interactive views:
     - **Strongest Character Tier List (`?tab=tier-list`)**: 2D Role-Column Tier Matrix (`SSS` / `SS` / `S` / `A` × Role Columns), Asian vs. Global server scope toggle, element filters, and detailed Character Breakdown Cards.
     - **Weapons, Support Cards, Orbs & Tarots (`?tab=weapons`)**: Ranked equipment tier list with exact stat dictionaries and Best-in-Slot holders.
     - **Monsters, Bosses & Raid Strategy Guides (`?tab=bosses`)**: Boss HP/DP/Shield stats, elemental weaknesses/resistances, turn-by-turn attack rotation tables, and step-by-step clear walkthroughs.
     - **Asian -> Global Banner Schedule & Pull Calculator (`?tab=banners`)**: Chronological future banner roadmap paired with an interactive currency & spark pity calculator.
     - **Visual Stat Comparator & Combat Damage Simulator (`?tab=compare`)**: Side-by-side 10-metric normalized stat comparison bars and exact multi-bucket buff-stacking damage calculator.
   - **Dedicated Character Build Pages (`/[gameSlug]/units/[unitSlug]`)**: Programmatic SEO/GEO pages with `Schema.org/FAQPage` JSON-LD, verified skill multipliers, SP/Energy costs, Limit Break passives, and team synergies.

2. **Zero-CLS Ad-Optimized Layout (`0.00 CLS`)**:
   - Pre-reserved fixed-dimension ad containers across Desktop (`728×90` Leaderboard, `300×600` Sticky Right Rail, `300×250` In-Article) and Mobile (`320×50` Sticky Footer).

3. **Strict GitFlow Branching Structure**:
   - `main` — Production release branch
   - `develop` — Integration branch
   - `feat/core-db-schema` — Prisma schema, Zod validation, and pure math/foresight engine
   - `feat/asian-scraper-adapters` — Verified Asian-server data adapters (`hbr.quest`, `gametora.com`, `convallaria.gamekee.com`) & SHA-256 audited seed pipeline
   - `feat/foresight-math-engine` — Hydrated query service, Redis L2 caching, and Vitest unit test suite
   - `feat/appmedia-wiki-ui` — Next.js 15 App Router pages, interactive calculators, and SEO/JSON-LD routes

## Quick Start

```bash
# 1. Start PostgreSQL 16 (port 5439) and Redis 7 (port 6389)
docker compose up -d

# 2. Push Prisma schema and run Zod-validated Asian-server database seed
npm run db:push
npm run db:seed

# 3. Run unit tests & start server on port 3005
npm test
npm run dev
```
