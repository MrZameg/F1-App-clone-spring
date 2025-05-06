import { getDriversStatistics } from '@/lib/getDrivers';
import { HistoryStandingsTableProps } from './HistoryTables.types';
import {
  DriversStatisticsTable,
  DriversStatisticsTableSkeleton,
  DriverStatistics,
} from '@/components/shared/DriversStatisticsTable';
import { useCallback, useEffect, useState } from 'react';

export function DriversHistoryStandings(props: HistoryStandingsTableProps) {
  const { season, searchValue } = props;
  const [drivers, setDrivers] = useState<DriverStatistics[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  let filteredDrivers = drivers;

  const getDrivers = useCallback(async () => {
    setIsLoading(true);
    const driversData = await getDriversStatistics(season);
    setDrivers(driversData);
    setIsLoading(false);
  }, [season]);

  useEffect(() => {
    getDrivers();
  }, [season, getDrivers]);

  if (drivers && searchValue) {
    filteredDrivers = drivers?.filter(
      (driver) =>
        driver.driver?.name.toLowerCase().includes(searchValue?.toLowerCase()) ||
        driver.driver?.lastName.toLowerCase().includes(searchValue?.toLowerCase()) ||
        driver.driver?.abbreviated.toLowerCase().includes(searchValue?.toLowerCase())
    );
  }

  if (isLoading) {
    return <DriversStatisticsTableSkeleton />;
  }

  return <DriversStatisticsTable drivers={filteredDrivers} />;
}
