import { CreatorCard } from "@/app/components/CreatorCard";
import type { OneSheetPayload } from "@/types/youtube";

async function getCreators(): Promise<OneSheetPayload[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/creators`, { 
      next: { revalidate: 300 } // 5 minute revalidation
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch creators');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching creators:', error);
    // Fallback to empty array if API fails
    return [];
  }
}

export default async function RosterPage() {
  const creators = await getCreators();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Creator Roster</h1>
        <p className="text-foreground/60 mt-2">Manage your YouTube creator partnerships and view performance metrics</p>
      </div>

      {creators.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-foreground/60">No creators found. Add some creators to get started.</div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((creator, index) => (
              <CreatorCard 
                key={index} 
                creator={creator} 
                creatorId={creator.profile.handle.replace('@', '')} 
              />
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5">
            <h2 className="text-lg font-semibold mb-3">Roster Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-2xl font-bold">{creators.length}</div>
                <div className="text-foreground/60">Total Creators</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {new Intl.NumberFormat().format(
                    creators.reduce((sum, c) => sum + c.stats.subs, 0)
                  )}
                </div>
                <div className="text-foreground/60">Combined Subs</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {new Intl.NumberFormat().format(
                    creators.reduce((sum, c) => sum + c.stats.views30d, 0)
                  )}
                </div>
                <div className="text-foreground/60">30d Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {new Intl.NumberFormat().format(
                    Math.round(
                      creators.reduce((sum, c) => sum + c.stats.avgViewsLast6, 0) / creators.length
                    )
                  )}
                </div>
                <div className="text-foreground/60">Avg Views</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
