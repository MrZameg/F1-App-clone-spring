import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

export function DriverInfoTableSkeleton() {
  // Create array of rows based on the actual table structure
  const tableRows = [
    'Name',
    'Number',
    'Team',
    'Country',
    'Points',
    'Podiums',
    'Grands Prix Entered',
    'World Championships',
    'Highest Race Finish',
    'Highest Grid Position',
    'Date of Birth',
    'Place of Birth',
  ];

  return (
    <Table>
      <TableBody className="cursor-pointer">
        {tableRows.map((label, index) => (
          <TableRow key={index}>
            <TableCell className="font-bold text-lg py-4">{label}:</TableCell>
            <TableCell className="text-base">
              <Skeleton className="h-6 w-32" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
