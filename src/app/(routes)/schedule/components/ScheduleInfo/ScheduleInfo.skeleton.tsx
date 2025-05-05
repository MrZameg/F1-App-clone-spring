import { Skeleton } from '@/components/ui/skeleton';

export default function ScheduleInfoSkeleton() {
  return (
    <div className="w-full flex gap-4 flex-col md:flex-row">
      {/* ScheduleInfoImage skeleton */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <Skeleton className="w-full h-[500px] rounded-lg" />
        <span className="w-full flex items-center gap-2 mt-4">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-16" />
        </span>
      </div>

      {/* ScheduleInfoTable skeleton */}
      <div className="w-full md:w-1/2">
        <div className="w-full rounded-lg">
          <div className="w-full max-w-[100%] border rounded-lg">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={`row-${i}`} className="flex border-b p-4">
                  <div className="flex-1">
                    <Skeleton className="h-6 w-32" />
                  </div>
                  <div className="flex-1">
                    <Skeleton className="h-6 w-36" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
