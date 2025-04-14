import Image from 'next/image';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Circuit } from '@/lib/getCircuits';

interface RaceCardHeaderProps {
  isFeaturedCard?: boolean;
  round: Circuit;
}

export function RaceCardHeader({ isFeaturedCard, round }: RaceCardHeaderProps) {
  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <div className="text-xl">
          {isFeaturedCard && <span className="mr-2">Next Round</span>}
          <span className="text-gray-400 text-sm"> Round {round.round} </span>
        </div>

        <span className="bg-white rounded-3xl py-1 px-4 text-sidebar-accent font-bold text-lg">
          {round.date} {round.month}
        </span>
      </CardTitle>
      <CardDescription className="flex items-center gap-3 mt-5">
        <div className="flex flex-col justify-center gap-1">
          <div className="text-4xl flex items-center gap-2 font-bold text-accent-foreground">
            {round.name}
            {round.flagImageUrl && (
              <Image src={round.flagImageUrl} alt={round.name} width={40} height={40} />
            )}
          </div>
          <div className="text-sm">{round.circuitName}</div>
        </div>
      </CardDescription>
    </CardHeader>
  );
}
