import { getDriverInfo, getDriverStatistics } from '@/lib/getDrivers';
import Image from 'next/image';
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
import { unstable_ViewTransition as ViewTransition } from 'react';
import GoBackPage from '@/components/shared/GoBackPage/GoBackPage';
import { getTeams, Team } from '@/lib/getTeams';
import GoTeamPage from '@/components/shared/GoTeamPage/GoTeamPage';

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ id: string; season: string }>;
}) {
  const { id } = await params;
  const { id: driverId, season } = await searchParams;

  const driverResults = await getDriverStatistics(id, driverId, season || '2025');
  const driver = await getDriverInfo(id);
  let teams: Team[] | null = null;
  let teamId: string | undefined = undefined;
  if (driver) {
    teams = await getTeams();
    teamId = teams?.find((team) => team.name === driver.team)?.id;
  }

  return (
    <div className="flex flex-col justify-center pt-12">
      <div className="flex items-center mb-4 gap-20">
        {season === new Date().getFullYear().toString() || season === null ? (
          <GoBackPage href="/statistics" text="Back to statistics" />
        ) : (
          <GoBackPage href="/history" text="Back to history page" />
        )}
        {teamId && <GoTeamPage teamId={teamId} />}
      </div>
      <div className="flex items-center gap-5">
        {driver?.driverImageUrl && (
          <ViewTransition name={`driver-image-${driver.id}`}>
            <Image
              src={driver?.driverImageUrl || ''}
              alt={driver?.name || ''}
              width={200}
              height={200}
            />
          </ViewTransition>
        )}
        <h1 className="flex items-center gap-2 text-2xl font-bold">
          Results for {driver?.name || driverResults?.driverName} in {season}
          {driver?.countryFlagUrl && (
            <span>
              <Image
                src={driver?.countryFlagUrl || ''}
                alt={driver?.name || ''}
                width={70}
                height={70}
                className="rounded-lg"
              />
            </span>
          )}
        </h1>
      </div>
      <Table className="mt-12">
        <TableCaption>
          {driver?.name || driverResults?.driverName} in {season}
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
          {driverResults?.driverResults.map((result) => (
            <TableRow key={result.grandPrix.id}>
              <TableCell>
                {driverResults.season === new Date().getFullYear().toString() ? (
                  <Link href={`/schedule/${result.grandPrix.id}`}>{result.grandPrix.name}</Link>
                ) : (
                  <Link
                    href={`/statistics/teams/${result.grandPrix.id}?sessionId=${result.grandPrix.sessionId}&season=${driverResults.season}`}
                  >
                    {result.grandPrix.name}
                  </Link>
                )}
              </TableCell>
              <TableCell>{result.date}</TableCell>
              <TableCell>{result.car}</TableCell>
              <TableCell className="text-center">{result.racePosition}</TableCell>
              <TableCell className="text-center">{result.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
