import Image from "next/image";

type Params = { creatorId: string; token: string };

// Hardcoded demo data matching YouTube Data API columns
const demoProfile = {
  avatarUrl: "/avatar.png",
  name: "Marco Alvarez",
  handle: "@marcotech",
  links: {
    youtube: "https://youtube.com/@marcotech",
    instagram: "https://instagram.com/marcotech",
    email: "mailto:marco@example.com",
  },
};

const demoStats = {
  // channels.list(part=statistics)
  subs: 1240000,
  lifetimeViews: 152_345_678,
  // computed: last 30 days views
  views30d: 3_420_000,
  // last 6 videos average from videos.list(part=statistics)
  avgViewsLast6: 585_000,
  // geo and audience from YouTube Analytics (to be wired later)
  topGeos: [
    { country: "US", percent: 42 },
    { country: "IN", percent: 12 },
    { country: "GB", percent: 8 },
    { country: "CA", percent: 6 },
  ],
  audience: {
    female: 38,
    male: 62,
    ages: [
      { range: "13-17", percent: 4 },
      { range: "18-24", percent: 28 },
      { range: "25-34", percent: 36 },
      { range: "35-44", percent: 20 },
      { range: "45+", percent: 12 },
    ],
  },
};

const demoVideos = [
  {
    id: "abc123",
    title: "I Switched to Linux for 30 Days",
    publishedAt: "2025-07-12",
    thumbnails: { medium: { url: "/thumb1.jpg", width: 320, height: 180 } },
    stats: { views: 712000, likes: 34000, comments: 1200 },
  },
  {
    id: "def456",
    title: "Building a $500 PC for AI Projects",
    publishedAt: "2025-06-29",
    thumbnails: { medium: { url: "/thumb2.jpg", width: 320, height: 180 } },
    stats: { views: 534000, likes: 22000, comments: 940 },
  },
  {
    id: "ghi789",
    title: "Top 10 VS Code Extensions in 2025",
    publishedAt: "2025-06-10",
    thumbnails: { medium: { url: "/thumb3.jpg", width: 320, height: 180 } },
    stats: { views: 469000, likes: 18000, comments: 610 },
  },
];

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 shadow-sm p-4">
      <div className="text-[11px] uppercase tracking-wide text-foreground/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
      {sub ? <div className="mt-1 text-xs text-foreground/60">{sub}</div> : null}
    </div>
  );
}

export default function OneSheetPage({ params }: { params: Params }) {
  const { creatorId } = params;

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-start gap-6">
        <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-black/5 dark:ring-white/10">
          <Image src={demoProfile.avatarUrl} alt="Avatar" fill className="object-cover" />
        </div>
        <div className="flex-1">
          <div className="text-2xl font-semibold tracking-tight">{demoProfile.name}</div>
          <div className="text-sm text-foreground/60">{demoProfile.handle} · ID: {creatorId}</div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <a className="px-3 py-1 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5" href={demoProfile.links.youtube} target="_blank" rel="noreferrer">YouTube</a>
            <a className="px-3 py-1 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5" href={demoProfile.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a className="px-3 py-1 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5" href={demoProfile.links.email}>Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs px-3 py-2 rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5">Copy link</button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Subscribers" value={new Intl.NumberFormat().format(demoStats.subs)} />
        <StatCard label="30-day views" value={new Intl.NumberFormat().format(demoStats.views30d)} />
        <StatCard label="Avg views (last 6)" value={new Intl.NumberFormat().format(demoStats.avgViewsLast6)} />
        <StatCard label="Lifetime views" value={new Intl.NumberFormat().format(demoStats.lifetimeViews)} />
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-sm font-semibold tracking-tight">Recent videos</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {demoVideos.map((v) => (
              <a key={v.id} className="group rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-md transition-shadow" href={`https://youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer">
                <div className="relative aspect-video w-full bg-black/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.thumbnails.medium.url} alt={v.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-3">
                  <div className="line-clamp-2 text-sm font-medium group-hover:underline">{v.title}</div>
                  <div className="mt-1 text-xs text-foreground/60 flex items-center gap-3">
                    <span>{new Intl.NumberFormat().format(v.stats.views)} views</span>
                    <span>·</span>
                    <span>{new Date(v.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold tracking-tight">Top geos</h2>
            <div className="mt-3 space-y-2">
              {demoStats.topGeos.map((g) => (
                <div key={g.country} className="flex items-center gap-3">
                  <div className="w-10 text-xs text-foreground/60">{g.country}</div>
                  <div className="flex-1 h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                    <div className="h-full bg-black/70 dark:bg-white/70" style={{ width: `${g.percent}%` }} />
                  </div>
                  <div className="w-10 text-right text-xs">{g.percent}%</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-tight">Audience</h2>
            <div className="mt-3 space-y-3">
              <div className="text-xs text-foreground/60">Male {demoStats.audience.male}% · Female {demoStats.audience.female}%</div>
              <div className="space-y-2">
                {demoStats.audience.ages.map((a) => (
                  <div key={a.range} className="flex items-center gap-3">
                    <div className="w-16 text-xs text-foreground/60">{a.range}</div>
                    <div className="flex-1 h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                      <div className="h-full bg-black/70 dark:bg-white/70" style={{ width: `${a.percent}%` }} />
                    </div>
                    <div className="w-8 text-right text-xs">{a.percent}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


