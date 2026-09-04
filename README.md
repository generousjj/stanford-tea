# TEA @ Stanford

Official website for **TEA @ Stanford** (Stanford Themed Entertainment
Association) — a student organization exploring how immersive, memorable
experiences are imagined, engineered, produced, and operated.

Live site: <https://generousjj.github.io/stanford-tea/>

## How to run

Requires Node 18+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Updating content

| What | Where |
| --- | --- |
| Events | `src/data/events.ts` |
| Projects | `src/data/projects.ts` |
| Disciplines | `src/data/disciplines.ts` |
| Org copy / pillars | `src/data/org.ts` |
| Join / donate / contact links | `src/lib/links.ts` |
| Project images | `public/projects/` |

Links still set to `#` in `src/lib/links.ts` show a “coming soon” bubble instead
of navigating nowhere. Replace those placeholders with real URLs when ready
(especially `DONATE_URL`, `JOIN_FORM_URL`, and `CONTACT_EMAIL`).

## Deploy

Pushes to `main` build a static export via GitHub Actions and publish to GitHub
Pages (`GITHUB_PAGES=true`, base path `/stanford-tea`).
