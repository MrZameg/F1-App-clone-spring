import { PositionTable } from '@/app/(routes)/(home)/Components/PositionTable';
import { TeamTable } from '@/app/(routes)/(home)/Components/TeamTable';
import { RaceCard } from '@/components/shared/RaceCard';
import { getNextRound } from '@/lib/getCircuits';

export default async function Home() {
  const nextRound = await getNextRound();

  return (
    <div className="flex gap-5 flex-wrap">
      <PositionTable />
      <div className="flex flex-col gap-5 grow">
        <TeamTable />
        {nextRound && <RaceCard isFeaturedCard={true} round={nextRound} />}
      </div>
    </div>
  );
}
