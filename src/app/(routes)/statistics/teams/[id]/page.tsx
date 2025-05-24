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
import { getTeamStatistics } from '@/lib/getTeams';
import GoBackPage from '@/components/shared/GoBackPage/GoBackPage';

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ id: string; season: string }>;
}) {
  const { id } = await params;
  const { season } = await searchParams;

  const teamResults = await getTeamStatistics(id, season);

  return (
    <div className="flex flex-col justify-center pt-12">
      <div className="mb-4">
        <GoBackPage href="/statistics" text="Back to statistics" />
      </div>
      <div className="flex items-center gap-5">
        <h1 className="flex items-center gap-2 text-2xl font-bold">
          Results for {teamResults?.teamName} in {season}
        </h1>
      </div>

      <Table className="mt-12">
        <TableCaption>
          {teamResults?.teamName} in {season}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Grand Prix</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-center">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamResults?.teamResults.map((result) => (
            <TableRow key={result.grandPrix.id}>
              <TableCell>
                {teamResults.season === new Date().getFullYear().toString() ? (
                  <Link href={`/schedule/${result.grandPrix.id}`}>{result.grandPrix.name}</Link>
                ) : (
                  <Link
                    href={`/statistics/teams/${result.grandPrix.id}?sessionId=${result.grandPrix.sessionId}&season=${teamResults.season}`}
                  >
                    {result.grandPrix.name}
                  </Link>
                )}
              </TableCell>
              <TableCell>{result.date}</TableCell>
              <TableCell className="text-center">{result.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
