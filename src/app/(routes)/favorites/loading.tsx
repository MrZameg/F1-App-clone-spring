import { Skeleton } from '@/components/ui/skeleton';

export default function FavoritesLoading() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-4xl font-bold mt-4 mb-12 text-center">
        <Skeleton className="h-10 w-64 mx-auto" />
      </div>

      <div className="w-full flex flex-col gap-10">
        {/* Favorite Drivers Section */}
        <div className="w-full flex flex-col gap-3 border border-border rounded-lg p-2">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={`driver-${i}`}
                className="flex w-full flex-col md:flex-row gap-3 not-last:border-b border-border py-5"
              >
                <div className="w-full md:w-1/2 flex items-center gap-2">
                  <Skeleton className="w-[300px] h-[300px] rounded-lg" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-10 w-10" />
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-36" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <Skeleton className="h-4 w-16 mb-3" />
                  <Skeleton className="w-full h-[150px] mb-4" />
                  <Skeleton className="h-4 w-20 mb-3" />
                  <Skeleton className="w-full h-[150px]" />
                </div>
              </div>
            ))}
        </div>

        <div className="w-full flex flex-col gap-3 border border-border rounded-lg p-2">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={`team-${i}`}
                className="flex w-full flex-col md:flex-row gap-3 not-last:border-b border-border py-5"
              >
                <div className="w-full md:w-1/2 flex items-center gap-2">
                  <Skeleton className="w-[300px] h-[300px] rounded-lg" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-10 w-10" />
                    <Skeleton className="h-4 w-36" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <Skeleton className="h-4 w-16 mb-3" />
                  <Skeleton className="w-full h-[150px]" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
