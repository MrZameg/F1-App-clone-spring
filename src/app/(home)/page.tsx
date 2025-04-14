import { PositionTable } from '@/app/(home)/Components/PositionTable';
import { TeamTable } from '@/app/(home)/Components/TeamTable';
import { NextRaceCard } from './Components/NextRaceCard';

export default function Home() {
  return (
    <div className="flex gap-5 flex-wrap">
      <PositionTable />
      <div className="flex flex-col gap-5 grow">
        <TeamTable />
        <NextRaceCard />
      </div>
    </div>
  );
}
