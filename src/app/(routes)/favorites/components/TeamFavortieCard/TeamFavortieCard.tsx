import { getTeamStatistics } from '@/lib/getTeams';
import { TeamFavortieCardProps } from './TeamFavortieCard.types';
import Image from 'next/image';
import { TeamChart } from '../TeamChart';
import Link from 'next/link';

export async function TeamFavortieCard({ teamInfo, teamResultsId }: TeamFavortieCardProps) {
  const teamResults = await getTeamStatistics(
    teamResultsId || '',
    new Date().getFullYear().toString()
  );

  return (
    <div className="flex w-full flex-col md:flex-row gap-3  not-last:border-b border-border py-5">
      <div className="w-full md:w-1/2 flex items-center gap-2">
        <Link href={`/team-info/${teamInfo?.id}`}>
          <Image
            src={teamInfo?.carUrl || ''}
            alt={teamInfo?.name || ''}
            width={300}
            height={300}
            className="rounded-lg object-cover hover:scale-105 transition-all duration-300"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{teamInfo?.name}</h2>
          <Image src={teamInfo?.logoUrl || ''} alt={teamInfo?.name || ''} width={40} height={40} />
          <p className="text-sm">Current Position: {teamInfo?.position}</p>
          <p className="text-sm">Points: {teamInfo?.points}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <TeamChart teamResults={teamResults?.teamResults || null} />
      </div>
    </div>
  );
}
