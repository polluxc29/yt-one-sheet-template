// Subset of YouTube Data API v3 types we use in the demo

export type YouTubeThumbnail = {
  url: string;
  width?: number;
  height?: number;
};

export type YouTubeThumbnails = {
  default?: YouTubeThumbnail;
  medium?: YouTubeThumbnail;
  high?: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
};

export type YouTubeVideoSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle?: string;
};

export type YouTubeVideoStatistics = {
  viewCount?: string;
  likeCount?: string;
  favoriteCount?: string;
  commentCount?: string;
};

export type YouTubeVideo = {
  kind: "youtube#video";
  id: string;
  snippet: YouTubeVideoSnippet;
  statistics?: YouTubeVideoStatistics;
};

export type YouTubeChannelStatistics = {
  viewCount?: string;
  subscriberCount?: string;
  hiddenSubscriberCount?: boolean;
  videoCount?: string;
};

export type YouTubeChannelSnippet = {
  title: string;
  description?: string;
  customUrl?: string;
  publishedAt?: string;
  thumbnails?: YouTubeThumbnails;
};

export type YouTubeChannel = {
  kind: "youtube#channel";
  id: string;
  snippet?: YouTubeChannelSnippet;
  statistics?: YouTubeChannelStatistics;
};

// Simplified Analytics aggregates (not official types, but shaped to match expected responses)
export type AudienceGenderBreakdown = {
  male?: number; // percent 0-100
  female?: number; // percent 0-100
};

export type AudienceAgeBucket = {
  range: string; // e.g. "18-24"
  percent: number; // 0-100
};

export type TopGeo = {
  country: string; // ISO-2
  percent: number; // 0-100
};

export type OneSheetProfile = {
  avatarUrl: string;
  name: string;
  handle: string;
  links: { youtube?: string; instagram?: string; email?: string };
};

export type OneSheetStats = {
  subs: number;
  lifetimeViews: number;
  views30d: number;
  avgViewsLast6: number;
  topGeos: TopGeo[];
  audience: { male?: number; female?: number; ages: AudienceAgeBucket[] };
};

export type OneSheetVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnails: { medium?: YouTubeThumbnail };
  stats: { views: number; likes?: number; comments?: number };
};

export type OneSheetPayload = {
  profile: OneSheetProfile;
  stats: OneSheetStats;
  videos: OneSheetVideo[];
};


