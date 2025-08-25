## YouTube One‑Sheet (Demo)

A minimal, Foam‑like public one‑sheet for creators, built with Next.js App Router and Tailwind v4. This demo shows multiple creator profiles in a roster view and individual one-sheets, ready for YouTube API integration.

### What's included
- **Public one‑sheet route**: `app/c/[creatorId]/[token]/page.tsx`
- **Creator roster dashboard**: `app/roster/page.tsx` - Grid view of all creators
- **API endpoint**: `app/api/creators/route.ts` - Returns creator data (currently demo, ready for YouTube API)
- **Reusable UI components**: 
  - `app/components/StatBlock.tsx` - Stat tiles
  - `app/components/VideoCard.tsx` - Video cards  
  - `app/components/CreatorCard.tsx` - Compact creator cards for roster
- **Type definitions**: `types/youtube.ts` - YouTube Data API v3 types
- **Demo data**: `app/data/creators.ts` - Sample creator profiles

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
3. View the demo
   - **Roster**: Visit `http://localhost:3000/roster` (default)
   - **Individual one-sheet**: Visit `http://localhost:3000/c/demo/preview`

### Project structure
- `app/layout.tsx` — minimal layout (no header/footer)
- `app/page.tsx` — redirects to `/roster`
- `app/roster/page.tsx` — creator roster dashboard
- `app/c/[creatorId]/[token]/page.tsx` — individual one‑sheet UI
- `app/api/creators/route.ts` — API endpoint for creator data
- `app/components/` — reusable UI components
- `types/youtube.ts` — TypeScript types matching YouTube API
- `app/data/creators.ts` — demo creator data

### Current system architecture
```
Frontend (Next.js) ←→ API Endpoint (/api/creators) ←→ Demo Data
                                    ↓
                              YouTube API (ready to integrate)
```

- **Roster page** fetches from `/api/creators`
- **API currently returns** hardcoded demo data
- **Ready for backend** - just uncomment YouTube API code in the route

### Future integration (drop‑in)
When backend is ready, the API route will:
1. **Fetch creator profiles** from your database
2. **Call YouTube Data API v3** for each creator:
   - `channels.list` (statistics, snippet)
   - `search.list` + `videos.list` (recent videos)
   - `analytics.reports` (geographic, demographic data)
3. **Return data** in the exact format the UI expects

Expected API response shape:
```json
[
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
]
```

### Features
- **Responsive grid layout** for creator roster
- **Compact creator cards** with key metrics
- **Individual one-sheets** with detailed stats
- **Copy link functionality** for sharing
- **Type-safe** throughout with YouTube API types
- **Server-side rendering** with Next.js App Router
- **Built-in caching** and error handling

### Notes
- All values are currently hardcoded for demo. No OAuth or API calls are required to run.
- UI aims for a clean, Foam‑like aesthetic and can be extended with brand theming.
- The roster automatically populates from the API endpoint.
- When backend is ready, creators will be fetched from YouTube API in real-time.