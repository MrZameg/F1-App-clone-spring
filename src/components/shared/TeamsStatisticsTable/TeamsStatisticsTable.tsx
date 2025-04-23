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
import { TeamsStatisticsTableProps } from './TeamsStatisticsTable.types';

export function TeamsStatisticsTable(props: TeamsStatisticsTableProps) {
  const { teams, season } = props;

  return (
    <div className="w-full border rounded-lg p-2">
      <Table className="w-full">
        <TableCaption>
          Teams Statistics for selected season {season ? season : new Date().getFullYear()}
        </TableCaption>
        <TableHeader>
          <TableRow className="text-base">
            <TableHead>Position</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams?.map((team) => (
            <TableRow className="cursor-pointer" key={team.id}>
              <TableCell className="text-center font-bold">{team.position}</TableCell>
              <TableCell className="text-lg py-3">
                <Link
                  className="underline-offset-4 hover:underline"
                  href={`/teams/statistics/${team.id}`}
                >
                  {team.team}
                </Link>
              </TableCell>
              <TableCell className="text-right font-bold">{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
