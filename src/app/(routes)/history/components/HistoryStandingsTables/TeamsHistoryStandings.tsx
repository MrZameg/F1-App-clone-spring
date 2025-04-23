import { HistoryStandingsTableProps } from './HistoryTables.types';
import { getTeamStatistics } from '@/lib/getTeams';
import { useCallback, useEffect, useState } from 'react';
import {
  TeamsStatisticsTable,
  TeamsStatisticsTableSkeleton,
  TeamStatistics,
} from '@/components/shared/TeamsStatisticsTable';

export function TeamsHistoryStandings(props: HistoryStandingsTableProps) {
  const { season } = props;
  const [teams, setTeams] = useState<TeamStatistics[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getTeams = useCallback(async () => {
    setIsLoading(true);
    const teams = await getTeamStatistics(season);
    setTeams(teams);
    setIsLoading(false);
  }, [season]);

  useEffect(() => {
    getTeams();
  }, [season]);

  if (isLoading) {
    return <TeamsStatisticsTableSkeleton />;
  }

  return <TeamsStatisticsTable teams={teams} />;
}
