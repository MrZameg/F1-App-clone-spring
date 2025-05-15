import { TeamCardsProps } from './TeamCards.types';
import { TeamFavortieCard } from '../TeamFavortieCard';
import { getTeamInfo, getTeams, getTeamsStatistics } from '@/lib/getTeams';

export async function TeamCards({ favoriteTeams }: TeamCardsProps) {
  const teams = await getTeams();
  const teamsStatistics = await getTeamsStatistics(new Date().getFullYear().toString());

  return favoriteTeams.map(async (team) => {
    const teamInfo = teams?.find((t) => t.id === team);
    const teamStatistics = teamsStatistics?.find((t) => t.position === teamInfo?.position);
    return (
      <TeamFavortieCard
        key={team}
        teamInfo={teamInfo || null}
        teamResultsId={teamStatistics?.id || null}
      />
    );
  });
}
