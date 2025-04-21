import { PositionTableSkeleton } from '@/app/(routes)/(home)/Components/InfoPositionTable';
import { TeamTableSkeleton } from '@/app/(routes)/(home)/Components/InfoTeamTable/TeamTable.skeleton';
import { RaceCardSkeleton } from '@/components/shared/RaceCard/RaceCard.skeleton';
export default function Loading() {
  return (
    <div className="flex gap-5 flex-wrap">
      <PositionTableSkeleton />
      <div className="flex flex-col gap-5 grow">
        <TeamTableSkeleton />
        <RaceCardSkeleton />
      </div>
    </div>
  );
}
