import { ArrowLeft } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center pt-12">
      <div className="flex items-center mb-4 gap-20">
        {/* Back button skeleton */}
        <div className="w-fit flex gap-2">
          <ArrowLeft />
          <Skeleton className="h-5 w-32" />
        </div>
        {/* Go to team button skeleton */}
        <Skeleton className="h-5 w-32" />
      </div>
      <div className="flex items-center gap-5">
        {/* Driver image skeleton */}
        <Skeleton className="h-[200px] w-[200px] rounded" />
        <div className="flex flex-col gap-2">
          {/* Driver name skeleton */}
          <Skeleton className="h-8 w-[400px]" />
          {/* Flag skeleton */}
          <Skeleton className="h-[70px] w-[70px] rounded-lg" />
        </div>
      </div>
      <Table className="mt-12">
        <TableCaption>
          <Skeleton className="h-5 w-[200px] mx-auto" />
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Grand Prix</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-center">Position</TableHead>
            <TableHead className="text-center">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Generate 10 skeleton rows */}
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-6 w-[150px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-[100px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-[120px]" />
              </TableCell>
              <TableCell className="text-center">
                <Skeleton className="h-6 w-6 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <Skeleton className="h-6 w-6 mx-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
