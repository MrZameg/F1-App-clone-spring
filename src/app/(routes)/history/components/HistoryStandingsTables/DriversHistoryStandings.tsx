import { getDriverStatistics } from '@/lib/getDrivers';
import { HistoryStandingsTableProps } from './HistoryTables.types';
import {
  DriversStatisticsTable,
  DriversStatisticsTableSkeleton,
} from '@/components/shared/DriversStatisticsTable';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { DriverStatistics } from '@/components/shared/DriversStatisticsTable/DriverStatisticsTable.types';

export function DriversHistoryStandings(props: HistoryStandingsTableProps) {
  const { season } = props;
  const [drivers, setDrivers] = useState<DriverStatistics[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getDrivers = useCallback(async () => {
    setIsLoading(true);
    const driversData = await getDriverStatistics(season);
    setDrivers(driversData);
    setIsLoading(false);
  }, [season]);

  useEffect(() => {
    getDrivers();
  }, [season]);

  if (isLoading) {
    return <DriversStatisticsTableSkeleton />;
  }

  return <DriversStatisticsTable drivers={drivers} />;
}
