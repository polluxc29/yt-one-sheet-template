import { OneSheetPayload } from "@/types/youtube";

export const demoPayload: OneSheetPayload = {
  profile: {
    avatarUrl: "/avatar.png",
    name: "Marco Alvarez",
    handle: "@marcotech",
    links: {
      youtube: "https://youtube.com/@marcotech",
      instagram: "https://instagram.com/marcotech",
      email: "mailto:marco@example.com",
    },
  },
  stats: {
    subs: 1240000,
    lifetimeViews: 152345678,
    views30d: 3420000,
    avgViewsLast6: 585000,
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
  },
  videos: [
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
  ],
};


