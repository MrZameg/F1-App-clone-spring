import { DriverCardsProps } from './DriverCards.types';
import { DriverFavortieCard } from '../DriverFavortieCard';
import { getDriversStatistics } from '@/lib/getDrivers';

export async function DriverCards({ favoriteDrivers }: DriverCardsProps) {
  const driversStatistics = await getDriversStatistics(new Date().getFullYear().toString());
  const favoriteDriversStatistics = driversStatistics?.filter((driver) =>
    favoriteDrivers.includes(driver.driver.id)
  );

  return favoriteDrivers.map((driver) => {
    const driverStatistics = favoriteDriversStatistics?.find(
      (driverStat) => driverStat.driver.id === driver
    );
    return (
      <DriverFavortieCard
        key={driver}
        driverId={driver}
        driverStatistics={driverStatistics || null}
      />
    );
  });
}
