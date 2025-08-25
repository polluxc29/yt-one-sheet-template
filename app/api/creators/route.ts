import { NextResponse } from "next/server";
import { creators } from "@/app/data/creators";
import type { OneSheetPayload } from "@/types/youtube";

export async function GET() {
  try {
    // TODO: Replace with actual YouTube API calls
    // const creators = await fetchCreatorsFromYouTubeAPI();
    
    // For now, return demo data
    const response: OneSheetPayload[] = creators;
    
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', // 5 min cache, 10 min stale
      },
    });
  } catch (error) {
    console.error('Error fetching creators:', error);
    return NextResponse.json(
      { error: 'Failed to fetch creators' },
      { status: 500 }
    );
  }
}

// Example of how this will look with real YouTube API integration:
/*
async function fetchCreatorsFromYouTubeAPI(): Promise<OneSheetPayload[]> {
  const creators = await db.creators.findMany(); // Get from your database
  
  return Promise.all(creators.map(async (creator) => {
    const youtube = google.youtube('v3');
    
    // Get channel stats
    const channelResponse = await youtube.channels.list({
      auth: creator.accessToken,
      part: ['snippet', 'statistics'],
      id: [creator.youtubeChannelId],
    });
    
    // Get recent videos
    const videosResponse = await youtube.search.list({
      auth: creator.accessToken,
      part: ['snippet'],
      channelId: creator.youtubeChannelId,
      order: 'date',
      maxResults: 6,
      type: ['video'],
    });
    
    // Get video stats for each video
    const videoIds = videosResponse.data.items?.map(v => v.id?.videoId).filter(Boolean) || [];
    const videoStatsResponse = await youtube.videos.list({
      auth: creator.accessToken,
      part: ['statistics'],
      id: videoIds,
    });
    
    // Transform to OneSheetPayload format
    return {
      profile: {
        avatarUrl: channelResponse.data.items?.[0]?.snippet?.thumbnails?.default?.url || '',
        name: channelResponse.data.items?.[0]?.snippet?.title || '',
        handle: creator.handle,
        links: creator.socialLinks,
      },
      stats: {
        subs: parseInt(channelResponse.data.items?.[0]?.statistics?.subscriberCount || '0'),
        lifetimeViews: parseInt(channelResponse.data.items?.[0]?.statistics?.viewCount || '0'),
        views30d: await calculate30DayViews(creator.youtubeChannelId, creator.accessToken),
        avgViewsLast6: calculateAverageViews(videoStatsResponse.data.items || []),
        topGeos: await getTopGeos(creator.youtubeChannelId, creator.accessToken),
        audience: await getAudience(creator.youtubeChannelId, creator.accessToken),
      },
      videos: transformVideos(videosResponse.data.items || [], videoStatsResponse.data.items || []),
    };
  }));
}
*/
