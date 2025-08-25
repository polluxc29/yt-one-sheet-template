import Image from "next/image";
import { demoPayload } from "@/app/data/demo";
import type { OneSheetPayload } from "@/types/youtube";
import { CopyLinkButton } from "@/app/components/CopyLinkButton";

type Params = { creatorId: string; token: string };

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
  const payload: OneSheetPayload = demoPayload;

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-start gap-6">
        <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-black/5 dark:ring-white/10">
          <Image src={payload.profile.avatarUrl} alt="Avatar" fill className="object-cover" />
        </div>
        <div className="flex-1">
          <div className="text-2xl font-semibold tracking-tight">{payload.profile.name}</div>
          <div className="text-sm text-foreground/60">{payload.profile.handle} · ID: {creatorId}</div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {payload.profile.links.youtube ? (
              <a className="px-3 py-1 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5" href={payload.profile.links.youtube} target="_blank" rel="noreferrer">YouTube</a>
            ) : null}
            {payload.profile.links.instagram ? (
              <a className="px-3 py-1 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5" href={payload.profile.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
            ) : null}
            {payload.profile.links.email ? (
              <a className="px-3 py-1 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5" href={payload.profile.links.email}>Contact</a>
            ) : null}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CopyLinkButton url={`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/c/${creatorId}/preview`} />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Subscribers" value={new Intl.NumberFormat().format(payload.stats.subs)} />
        <StatCard label="30-day views" value={new Intl.NumberFormat().format(payload.stats.views30d)} />
        <StatCard label="Avg views (last 6)" value={new Intl.NumberFormat().format(payload.stats.avgViewsLast6)} />
        <StatCard label="Lifetime views" value={new Intl.NumberFormat().format(payload.stats.lifetimeViews)} />
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-sm font-semibold tracking-tight">Recent videos</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {payload.videos.map((v) => (
              <a key={v.id} className="group rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-md transition-shadow" href={`https://youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer">
                <div className="relative aspect-video w-full bg-black/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.thumbnails.medium ? v.thumbnails.medium.url : ""} alt={v.title} className="h-full w-full object-cover" />
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
              {payload.stats.topGeos.map((g) => (
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
              <div className="text-xs text-foreground/60">Male {payload.stats.audience.male}% · Female {payload.stats.audience.female}%</div>
              <div className="space-y-2">
                {payload.stats.audience.ages.map((a) => (
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


