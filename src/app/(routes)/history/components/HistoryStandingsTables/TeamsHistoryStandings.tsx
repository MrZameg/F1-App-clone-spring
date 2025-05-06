import { HistoryStandingsTableProps } from './HistoryTables.types';
import { getTeamsStatistics } from '@/lib/getTeams';
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
    const teams = await getTeamsStatistics(season);
    setTeams(teams);
    setIsLoading(false);
  }, [season]);

  useEffect(() => {
    getTeams();
  }, [season, getTeams]);

  if (isLoading) {
    return <TeamsStatisticsTableSkeleton />;
  }

  return <TeamsStatisticsTable teams={teams} />;
}
