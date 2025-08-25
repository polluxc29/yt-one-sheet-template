import Image from "next/image";
import Link from "next/link";
import type { OneSheetPayload } from "@/types/youtube";

export function CreatorCard({ creator, creatorId }: { creator: OneSheetPayload; creatorId: string }) {
  return (
    <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-black/5 dark:ring-white/10">
          <Image src={creator.profile.avatarUrl} alt="Avatar" fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-lg font-semibold tracking-tight truncate">{creator.profile.name}</div>
          <div className="text-sm text-foreground/60">{creator.profile.handle}</div>
          <div className="mt-2 flex flex-wrap gap-1 text-xs">
            {creator.profile.links.youtube && (
              <a className="px-2 py-1 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5" href={creator.profile.links.youtube} target="_blank" rel="noreferrer">YouTube</a>
            )}
            {creator.profile.links.instagram && (
              <a className="px-2 py-1 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5" href={creator.profile.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="text-center">
          <div className="text-lg font-semibold">{new Intl.NumberFormat().format(creator.stats.subs)}</div>
          <div className="text-xs text-foreground/60">Subs</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold">{new Intl.NumberFormat().format(creator.stats.views30d)}</div>
          <div className="text-xs text-foreground/60">30d views</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold">{new Intl.NumberFormat().format(creator.stats.avgViewsLast6)}</div>
          <div className="text-xs text-foreground/60">Avg views</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-xs text-foreground/60 mb-2">Top geo: {creator.stats.topGeos[0]?.country} ({creator.stats.topGeos[0]?.percent}%)</div>
        <div className="text-xs text-foreground/60">Audience: {creator.stats.audience.male}% M / {creator.stats.audience.female}% F</div>
      </div>

      <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10">
        <div className="text-xs text-foreground/60 mb-2">Recent videos</div>
        <div className="space-y-2">
          {creator.videos.slice(0, 2).map((video) => (
            <div key={video.id} className="flex items-center gap-2 text-xs">
              <div className="w-8 h-5 bg-black/5 dark:bg-white/10 rounded" />
              <div className="flex-1 min-w-0">
                <div className="truncate font-medium">{video.title}</div>
                <div className="text-foreground/60">{new Intl.NumberFormat().format(video.stats.views)} views</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10">
        <Link 
          href={`/c/${creatorId}/preview`}
          className="block w-full text-center text-xs px-3 py-2 rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 transition-colors"
        >
          View profile
        </Link>
      </div>
    </div>
  );
}
