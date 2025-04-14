import { Circuit } from '@/lib/getCircuits';

interface RaceCardPodiumProps {
  round: Circuit;
}

export default function RaceCardPodium({ round }: RaceCardPodiumProps) {
  return (
    <>
      {round.finished && round.podium && (
        <>
          {round.podium.firstPlace && (
            <div className="flex items-center gap-2">
              <span className="font-bold"> 1. </span>
              <div> {round.podium.firstPlace.name} </div>
            </div>
          )}
          {round.podium.secondPlace && (
            <div className="flex items-center gap-2">
              <span className="font-bold"> 2. </span>
              <div> {round.podium.secondPlace.name} </div>
            </div>
          )}
          {round.podium.thirdPlace && (
            <div className="flex items-center gap-2">
              <span className="font-bold"> 3. </span>
              <div> {round.podium.thirdPlace.name} </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
