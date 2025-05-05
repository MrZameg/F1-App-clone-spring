import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Circuit } from '@/lib/getCircuits';

interface RaceCardFooterProps {
  isFeaturedCard?: boolean;
  round: Circuit;
  userId?: string | null;
}

export function RaceCardFooter({ isFeaturedCard, round, userId }: RaceCardFooterProps) {
  return (
    <CardFooter className="mt-7 flex gap-3 flex-wrap">
      {isFeaturedCard ? (
        <>
          {userId ? (
            <Link href="https://t.me/F1envivo2024" target="_blank">
              <Button variant="outline" className="cursor-pointer">
                Catch the <span className="font-extrabold">LIVE</span> event for
                <span className="font-extrabold">FREE</span> on Telegram!
              </Button>
            </Link>
          ) : (
            <Link href="/sign-in">
              <Button variant="outline" className="cursor-pointer">
                Login to watch live <span className="font-extrabold">FREE</span>
              </Button>
            </Link>
          )}
          <Link
            href="https://f1tv.formula1.com/"
            target="_blank"
            className="cursor-pointer text-sm hover:underline"
          >
            Watch on F1 TV <span className="font-extrabold">PRO</span>
          </Link>
        </>
      ) : (
        <span className="cursor-pointer text-lg hover:underline">
          {round.finished ? 'See full results' : 'More info'}
        </span>
      )}
    </CardFooter>
  );
}
