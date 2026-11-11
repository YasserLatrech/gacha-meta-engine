# ASCALON.GG — AGENT SYNC PLAYBOOK

This companion control plane (`ascalon-agent-ops`) is designed **specifically for AI Agents** (Antigravity, Claude Code, GPT) so the public production repository (`../gacha-meta-engine`) remains 100% pure and never suffers from blind scraper overwrites.

---

## 1. Fast Agent Workflow (3 Commands)

1. **Scan Live AppMedia & Generate Structured Diff Queue**:
   ```bash
   npm run scan
   ```
   Compares 6 live AppMedia surfaces (`https://appmedia.jp/starsavior`, Coupon Codes `79521875`, Character Roster `79517909` + `80161120`, Arcana Encyclopedia `79519163`, Strongest/Reroll Tier Lists `79517270` & `79517015`, and Home Portal `https://appmedia.jp/`) against `../gacha-meta-engine`.

2. **Read Only Actionable Pending Items**:
   ```bash
   npm run brief
   ```
   Outputs a compact Markdown brief (`data/latest-agent-brief.md`) containing ONLY `PENDING_AGENT` items sorted by priority (`P0_CRITICAL` -> `P1_HIGH` -> `P2_NORMAL`), complete with:
   - Exact `sourceUrl` on AppMedia
   - Exact `targetFiles` in `../gacha-meta-engine`
   - Added / Expired / Changed items
   - `requiresBannerTranslation` flag + raw Japanese image URLs requiring English AI localization
   - Official English Glossary hints

3. **Judge, Apply to `gacha-meta-engine`, Verify, and Close Queue Item**:
   - Inspect the upstream page to verify context (discard ads/PR noise, keep 100% real game updates).
   - If `requiresBannerTranslation: true`, localize the Japanese banner text into crisp English WebP before referencing it.
   - Apply the update in `../gacha-meta-engine`, run `npx vitest run && npm run build`, then record your decision:
   ```bash
   npx tsx src/presentation/cli.ts decide diff:starsavior:promo-codes APPLIED "Added new code in commit xyz"
   ```
   *(If an item is pure upstream ad/PR noise, mark it `IGNORED`. It stays muted until AppMedia changes that section's SHA-256 hash again!)*

---

## 2. HTTP Endpoints & Visual Inspector (`http://localhost:3006`)

Start the control plane server with `npm start`:
- `GET  http://localhost:3006/` — Split-Pane Agent Queue Inspector UI
- `GET  http://localhost:3006/api/agent/queue` — Full Zod-validated JSON queue state
- `GET  http://localhost:3006/api/agent/brief` — Token-efficient Markdown execution brief
- `POST http://localhost:3006/api/agent/scan` — Trigger live 6-surface AppMedia diff scan
- `POST http://localhost:3006/api/agent/decision` — `{ "id": "...", "status": "APPLIED" | "IGNORED" | "PENDING_AGENT", "note": "..." }`
