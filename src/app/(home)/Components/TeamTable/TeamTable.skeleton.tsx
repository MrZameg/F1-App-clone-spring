import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

export function TeamTableSkeleton() {
  return (
    <div className="border rounded-2xl w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-4"> </TableHead>
            <TableHead className="font-bold px-4">Position</TableHead>
            <TableHead className="font-bold px-4">Team</TableHead>
            <TableHead className="text-right font-bold px-4">Points</TableHead>
            <TableHead className="px-4"> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="px-4">
                <div className="flex justify-center items-center">
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-6 mx-auto" />
              </TableCell>
              <TableCell className="px-4">
                <Skeleton className="h-6 w-32" />
              </TableCell>
              <TableCell className="text-right px-4">
                <Skeleton className="h-6 w-16 ml-auto" />
              </TableCell>
              <TableCell className="px-4">
                <Skeleton className="h-10 w-[70px]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
