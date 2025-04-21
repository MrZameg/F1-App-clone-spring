import { Card } from '@/components/ui/card';
import { RaceCardProps } from './RaceCaes.types';
import { RaceCardHeader } from './Components/RaceCardHeader';
import { RaceCardContent } from './Components/RaceCardContent';
import { RaceCardFooter } from './Components/RaceCardFooter';
import { auth } from '@clerk/nextjs/server';

export async function RaceCard(props: RaceCardProps) {
  const { isFeaturedCard, round } = props;
  const { userId } = await auth();

  return (
    <div className="border rounded-2xl w-full">
      {round && (
        <Card className="bg-transparent border-none">
          <RaceCardHeader isFeaturedCard={isFeaturedCard} round={round} />
          <RaceCardContent isFeaturedCard={isFeaturedCard} round={round} />
          <RaceCardFooter isFeaturedCard={isFeaturedCard} round={round} userId={userId} />
        </Card>
      )}
    </div>
  );
}
