import { DriversStatistics } from '@/lib/getDrivers';

export interface DriverFavortieCardProps {
  driverId: string;
  driverStatistics: DriversStatistics | null;
}
