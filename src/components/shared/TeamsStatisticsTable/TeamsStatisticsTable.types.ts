export interface TeamsStatisticsTableProps {
  teams: TeamStatistics[] | null;
}

export interface TeamStatistics {
  position: string;
  team: string;
  points: string;
  id: string;
}
