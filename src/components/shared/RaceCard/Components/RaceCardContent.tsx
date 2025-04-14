import Image from 'next/image';
import { CardContent } from '@/components/ui/card';
import { Circuit } from '@/lib/getCircuits';
import RaceCardPodium from './RaceCardPodium';

interface RaceCardContentProps {
  isFeaturedCard?: boolean;
  round: Circuit;
}

export function RaceCardContent({ isFeaturedCard, round }: RaceCardContentProps) {
  return (
    <CardContent>
      <div className="w-full flex items-center gap-5">
        {round.circuitImageUrl && (
          <Image
            src={round.circuitImageUrl}
            alt={round.name || round.id}
            width={150}
            height={150}
          />
        )}
        <div className={`flex flex-col ${isFeaturedCard ? 'gap-3' : 'gap-1'}`}>
          {isFeaturedCard && (
            <>
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold"> Qualifying: </span>
                <span className="bg-white rounded-3xl py-1 px-4 text-sidebar-accent font-bold text-base">
                  {round.qualifyingDay} - {round.qualifyingHour}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold"> Race: </span>
                <span className="bg-white rounded-3xl py-1 px-4 text-sidebar-accent font-bold text-base">
                  {round.raceDay} - {round.raceHour}
                </span>
              </div>
            </>
          )}
          <RaceCardPodium round={round} />
        </div>
      </div>
    </CardContent>
  );
}
