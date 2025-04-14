import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Circuit } from '@/lib/getCircuits';

interface RaceCardFooterProps {
  isFeaturedCard?: boolean;
  round: Circuit;
}

export function RaceCardFooter({ isFeaturedCard, round }: RaceCardFooterProps) {
  return (
    <CardFooter className="mt-7 flex gap-3 flex-wrap">
      {isFeaturedCard ? (
        <>
          <Link href="/login">
            <Button variant="outline" className="cursor-pointer">
              Login to watch live <span className="font-extrabold">FREE</span>
            </Button>
          </Link>

          <Link
            href="https://f1tv.formula1.com/"
            target="_blank"
            className="cursor-pointer text-sm hover:underline"
          >
            Watch on F1 TV <span className="font-extrabold">PRO</span>
          </Link>
        </>
      ) : (
        <Link href="/schedule" className="cursor-pointer text-lg hover:underline">
          {round.finished ? 'See full results' : 'More info'}
        </Link>
      )}
    </CardFooter>
  );
}
