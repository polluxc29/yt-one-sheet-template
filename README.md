## YouTube One‑Sheet (Demo)

A minimal, Foam‑like public one‑sheet for a creator, built with Next.js App Router and Tailwind v4. This demo hardcodes YouTube stats and recent videos so the UI can be previewed now and wired to real data later.

### What’s included
- **Public one‑sheet route**: `app/c/[creatorId]/[token]/page.tsx`
- **Reusable UI components**: `app/components/StatBlock.tsx`, `app/components/VideoCard.tsx`
- **Site chrome**: simple header/footer in `app/layout.tsx`

### Demo data (matches YouTube API columns)
- **Channel KPIs** (from `channels.list` and computed):
  - Subscribers
  - 30‑day views (computed)
  - Avg views (last 6 videos) (computed)
  - Lifetime views
- **Top geos** (YouTube Analytics): country + percent
- **Audience** (YouTube Analytics): gender split, age buckets
- **Recent videos** (from `search.list` + `videos.list`): title, publishedAt, thumbnail, views

### Getting started
1. Install dependencies
   - `npm install`
2. Run the dev server
   - `npm run dev`
3. Open the demo route
   - Visit `http://localhost:3000/c/demo/preview`

### Project structure
- `app/layout.tsx` — site chrome
- `app/page.tsx` — default starter page
- `app/c/[creatorId]/[token]/page.tsx` — one‑sheet UI (hardcoded data)
- `app/components/StatBlock.tsx` — small stat tile
- `app/components/VideoCard.tsx` — recent video card

### Future integration (drop‑in)
When backend is ready, replace hardcoded data in `app/c/[creatorId]/[token]/page.tsx` with a fetch to your API:

```ts
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/youtube/stats?creatorId=${creatorId}`, { cache: "no-store" });
const { profile, stats, videos } = await res.json();
```

Expected response shape (example):
```json
{
  "profile": {"avatarUrl":"...","name":"...","handle":"@...","links":{"youtube":"...","instagram":"...","email":"mailto:..."}},
  "stats": {
    "subs": 1240000,
    "lifetimeViews": 152345678,
    "views30d": 3420000,
    "avgViewsLast6": 585000,
    "topGeos": [{"country":"US","percent":42}],
    "audience": {"female":38,"male":62,"ages":[{"range":"18-24","percent":28}]}
  },
  "videos": [{"id":"abc123","title":"...","publishedAt":"2025-07-12","thumbnails":{"medium":{"url":"...","width":320,"height":180}},"stats":{"views":712000}}]
}
```

### Notes
- All values are currently hardcoded for demo. No OAuth or API calls are required to run.
- UI aims for a clean, Foam‑like aesthetic and can be extended with brand theming.