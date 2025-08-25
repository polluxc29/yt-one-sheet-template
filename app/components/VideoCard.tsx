type Video = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnails: { medium: { url: string; width: number; height: number } };
  stats: { views: number; likes?: number; comments?: number };
};

export function VideoCard({ video }: { video: Video }) {
  return (
    <a className="group rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-md transition-shadow" href={`https://youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">
      <div className="relative aspect-video w-full bg-black/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={video.thumbnails.medium.url} alt={video.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-3">
        <div className="line-clamp-2 text-sm font-medium group-hover:underline">{video.title}</div>
        <div className="mt-1 text-xs text-foreground/60 flex items-center gap-3">
          <span>{new Intl.NumberFormat().format(video.stats.views)} views</span>
          <span>·</span>
          <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </a>
  );
}


