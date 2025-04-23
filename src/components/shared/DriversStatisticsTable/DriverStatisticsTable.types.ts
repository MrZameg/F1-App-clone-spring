export interface DriverStatisticsTableProps {
  drivers: DriverStatistics[] | null;
  season?: string;
}

export interface DriverStatistics {
  position: string;
  driver: {
    id: string;
    statisticsHandle: string;
    name: string;
    lastName: string;
    abbreviated: string;
  };
  country: string;
  team: {
    id: string;
    name: string;
  };
  points: string;
}
