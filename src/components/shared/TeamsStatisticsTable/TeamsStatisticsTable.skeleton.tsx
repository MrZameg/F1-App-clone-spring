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

export function TeamsStatisticsTableSkeleton() {
  return (
    <div className="w-full border rounded-lg p-2">
      <Table className="w-full">
        <TableCaption>
          <Skeleton className="h-4 w-64 mx-auto" />
        </TableCaption>
        <TableHeader>
          <TableRow className="text-base">
            <TableHead>Position</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">
                <Skeleton className="h-6 w-6 mx-auto" />
              </TableCell>
              <TableCell className="text-lg py-3">
                <Skeleton className="h-6 w-36" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-6 w-8 ml-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
