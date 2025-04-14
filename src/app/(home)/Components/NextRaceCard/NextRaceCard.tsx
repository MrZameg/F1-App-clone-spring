import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getNextRound } from '@/lib/getCircuits';
import Image from 'next/image';
import Link from 'next/link';

export async function NextRaceCard() {
  const nextRound = await getNextRound();

  return (
    <div className="border rounded-2xl w-full">
      {nextRound && (
        <Card className="bg-transparent">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="text-xl">
                Next Round
                <span className="text-gray-400 text-sm ml-2"> Round {nextRound.round} </span>
              </div>

              <span className="bg-white rounded-3xl py-1 px-4 text-sidebar-accent font-bold text-lg">
                {nextRound.date} {nextRound.month}
              </span>
            </CardTitle>
            <CardDescription className="flex items-center gap-3 mt-5">
              <div className="flex flex-col justify-center gap-1">
                <div className="text-4xl flex items-center gap-2 font-bold text-accent-foreground">
                  {nextRound.name}
                  <Image src={nextRound.flagImageUrl} alt={nextRound.name} width={40} height={40} />
                </div>
                <div className="text-sm">{nextRound.circuitName}</div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full flex items-center gap-5">
              <Image
                src={nextRound.circuitImageUrl}
                alt={nextRound.name}
                width={150}
                height={150}
              />
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold"> Qualifying: </span>
                  <span className="bg-white rounded-3xl py-1 px-4 text-sidebar-accent font-bold text-base">
                    {nextRound.qualifyingDay} - {nextRound.qualifyingHour}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold"> Race: </span>
                  <span className="bg-white rounded-3xl py-1 px-4 text-sidebar-accent font-bold text-base">
                    {nextRound.raceDay} - {nextRound.raceHour}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-7 flex gap-3 flex-wrap">
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
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
