import { PositionTableSkeleton } from '@/app/(home)/Components/PositionTable';
import { TeamTableSkeleton } from '@/app/(home)/Components/TeamTable/TeamTable.skeleton';
import { NextRaceCardSkeleton } from '@/app/(home)/Components/NextRaceCard/NextRaceCard.skeleton';
export default function Loading() {
  return (
    <div className="flex gap-5 flex-wrap">
      <PositionTableSkeleton />
      <div className="flex flex-col gap-5 grow">
        <TeamTableSkeleton />
        <NextRaceCardSkeleton />
      </div>
    </div>
  );
}
