import Image from 'next/image';
import { DriverImageSectionProps } from './DriverImageSection.types';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { AddRemoveFavorites } from '@/components/shared/AddRemoveFavorites';
import GoBackPage from '@/components/shared/GoBackPage/GoBackPage';
import GoTeamPage from '@/components/shared/GoTeamPage/GoTeamPage';
import { getTeams } from '@/lib/getTeams';

export default async function DriverImageSection({ driverInfo }: DriverImageSectionProps) {
  const teams = await getTeams();
  const teamId = teams?.find((team) => team.name === driverInfo.team)?.id;

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-5">
      <div className="flex justify-between">
        <GoBackPage />
        <GoTeamPage teamId={teamId} />
      </div>
      <ViewTransition name={`driver-image-${driverInfo.id}`}>
        <Image
          src={driverInfo?.driverImageUrl}
          alt={driverInfo?.name}
          width={1000}
          height={1000}
          className="rounded-md"
        />
      </ViewTransition>
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold">{driverInfo.name} </h1>
        <Image
          src={driverInfo?.countryFlagUrl}
          alt={driverInfo?.country}
          width={80}
          height={30}
          className="rounded-md"
        />
        <AddRemoveFavorites type="driver" id={driverInfo.id} />
      </div>
      <article>
        <h4 className="text-xl font-bold mb-2">Biography</h4>
        <p className="text-base"> {driverInfo?.biography} </p>
      </article>
    </div>
  );
}
