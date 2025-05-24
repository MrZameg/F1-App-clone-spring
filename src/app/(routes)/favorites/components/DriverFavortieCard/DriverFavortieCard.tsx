import { getDriverInfo, getDriverStatistics } from '@/lib/getDrivers';
import { DriverFavortieCardProps } from './DriverFavortieCard.types';
import Image from 'next/image';
import { DriverChart } from '../DriverChart';
import Link from 'next/link';

export async function DriverFavortieCard({ driverId, driverStatistics }: DriverFavortieCardProps) {
  const driver = await getDriverInfo(driverId);
  const driverResults = await getDriverStatistics(
    driverId,
    driverStatistics?.driver.statisticsHandle || '',
    new Date().getFullYear().toString()
  );

  return (
    <div className="flex w-full flex-col md:flex-row gap-3  not-last:border-b border-border py-5">
      <div className="w-full md:w-1/2 flex items-center gap-2">
        <Link href={`/driver-info/${driverId}`}>
          <Image
            src={driver?.driverImageUrl || ''}
            alt={driver?.name || ''}
            width={300}
            height={300}
            className="rounded-lg object-cover hover:scale-105 transition-all duration-300"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{driver?.name}</h2>
          <Image
            src={driver?.countryFlagUrl || ''}
            alt={driver?.country || ''}
            width={40}
            height={40}
          />
          <p className="text-sm">Number: {driver?.driverNumber}</p>
          <p className="text-sm">Team: {driver?.team}</p>
          <p className="text-sm">Current Position: {driverStatistics?.position}</p>
          <p className="text-sm">Points: {driverStatistics?.points}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <DriverChart driverResults={driverResults?.driverResults || null} />
      </div>
    </div>
  );
}
