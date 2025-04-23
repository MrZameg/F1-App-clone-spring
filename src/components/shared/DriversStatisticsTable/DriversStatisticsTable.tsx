import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { DriverStatisticsTableProps } from './DriverStatisticsTable.types';

export function DriversStatisticsTable(props: DriverStatisticsTableProps) {
  const { drivers } = props;

  return (
    <div className="w-full border rounded-lg p-2">
      <Table className="w-full">
        <TableCaption>
          Drivers Statistics for selected season {new Date().getFullYear()}
        </TableCaption>
        <TableHeader>
          <TableRow className="text-base">
            <TableHead>Position</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drivers?.map((driver) => (
            <TableRow className="cursor-pointer" key={driver.driver?.id}>
              <TableCell className="text-center font-bold">{driver.position}</TableCell>
              <TableCell className="text-lg py-3">
                <Link
                  className="underline-offset-4 hover:underline"
                  href={`/drivers/statistics/${driver.driver?.id}?id=${driver.driver?.statisticsHandle}`}
                >
                  {driver.driver?.name} {driver.driver?.lastName}
                </Link>
              </TableCell>
              <TableCell>{driver.country}</TableCell>
              <TableCell>
                <Link
                  className="underline-offset-4 hover:underline"
                  href={`/teams-statistics/${driver.team?.id}`}
                >
                  {driver.team?.name}
                </Link>
              </TableCell>
              <TableCell className="text-right font-bold">{driver.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
