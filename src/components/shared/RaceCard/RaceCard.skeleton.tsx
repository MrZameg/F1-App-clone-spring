import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function RaceCardSkeleton() {
  return (
    <div className="border rounded-2xl w-full min-w-[280px]">
      <Card className="bg-transparent">
        <CardHeader>
          <CardTitle className="text-xl flex flex-wrap items-center gap-2">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-4 w-20" />
          </CardTitle>
          <CardDescription className="text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Skeleton className="h-8 w-36 sm:w-48" />
              <Skeleton className="h-10 w-10" />
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Skeleton className="h-[150px] w-full sm:w-[150px] max-w-[150px]" />
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <div className="flex flex-wrap items-center gap-3">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-8 w-32 rounded-3xl" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-8 w-32 rounded-3xl" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-4 sm:mt-7 flex gap-3 flex-wrap">
          <Skeleton className="h-10 w-full sm:w-48" />
          <Skeleton className="h-6 w-32" />
        </CardFooter>
      </Card>
    </div>
  );
}
