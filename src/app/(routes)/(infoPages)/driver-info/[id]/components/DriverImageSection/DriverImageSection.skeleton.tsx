import { Skeleton } from '@/components/ui/skeleton';

export function DriverImageSectionSkeleton() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-5">
      {/* Driver image skeleton */}
      <Skeleton className="w-full h-[500px] rounded-md" />

      {/* Name and flag skeleton */}
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-48" /> {/* Name */}
        <Skeleton className="h-8 w-20 rounded-md" /> {/* Flag */}
      </div>

      {/* Biography skeleton */}
      <article>
        <Skeleton className="h-8 w-36 mb-2" /> {/* Biography title */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
      </article>
    </div>
  );
}
