import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

export function PositionTableSkeleton() {
  const array = Array.from({ length: 20 });
  return (
    <div className="border rounded-2xl grow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead> </TableHead>
            <TableHead className="font-bold px-4">Position</TableHead>
            <TableHead className="font-bold px-4">Name</TableHead>
            <TableHead className="font-bold px-4">Team</TableHead>
            <TableHead className="font-bold px-4">Nationality</TableHead>
            <TableHead className="text-right font-bold px-4">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {array.map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex justify-center items-center">
                  <Skeleton className="h-[70px] w-[70px] rounded-full" />
                </div>
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-6 mx-auto" />
              </TableCell>
              <TableCell className="px-4">
                <Skeleton className="h-6 w-24" />
              </TableCell>
              <TableCell className="px-4">
                <Skeleton className="h-6 w-24" />
              </TableCell>
              <TableCell className="px-4">
                <Skeleton className="h-6 w-20" />
              </TableCell>
              <TableCell className="text-right px-4">
                <Skeleton className="h-6 w-10 ml-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
