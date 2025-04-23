export interface TeamsStatisticsTableProps {
  teams: TeamStatistics[] | null;
  season?: string;
}

export interface TeamStatistics {
  position: string;
  team: string;
  points: string;
  id: string;
}
