import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScheduleResultsTableProps } from './ScheduleResultsTable.types';

export default function ScheduleResultsTable({ circuitInfo }: ScheduleResultsTableProps) {
  return (
    <div className="w-full gap-4 flex flex-col mt-12">
      <h2 className="text-2xl font-bold text-center">Last Race Results:</h2>
      <p className="text-center text-sm font-bold">({circuitInfo?.date})</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Position</TableHead>
            <TableHead>Number</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Laps</TableHead>
            <TableHead>Time/Retired</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {circuitInfo?.results?.map((result, i) => (
            <TableRow key={`${i}-${result.position}`}>
              <TableCell>{result.position}</TableCell>
              <TableCell>{result.number}</TableCell>
              <TableCell>{result.driver}</TableCell>
              <TableCell>{result.laps}</TableCell>
              <TableCell>{result.timeRetired}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
