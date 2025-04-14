import { Card } from '@/components/ui/card';
import { RaceCardProps } from './RaceCaes.types';
import { RaceCardHeader } from './Components/RaceCardHeader';
import { RaceCardContent } from './Components/RaceCardContent';
import { RaceCardFooter } from './Components/RaceCardFooter';

export async function RaceCard(props: RaceCardProps) {
  const { isFeaturedCard, round } = props;

  return (
    <div className="border rounded-2xl w-full">
      {round && (
        <Card className="bg-transparent border-none">
          <RaceCardHeader isFeaturedCard={isFeaturedCard} round={round} />
          <RaceCardContent isFeaturedCard={isFeaturedCard} round={round} />
          <RaceCardFooter isFeaturedCard={isFeaturedCard} round={round} />
        </Card>
      )}
    </div>
  );
}
