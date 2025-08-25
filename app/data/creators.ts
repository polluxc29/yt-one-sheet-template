import type { OneSheetPayload } from "@/types/youtube";

export const creators: OneSheetPayload[] = [
  {
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
    ],
  },
  {
    profile: {
      avatarUrl: "/avatar.png",
      name: "Sarah Chen",
      handle: "@sarahchen",
      links: {
        youtube: "https://youtube.com/@sarahchen",
        instagram: "https://instagram.com/sarahchen",
        email: "mailto:sarah@example.com",
      },
    },
    stats: {
      subs: 890000,
      lifetimeViews: 98765432,
      views30d: 2100000,
      avgViewsLast6: 420000,
      topGeos: [
        { country: "US", percent: 38 },
        { country: "CA", percent: 15 },
        { country: "AU", percent: 12 },
        { country: "GB", percent: 10 },
      ],
      audience: {
        female: 65,
        male: 35,
        ages: [
          { range: "13-17", percent: 8 },
          { range: "18-24", percent: 32 },
          { range: "25-34", percent: 28 },
          { range: "35-44", percent: 18 },
          { range: "45+", percent: 14 },
        ],
      },
    },
    videos: [
      {
        id: "xyz789",
        title: "10 Minute Morning Routine for Productivity",
        publishedAt: "2025-07-15",
        thumbnails: { medium: { url: "/thumb3.jpg", width: 320, height: 180 } },
        stats: { views: 890000, likes: 45000, comments: 2100 },
      },
      {
        id: "uvw012",
        title: "How I Organize My Digital Life",
        publishedAt: "2025-07-01",
        thumbnails: { medium: { url: "/thumb4.jpg", width: 320, height: 180 } },
        stats: { views: 650000, likes: 32000, comments: 1800 },
      },
    ],
  },
  {
    profile: {
      avatarUrl: "/avatar.png",
      name: "Alex Rivera",
      handle: "@alexrivera",
      links: {
        youtube: "https://youtube.com/@alexrivera",
        instagram: "https://instagram.com/alexrivera",
        email: "mailto:alex@example.com",
      },
    },
    stats: {
      subs: 2100000,
      lifetimeViews: 234567890,
      views30d: 5800000,
      avgViewsLast6: 890000,
      topGeos: [
        { country: "US", percent: 45 },
        { country: "MX", percent: 18 },
        { country: "ES", percent: 12 },
        { country: "BR", percent: 8 },
      ],
      audience: {
        female: 45,
        male: 55,
        ages: [
          { range: "13-17", percent: 6 },
          { range: "18-24", percent: 25 },
          { range: "25-34", percent: 42 },
          { range: "35-44", percent: 20 },
          { range: "45+", percent: 7 },
        ],
      },
    },
    videos: [
      {
        id: "mno345",
        title: "The Future of AI in Gaming",
        publishedAt: "2025-07-18",
        thumbnails: { medium: { url: "/thumb5.jpg", width: 320, height: 180 } },
        stats: { views: 1200000, likes: 67000, comments: 3200 },
      },
      {
        id: "pqr678",
        title: "Building a Gaming PC in 2025",
        publishedAt: "2025-07-05",
        thumbnails: { medium: { url: "/thumb6.jpg", width: 320, height: 180 } },
        stats: { views: 980000, likes: 54000, comments: 2800 },
      },
    ],
  },
];
